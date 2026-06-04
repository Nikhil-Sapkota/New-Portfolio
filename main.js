/* ==========================================
   MAIN CONTROLLER SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Configuration
    initTheme();

    // 2. Mobile Burger Navigation
    initMobileNav();

    // 3. Scroll Events & Header Glass Effect
    initHeaderScroll();

    // 4. Scroll Reveal & Active Nav Link Observer
    initScrollObserver();

    // 5. Typewriter Effect (Hero Roles)
    initTypewriter();

    // 6. Reveal Hero Items in order
    revealHeroItems();
});

/* --- 1. Theme Manager --- */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        // Default to dark theme for premium vibes
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        
        // Dispatch custom theme change event for Canvas to adapt colors
        window.dispatchEvent(new CustomEvent('themechanged'));
    });
}

/* --- 2. Mobile Menu Navigation --- */
function initMobileNav() {
    const burgerBtn = document.getElementById('burger-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* --- 3. Header Scroll Glass States --- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --- 4. Intersection Observer for Reveals & Active States --- */
function initScrollObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const reveals = document.querySelectorAll('.section-reveal');

    // Section entry reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it's the skills section, trigger skill bar load events
                if (entry.target.id === 'skills') {
                    window.dispatchEvent(new CustomEvent('skills-revealed'));
                }
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Nav active menu item observer
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.4
    });

    sections.forEach(section => navObserver.observe(section));
}

/* --- 5. Typewriter Effect --- */
function initTypewriter() {
    const textTarget = document.getElementById('typewriter-text');
    if (!textTarget) return;

    const roles = [
        "Graphic Designer",
        "Web Designer & Developer",
        "IT Specialist",
        "PC Support Technician"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIdx];
        
        if (isDeleting) {
            textTarget.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 50; // Delete faster
        } else {
            textTarget.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 100; // Normal typing speed
        }

        if (!isDeleting && charIdx === currentRole.length) {
            typingSpeed = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start loop
    setTimeout(type, 1000);
}

/* --- 6. Reveal Hero Items in sequence --- */
function revealHeroItems() {
    const revealItems = document.querySelectorAll('.hero-section .reveal-item');
    revealItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('revealed');
        }, index * 200 + 300); // Staggered delays
    });
}
