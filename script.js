// TECHNOVA LAUNCH COUNTDOWN
const launchDate = new Date("2027-01-01T00:00:00+01:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = launchDate - now;
  const timer = document.getElementById("timer");

  if (distance <= 0) {
    timer.textContent = "TECHNOVA IS LIVE!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.textContent =
    `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// OPEN THE ACTUAL WEBSITE
function openWebsite() {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("website").classList.remove("hidden");
  window.scrollTo(0, 0);
}

// RETURN TO THE FRONT COVER
function backToCover() {
  document.getElementById("website").classList.add("hidden");
  document.getElementById("cover").classList.remove("hidden");
  window.scrollTo(0, 0);
}

// MOBILE NAVIGATION
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("navLinks").classList.remove("show");
}

// NOVA AI INTERFACE
function sendMessage() {
  const input = document.getElementById("userMessage");
  const messages = document.getElementById("chatMessages");
  const message = input.value.trim();

  if (!message) return;

  const userMessage = document.createElement("p");
  userMessage.className = "user-message";
  userMessage.textContent = message;
  messages.appendChild(userMessage);

  const reply = document.createElement("p");
  reply.className = "bot-message";
  reply.textContent =
    "I'm Nova AI. My AI service is not connected yet. My full assistant features will be available when the backend is installed.";
  messages.appendChild(reply);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

// Allow Enter key to send a message
document.getElementById("userMessage").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// NOTIFICATION PERMISSION
async function enableNotifications() {
  const status = document.getElementById("notificationStatus");

  if (!("Notification" in window)) {
    status.textContent = "Your browser does not support notifications.";
    return;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      status.textContent =
        "Permission granted. Real TechNova announcements will work after push notifications are connected to the backend.";
    } else {
      status.textContent =
        "Notification permission was not granted.";
    }
  } catch (error) {
    status.textContent = "Could not request notification permission.";
  }
}