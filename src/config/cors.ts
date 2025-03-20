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
      return origin; // **FIX: Return the actual origin**
    }
    return null; // **FIX: Return null for disallowed origins**
  },
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
  maxAge: 600,
  credentials: true,
});

export default corsConfig;
