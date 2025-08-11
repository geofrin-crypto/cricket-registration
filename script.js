// Show welcome message
function showWelcomeMessage() {
  alert("Welcome to the Cricket Ticket Booking Site!");
}

// Array of matches
const matches = [
  { title: "India vs Australia", date: "15th Sept", venue: "Wankhede Stadium" },
  { title: "England vs Pakistan", date: "20th Sept", venue: "Eden Gardens" },
  { title: "New Zealand vs South Africa", date: "25th Sept", venue: "Lords" }
];

// Render match cards
const matchContainer = document.querySelector('.matches');
if (matchContainer) {
  matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${match.title}</h3>
      <p><strong>Date:</strong> ${match.date}</p>
      <p><strong>Venue:</strong> ${match.venue}</p>
      <button onclick="alert('Tickets booked for ${match.title}!')">Book Now</button>
    `;
    matchContainer.appendChild(card);
  });
}

// Change section background & text
function changeHighlight() {
  const section = document.getElementById('highlight');
  section.style.backgroundColor = "#dff0d8";
  section.style.transition = "background-color 0.5s";
  section.insertAdjacentHTML('beforebegin', `<p style="text-align:center; font-weight:bold; color:#28a745;">You clicked the button!</p>`);
}

// Contact form validation
function validateContactForm() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  document.getElementById("thankYouMessage").textContent = `Thanks, ${name}! We'll get back to you soon.`;
  return false; // Prevent actual form submit
}
