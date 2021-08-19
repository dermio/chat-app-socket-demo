const options = {
  cors: {
    origin: "*"
  }
};

// io is the server instance
const io = require("socket.io")(3000, options);

io.on("connection", socket => {
  console.log("new user");
  socket.emit("chat-message", "Hello World");
});
