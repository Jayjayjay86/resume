// Toggle project details
function toggleDetails(id) {
  const details = document.getElementById(id);
  details.classList.toggle('active');
}

// Optional: Typewriter effect for tagline
const taglines = [
  "Full-Stack Developer & Educator",
  "React | Node.js | Python",
  "EdTech Innovator"
];
let count = 0;

function typeWriter() {
  const tagline = document.querySelector('.tagline');
  let i = 0;
  let currentText = taglines[count % taglines.length];
  
  tagline.textContent = '';
  const typing = setInterval(() => {
    if (i < currentText.length) {
      tagline.textContent += currentText.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        typeWriter();
        count++;
      }, 2000);
    }
  }, 100);
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});
