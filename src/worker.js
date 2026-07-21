import { defaultPortfolioContent } from "./content/portfolioContent.js";

const CONTENT_KEY = "portfolio-content";
const IMAGE_KEY_PREFIX = "portfolio-image:";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("access-control-allow-origin", "*");
  headers.set("access-control-allow-headers", "content-type, authorization, x-admin-key");
  headers.set("access-control-allow-methods", "GET, PUT, POST, OPTIONS");

  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers,
  });
}

async function readContent(env) {
  const stored = await env.PORTFOLIO_CONTENT.get(CONTENT_KEY, { type: "json" });
  return stored || defaultPortfolioContent;
}

async function writeContent(env, content) {
  await env.PORTFOLIO_CONTENT.put(CONTENT_KEY, JSON.stringify(content));
  return content;
}

async function uploadImage(request, env) {
  const formData = await request.formData();
  const image = formData.get("image");

  if (!image || typeof image.arrayBuffer !== "function") {
    return json({ error: "Choose an image to upload." }, { status: 400 });
  }

  if (!ALLOWED_IMAGE_TYPES.has(image.type)) {
    return json({ error: "Only JPG, PNG, WebP, GIF, and AVIF images are supported." }, { status: 415 });
  }

  if (image.size > MAX_IMAGE_SIZE) {
    return json({ error: "Images must be 5 MB or smaller." }, { status: 413 });
  }

  const imageId = crypto.randomUUID();
  await env.PORTFOLIO_CONTENT.put(`${IMAGE_KEY_PREFIX}${imageId}`, await image.arrayBuffer(), {
    metadata: {
      contentType: image.type,
      filename: image.name,
      uploadedAt: new Date().toISOString(),
    },
  });

  return json({
    id: imageId,
    url: `/api/images/${imageId}`,
  }, { status: 201 });
}

async function serveImage(imageId, env) {
  const stored = await env.PORTFOLIO_CONTENT.getWithMetadata(`${IMAGE_KEY_PREFIX}${imageId}`, {
    type: "arrayBuffer",
  });

  if (!stored.value) {
    return json({ error: "Image not found" }, { status: 404 });
  }

  return new Response(stored.value, {
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": stored.metadata?.contentType || "application/octet-stream",
      "x-content-type-options": "nosniff",
    },
  });
}

function isAuthorized(request, env) {
  if (!env.ADMIN_KEY) {
    return true;
  }

  const token = request.headers.get("x-admin-key") || request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
  return token === env.ADMIN_KEY;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/images") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204 });
      }

      if (request.method === "POST") {
        if (!isAuthorized(request, env)) {
          return json({ error: "Unauthorized" }, { status: 401 });
        }

        return uploadImage(request, env);
      }

      return json({ error: "Method not allowed" }, { status: 405 });
    }

    const imageMatch = url.pathname.match(/^\/api\/images\/([0-9a-f-]+)$/i);
    if (imageMatch) {
      if (request.method === "GET" || request.method === "HEAD") {
        return serveImage(imageMatch[1], env);
      }

      return json({ error: "Method not allowed" }, { status: 405 });
    }

    if (url.pathname === "/api/content") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204 });
      }

      if (request.method === "GET") {
        return json(await readContent(env));
      }

      if (request.method === "PUT") {
        if (!isAuthorized(request, env)) {
          return json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await request.json();
        return json(await writeContent(env, payload));
      }

      return json({ error: "Method not allowed" }, { status: 405 });
    }

    return env.ASSETS.fetch(request);
  },
};
