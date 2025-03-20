import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
  ? process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
  : ["http://localhost:4000", "https://mugiwaraanime.great-site.net"];

const corsConfig = cors({
  origin: (origin) => {
    if (!origin) return "*"; // Allow server-to-server requests
    if (allowedOrigins.includes(origin)) return origin;
    return "https://mugiwaraanime.great-site.net"; // Default fallback
  },
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 600
});

export default corsConfig;
