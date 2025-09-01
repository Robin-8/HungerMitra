import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { create, router as jsonServerRouter } from "json-server";
import cors from "cors";

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS (so frontend + API work together)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// ---------- JSON SERVER (fake API) ----------
const jsonServer = create();
const router = jsonServerRouter("./db.json");
jsonServer.use(express.json());
jsonServer.use(cors());

// Mount json-server API at /api
app.use("/api", jsonServer);
app.use("/api", router);

// ---------- React Build ----------
const buildPath = path.join(__dirname, "dist");
app.use(express.static(buildPath));

// Fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
