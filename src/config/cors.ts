import { cors } from "hono/cors";

export default cors({
  const allowedOrigins = [
  "http://localhost:4000",
  "http://mugiwaraanime.great-site.net",
  "https://mugiwaraanime.great-site.net",
  "*"
];, // Allow frontend access
  allowMethods: ["GET", "POST"], // Allow GET & POST requests
  allowHeaders: ["Content-Type"], // Allow content type headers
});
