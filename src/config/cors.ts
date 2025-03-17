import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  origin: "*", // Allows all origins (change if needed)
  allowMethods: ["GET", "POST", "OPTIONS"], // Allow more methods if needed
  credentials: true,
});

export default corsConfig;
