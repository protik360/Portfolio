// ============================================================
// script.js — for tech.html
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Menu Toggle ----
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ---- Dynamic Year in Footer ----
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---- Active Nav Link on Scroll ----
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = { rootMargin: '-40% 0px -55% 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(a => {
                    a.style.color = '';
                    if (a.getAttribute('href') === `#${entry.target.id}`) {
                        a.style.color = 'var(--primary)';
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(s => observer.observe(s));

    // ---- Scroll-reveal animation ----
    const revealEls = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .cert-card, .about-container'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        revealObserver.observe(el);
    });

    // ---- Stagger project cards ----
    document.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
    });

    // ---- Contact form feedback ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerHTML = '✓ Message Sent!';
            btn.style.background = '#10b981';
            btn.style.color = 'white';
            setTimeout(() => {
                btn.innerHTML = 'Send Message &nbsp;<i class="fas fa-paper-plane"></i>';
                btn.style.background = '';
                btn.style.color = '';
                form.reset();
            }, 3000);
        });
    }

    // ---- Navbar background on scroll ----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

});