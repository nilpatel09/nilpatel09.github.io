// Select chatbot elements
const chatButton = document.querySelector(".chat-button");
const chatContainer = document.querySelector(".chat-container");
const chatLog = document.querySelector(".chat-log");
const chatInput = document.querySelector(".chat-input");
const chatSend = document.querySelector(".chat-send");

// Show/hide chatbot container
chatButton.addEventListener("click", () => {
  chatContainer.classList.toggle("hidden");
});

// Send message function
function sendMessage() {
  // Get input value
  const message = chatInput.value.trim();
  
  // Return if empty message
  if (!message) return;

  // Create chat log message element
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", "outgoing");
  messageElement.innerText = message;

  // Append message to chat log
  chatLog.appendChild(messageElement);

  // Clear input field
  chatInput.value = "";

  // Simulate chatbot response after 1 second
  setTimeout(() => {
    // Create chat log response element
    const responseElement = document.createElement("div");
    responseElement.classList.add("chat-message", "incoming");
    responseElement.innerText = "Sorry, I am just a demo chatbot and can't provide any real assistance.";

    // Append response to chat log
    chatLog.appendChild(responseElement);

    // Scroll to bottom of chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
}

// Send message on enter key press
chatInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    chatSend.click();
  }
});

// Send message on send button click
chatSend.addEventListener("click", sendMessage);
