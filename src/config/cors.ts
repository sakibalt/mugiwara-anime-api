import { cors } from "hono/cors";

export default cors({
  origin: ["https://mugiwaraanime.great-site.net"], // Allow frontend access
  allowMethods: ["GET", "POST"], // Allow GET & POST requests
  allowHeaders: ["Content-Type"], // Allow content type headers
});
