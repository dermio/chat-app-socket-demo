// All the client side code goes here

// The location of the server that's hosting the socket at localhost:3000.
const socket = io("http://localhost:3000");

socket.on("chat-message", data => {
  console.log(data);
});
