// Contact form submission handling
const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  const response = await fetch('/submit-contact-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('Error sending message.');
  }
});
