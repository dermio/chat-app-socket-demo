// All the client side code goes here

// The location of the server that's hosting the socket at localhost:3000.
const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

// Get new user name and send it to the server.
const name = prompt("What is your name?");
appendMessage("You joined");
socket.emit("new-user", name);

socket.on("chat-message", data => {
  /* When the client hears the `chat-message` event from the server,
  append the message sent by the other client. The message was sent
  from the other client to the server, and from the server to the client
  via the socket. */
  appendMessage(data);
});

socket.on("user-connected", name => {
  // When a new user joins inform the client by appending the new user name.
  appendMessage(`${name} connected`);
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

function appendMessage(message) {
  // Create div element to contain message.
  let messageElement = document.createElement("div");

  // Add text message to message element.
  messageElement.innerText = message;

  // Append message element to message container.
  messageContainer.append(messageElement);
}
