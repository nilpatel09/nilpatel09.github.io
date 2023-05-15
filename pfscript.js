// Code for chatbot
const chatButton = document.getElementById('chat-button');
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');

function toggleChat() {
  chatContainer.classList.toggle('hidden');
}

function sendMessage() {
  const message = chatInput.value;
  chatInput.value = '';
  const chatBubble = document.createElement('div');
  chatBubble.classList.add('chat-bubble', 'outgoing');
  chatBubble.innerText = message;
  chatLog.appendChild(chatBubble);
  chatLog.scrollTop = chatLog.scrollHeight;
  // Code for sending message via email
  const subject = 'New message from portfolio contact form';
  const body = `You have a new message from ${window.location.href}\n\n${message}`;
  const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

chatButton.addEventListener('click', toggleChat);
chatInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
