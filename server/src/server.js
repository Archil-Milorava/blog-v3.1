import { createServer } from "http";
import { Server } from "socket.io";

import connectDB from "./DB/connectDB.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

export {io}

server.listen(PORT, async () => {
  await connectDB();
  console.log(`serverver is running on port ${PORT}`);
});
