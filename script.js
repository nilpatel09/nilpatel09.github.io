const chatbot = document.querySelector("#chatbot");
const chatbotHeader = document.querySelector("#chatbot-header");
const chatbotClose = document.querySelector("#chatbot-close");
const chatbotBody = document.querySelector("#chatbot-body");
const chatbotInput = document.querySelector("#chatbot-input");

// Function to create a new message element
function createMessageElement(message, sender) {
  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("chatbot-message");

  const avatar = document.createElement("img");
  avatar.src = sender === "user" ? "user-avatar.png" : "chatbot-avatar.png";
  avatar.alt = sender;

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = message;

  messageWrapper.appendChild(avatar);
  messageWrapper.appendChild(messageText);

  chatbotBody.appendChild(messageWrapper);
}

// Function to handle user input
function handleUserInput(e) {
  if (e.keyCode === 13) {
    const message = e.target.value;
    createMessageElement(message, "user");
    e.target.value = "";
    // Add logic here to send message to a backend server and get a response
    const response = "This is a sample response from the chatbot!";
    createMessageElement(response, "chatbot");
  }
}

// Function to toggle the chatbot
function toggleChatbot() {
  chatbot.classList.toggle("open");
  chatbotInput.focus();
}

// Add event listeners
chatbotHeader.addEventListener("click", toggleChatbot);
chatbotClose.addEventListener("click", toggleChatbot);
chatbotInput.addEventListener("keydown", handleUserInput);











// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  }
  
  // Sliding images in background
  const images = [
    "background-image-1.jpg",
    "background-image-2.jpg",
    "background-image-3.jpg",
    "background-image-4.jpg",
    "background-image-5.jpg"
  ];
  let currentIndex = 0;
  setInterval(() => {
    const background = document.querySelector(".background");
    currentIndex = (currentIndex + 1) % images.length;
    background.style.backgroundImage = `url(${images[currentIndex]})`;
  }, 5000);
  
  // Add event listeners
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", toggleMenu);
  