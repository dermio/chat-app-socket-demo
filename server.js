const options = {
  cors: {
    origin: "*"
  }
};

// io is the server instance.
const io = require("socket.io")(3000, options);

const users = {}; // Save chat users in an object.

io.on("connection", socket => {
  // The socket listens for any new users.
  socket.on("new-user", name => {
    /* Save the new user to the users object with the unique socket id
    as the user key. */
    users[socket.id] = name;

    // Broadcast to the other users a new user has joined.
    socket.broadcast.emit("user-connected", name);
  });

  // The socket.on method listens for the event type, then runs the callback.
  socket.on("send-chat-message", message => {
    /* The socket.broadcast.emit server method sends events
    to all connected clients except for the sender. */
    socket.broadcast.emit("chat-message", { message, name: users[socket.id] });
  });

  // The socket listens for users disconnecting.
  socket.on("disconnect", () => {
    // Broadcast to the other users a user has disconnected.
    socket.broadcast.emit("user-disconnected", users[socket.id]);

    // Delete user id and name from the users object.
    delete users[socket.id];
  });
});
