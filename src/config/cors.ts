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
      return origin; // Allow requests from allowed origins
    }
    return "https://mugiwaraanime.great-site.net"; // Default origin
  },
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  maxAge: 600,
  credentials: true,
});

export default corsConfig;
