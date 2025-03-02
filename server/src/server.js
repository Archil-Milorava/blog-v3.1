import { createServer } from "http";
import express from "express";

import connectDB from "./DB/connectDB.js";
import app from "./app.js";
import path from "path";

const PORT = process.env.PORT || 8000;

const server = createServer(app);

if (process.env.NODE_ENV) {
  app.use(express.static(path.join(__dirname), "/client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

server.listen(PORT, async () => {
  await connectDB();
  console.log(`serverver is running on port ${PORT}`);
});
