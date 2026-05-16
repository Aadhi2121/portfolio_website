/* ============================================
   PORTFOLIO — main.js
   ============================================ */

// ---------- Year in footer ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- Mobile hamburger ----------
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('menu-open'));
});

// ---------- Reveal on scroll ----------
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach(el => revealObserver.observe(el));

// ---------- Active nav link highlighting ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--sage-dark)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(sec => sectionObserver.observe(sec));

// ---------- Graceful image fallback ----------
// If a photo doesn't exist, show a pleasant placeholder
function makePlaceholder(img, initials) {
  const parent = img.parentElement;
  const placeholder = document.createElement('div');
  placeholder.style.cssText = `
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(145deg, #e8dece, #a8c4b8);
    border-radius: inherit;
    font-family: 'Lora', serif;
    font-size: 2.5rem;
    font-style: italic;
    color: rgba(255,255,255,0.8);
    letter-spacing: 0.05em;
  `;
  placeholder.textContent = initials;
  img.style.display = 'none';
  parent.appendChild(placeholder);
}

const heroPhoto = document.getElementById('heroPhoto');
heroPhoto.addEventListener('error', () => makePlaceholder(heroPhoto, 'AVA'));
