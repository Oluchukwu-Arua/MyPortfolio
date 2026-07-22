const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const PUBLIC_BASE_URL = import.meta.env.BASE_URL || "/";

export function apiUrl(path) {
  return `${API_BASE_URL}${path}`;
}

export function resolveMediaUrl(value) {
  if (!value || typeof value !== "string") {
    return value;
  }

  if (value.startsWith("/api/") && API_BASE_URL) {
    return apiUrl(value);
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return `${PUBLIC_BASE_URL}${value.slice(1)}`;
  }

  return value;
}

export function applyImageFallback(event, fallback) {
  const image = event.currentTarget;
  image.onerror = null;

  if (fallback) {
    image.src = resolveMediaUrl(fallback);
  }
}
