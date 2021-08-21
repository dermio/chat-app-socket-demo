const options = {
  cors: {
    origin: "*"
  }
};

// io is the server instance
const io = require("socket.io")(3000, options);

io.on("connection", socket => {
  // The socket.on method listens for the event type, then runs the callback.
  socket.on("send-chat-message", message => {
    /* The socket.broadcast.emit server method sends events
    to all connected clients except for the sender. */
    socket.broadcast.emit("chat-message", message);
  });
});
