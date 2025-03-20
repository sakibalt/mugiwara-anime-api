import app from "../src/server.js"; // Import the actual app
import { handle } from "hono/vercel";

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

export default handler; // Export as default for Vercel
