// I establish the DOM elements we're going to work with
const msg = document.getElementById("message");
const darkBtn = document.getElementById("drkBtn");
const lightBtn = document.getElementById("litBtn");

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  
  // Toggle the dark mode class on the body element
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    msg.textContent = "Light Mode Enabled";
  } else {
    document.body.classList.add("dark-mode");
    msg.textContent = "Dark Mode Enabled";
  }
}

// Tell the browser to listen for a click on the toggle button and run the toggleDarkMode function
darkBtn.addEventListener("click", toggleDarkMode);
lightBtn.addEventListener("click", toggleDarkMode);
