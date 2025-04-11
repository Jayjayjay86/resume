// Toggle project details with smooth animation
function toggleDetails(id) {
  const details = document.getElementById(id);
  const isActive = details.classList.contains('active');
  
  // Close all other open project details
  document.querySelectorAll('.project-details.active').forEach(item => {
    if (item.id !== id) {
      item.classList.remove('active');
      item.style.maxHeight = null;
    }
  });
  
  // Toggle current project
  if (isActive) {
    details.classList.remove('active');
    details.style.maxHeight = null;
  } else {
    details.classList.add('active');
    details.style.maxHeight = details.scrollHeight + 'px';
  }
}

// Typewriter effect with improved performance
const taglines = [
  "Full-Stack Developer & Educator",
  "React | Node.js | Python",
  "EdTech Innovator",
  "Problem Solver",
  "Tech Educator"
];

let currentTagline = 0;
let isDeleting = false;
let text = '';
let typingSpeed = 100;
let pauseTime = 2000;

function typeWriter() {
  const taglineElement = document.querySelector('.tagline');
  const fullText = taglines[currentTagline];
  
  if (isDeleting) {
    text = fullText.substring(0, text.length - 1);
    typingSpeed = 50;
  } else {
    text = fullText.substring(0, text.length + 1);
    typingSpeed = 100;
  }
  
  taglineElement.textContent = text;
  
  if (!isDeleting && text === fullText) {
    typingSpeed = pauseTime;
    isDeleting = true;
  } else if (isDeleting && text === '') {
    isDeleting = false;
    currentTagline = (currentTagline + 1) % taglines.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeWriter, typingSpeed);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const coverImg = document.querySelector('.cover-img');
  if (coverImg) {
    // Add error handling
    coverImg.onerror = function() {
      console.error("Cover image failed to load");
      this.style.display = 'none';
    };
    
    if (coverImg.complete) {
      coverImg.classList.add('loaded');
    } else {
      coverImg.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    }
  }
  // Start typewriter effect
  setTimeout(typeWriter, 1000);
  
  // Add loaded class to hero image if exists
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    if (heroImage.complete) {
      heroImage.classList.add('loaded');
    } else {
      heroImage.addEventListener('load', () => {
        heroImage.classList.add('loaded');
      });
    }
  }
  
  // Add intersection observer for animations
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.card, .section-title, .differentiator-card, .skill-card').forEach(el => {
    animateOnScroll.observe(el);
  });
});