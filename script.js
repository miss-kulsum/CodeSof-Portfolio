// =========================
// Typing Animation
// =========================
const typingText = document.querySelector('.typing');
const texts = ["Aspiring Front-End Web Developer", "B.Tech CSE Student", "HTML CSS JavaScript Developer"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    type();
});

// =========================
// Sticky Navbar & Active Link Highlight
// =========================
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('header');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
    // Sticky Navbar
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Active Link Highlight
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Show/Hide Scroll to Top Button
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to Top
scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================
// Hamburger Menu Toggle
// =========================
const menuBtn = document.querySelector('.menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function () {
    navLinksContainer.classList.toggle('active');
});