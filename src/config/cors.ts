import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = [
  "http://localhost:4000",
  "http://mugiwaraanime.great-site.net",
  "https://mugiwaraanime.great-site.net",
];

const corsConfig = cors({
  origin: (origin) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return true; // Allow request from allowed origins
    }
    return false; // Block others
  },
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"], // Ensuring valid headers
  maxAge: 600,
  credentials: true,
});

export default corsConfig;
