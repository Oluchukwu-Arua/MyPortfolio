/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { apiUrl } from "../utils/urls.js";

const CONTENT_ENDPOINT = apiUrl("/api/content");

const PortfolioContentContext = React.createContext(null);

async function fetchContent() {
  const response = await fetch(CONTENT_ENDPOINT, { headers: { Accept: "application/json" } });

  if (!response.ok) {
    throw new Error(`Failed to load portfolio content (${response.status})`);
  }

  return response.json();
}

async function saveContent(content) {
  const response = await fetch(CONTENT_ENDPOINT, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || `Failed to save content (${response.status})`);
  }

  return response.json();
}

async function uploadImageFile(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(apiUrl("/api/images"), {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const details = await response.json().catch(() => null);
    throw new Error(details?.error || `Failed to upload image (${response.status})`);
  }

  return response.json();
}

export function PortfolioContentProvider({ children }) {
  const [content, setContent] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;

    fetchContent()
      .then((nextContent) => {
        if (!cancelled && nextContent) {
          setContent(nextContent);
          setIsLoaded(true);
          setError("");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("We couldn't load the latest portfolio content.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const refresh = React.useCallback(async () => {
    setError("");

    try {
      const nextContent = await fetchContent();
      setContent(nextContent);
      setIsLoaded(true);
      return nextContent;
    } catch (refreshError) {
      setError(refreshError.message || "We couldn't load the latest portfolio content.");
      throw refreshError;
    }
  }, []);

  const update = React.useCallback((nextContent) => {
    setContent(nextContent);
  }, []);

  const persist = React.useCallback(async (nextContent) => {
    setIsSaving(true);
    setError("");

    try {
      const saved = await saveContent(nextContent ?? content);
      setContent(saved);
      return saved;
    } catch (saveError) {
      setError(saveError.message || "Failed to save content.");
      throw saveError;
    } finally {
      setIsSaving(false);
    }
  }, [content]);

  const uploadImage = React.useCallback(async (file) => uploadImageFile(file), []);

  const value = React.useMemo(() => ({
    content,
    setContent: update,
    refresh,
    persist,
    uploadImage,
    isLoaded,
    isSaving,
    error,
    clearError: () => setError(""),
  }), [content, error, isLoaded, isSaving, persist, refresh, update, uploadImage]);

  return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
}

export function usePortfolioContent() {
  const context = React.useContext(PortfolioContentContext);

  if (!context) {
    throw new Error("usePortfolioContent must be used inside PortfolioContentProvider");
  }

  return context;
}
