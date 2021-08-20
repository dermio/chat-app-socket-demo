// All the client side code goes here

// The location of the server that's hosting the socket at localhost:3000.
const socket = io("http://localhost:3000");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

socket.on("chat-message", data => {
  console.log(data);
});

messageForm.addEventListener("submit", event => {
  event.preventDefault();

  // Get text message from input.
  let message = messageInput.value;

  // Send text message value from client to server via the socket.
  socket.emit("send-chat-message", message);

  // Clear out any text in the input field.
  messageInput.value = "";
});
