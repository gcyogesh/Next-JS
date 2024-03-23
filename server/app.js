import { Server } from 'socket.io';
import http from 'http';

// Create HTTP server
const httpServer = http.createServer();

// Initialize Socket.IO server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Event listener for connections
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (message, roomName) => {
    console.log(message, roomName);
    // Handle incoming message and potentially broadcast it
  });
});

// Start the server listening
const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server is running on http://localhost:${PORT}`);
});