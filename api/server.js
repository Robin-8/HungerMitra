const jsonServer = require("json-server");
const path = require("path");
const express = require("express");

const server = express();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Serve frontend build
server.use(express.static(path.join(__dirname, "dist")));

// API routes
server.use("/api", middlewares, router);

// Fallback for React Router
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
