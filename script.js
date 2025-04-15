// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Update active class for nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');

    // Close mobile menu after clicking
    mobileMenu.classList.remove('active');
    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
  });
});

// Appointment Modal
const appointmentBtn = document.querySelector('.appointment-btn');
const mobileAppointmentBtn = document.querySelector('.mobile-appointment-btn');
const appointmentModal = document.querySelector('.appointment-modal');
const closeModal = document.querySelector('.close-modal');

appointmentBtn.addEventListener('click', () => {
  appointmentModal.classList.add('active');
});

mobileAppointmentBtn.addEventListener('click', () => {
  appointmentModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  appointmentModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === appointmentModal) {
    appointmentModal.classList.remove('active');
  }
});

// Appointment Form Validation
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const phone = this.querySelector('input[type="tel"]').value.trim();
  const service = this.querySelector('select').value;
  const date = this.querySelector('input[type="date"]').value;

  if (!name || !email || !phone || !service || !date) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Appointment booked successfully! (Mock)');
  this.reset();
  appointmentModal.classList.remove('active');
});

// Live Chat Modal
const liveChatBtn = document.querySelector('.live-chat-btn');
const liveChatModal = document.querySelector('.live-chat-modal');
const closeChat = document.querySelector('.close-chat');

liveChatBtn.addEventListener('click', () => {
  liveChatModal.classList.add('active');
});

closeChat.addEventListener('click', () => {
  liveChatModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === liveChatModal) {
    liveChatModal.classList.remove('active');
  }
});

// Mock Chat Functionality
document.querySelector('.chat-input button').addEventListener('click', () => {
  const input = document.querySelector('.chat-input input');
  const message = input.value.trim();
  if (message) {
    const chatBody = document.querySelector('.chat-body');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `
      <div class="message-content">
        <p>${message}</p>
        <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    `;
    chatBody.appendChild(userMessage);
    input.value = '';

    // Mock agent response
    setTimeout(() => {
      const agentMessage = document.createElement('div');
      agentMessage.className = 'chat-message agent';
      agentMessage.innerHTML = `
        <div class="message-content">
          <p>Thank you for your message! Let me check the availability for a telemedicine appointment. Please hold on.</p>
          <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      `;
      chatBody.appendChild(agentMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  }
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const sliderDots = document.querySelectorAll('.dot');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
let currentSlide = 0;

function showSlide(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  sliderDots.forEach(dot => dot.classList.remove('active'));
  testimonialCards[index].classList.add('active');
  sliderDots[index].classList.add('active');
}

sliderNext.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
});

sliderPrev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
  showSlide(currentSlide);
});

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
}, 2000);

// Language Switcher (Mock)
document.querySelectorAll('.language-switcher span, .mobile-language-switcher span').forEach(span => {
  span.addEventListener('click', () => {
    document.querySelectorAll('.language-switcher span, .mobile-language-switcher span').forEach(s => s.classList.remove('active'));
    span.classList.add('active');
    alert(`Switched to ${span.textContent} (Mock)`);
  });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));