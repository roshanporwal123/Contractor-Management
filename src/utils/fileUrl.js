const BASE = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/api\/?$/, "");

export const fileUrl = (path) => (path ? `${BASE}${path}` : "");