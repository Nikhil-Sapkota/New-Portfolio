/* ==========================================
   INTERACTIVE SKILLS CONSOLE & DECK SCRIPT
   ========================================== */

const skillsData = [
    // --- Graphic Design Category ---
    {
        id: "skill-gd",
        name: "Graphic Design",
        category: "design",
        percentage: 88,
        level: "Advanced",
        speed: 85,
        versatility: 90,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"/></svg>',
        details: [
            "Digital Branding & Media Kits",
            "Vector Logo Design & Assets",
            "Page Layouts & Typography Guides",
            "Dynamic Digital Illustrations"
        ]
    },
    {
        name: "Figma UI Design",
        id: "skill-figma",
        category: "design",
        percentage: 82,
        level: "Advanced",
        speed: 88,
        versatility: 80,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"></path></svg>',
        details: [
            "Interactive UI Prototypes",
            "Figma Component Libraries",
            "Auto-Layout Wireframes",
            "User Flows & UX Checkpoints"
        ]
    },
    {
        name: "Branding & Assets",
        id: "skill-brand",
        category: "design",
        percentage: 85,
        level: "Advanced",
        speed: 80,
        versatility: 85,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
        details: [
            "Logo Vector Adaptations",
            "Color Palette Systems",
            "Print Media Asset Mockups",
            "Social Media Styling Kits"
        ]
    },

    // --- Web Development Category ---
    {
        name: "Web Design",
        id: "skill-wd",
        category: "web",
        percentage: 90,
        level: "Expert",
        speed: 92,
        versatility: 88,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        details: [
            "Flexbox & Grid Alignments",
            "Responsive Media Layouts",
            "Vanilla CSS Animations",
            "Clean Web Layout Aesthetics"
        ]
    },
    {
        name: "Web Development",
        id: "skill-webdev",
        category: "web",
        percentage: 86,
        level: "Advanced",
        speed: 85,
        versatility: 87,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        details: [
            "Semantic Document Outlines",
            "Vanilla ES6 JavaScript Core",
            "DOM Events Orchestration",
            "Form Validations & Logic"
        ]
    },
    {
        name: "Responsive Layouts",
        id: "skill-resp",
        category: "web",
        percentage: 89,
        level: "Expert",
        speed: 90,
        versatility: 88,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        details: [
            "Mobile Viewport Optimization",
            "Fluid Relative Size Scales",
            "Flexible Vector SVG Assets",
            "Optimized Page Loading Speeds"
        ]
    },

    // --- IT & Systems Category ---
    {
        name: "PC Troubleshooting",
        id: "skill-pc",
        category: "app",
        percentage: 92,
        level: "Expert",
        speed: 95,
        versatility: 90,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        details: [
            "Hardware Diagnosis & Swapping",
            "OS Installs & Setup",
            "Technical Support Cycles",
            "Driver/Software Resolutions"
        ]
    },
    {
        name: "Networking Basics",
        id: "skill-net",
        category: "app",
        percentage: 84,
        level: "Advanced",
        speed: 80,
        versatility: 82,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="6" height="6" rx="1"></rect><rect x="16" y="2" width="6" height="6" rx="1"></rect><rect x="9" y="16" width="6" height="6" rx="1"></rect><path d="M5 8v4h9v4M19 8v4h-5"></path></svg>',
        details: [
            "Router/Switch Configurations",
            "IPv4 Address Allocations",
            "Ethernet Cable Splicing",
            "DNS & Gateway Diagnostics"
        ]
    },
    {
        name: "Microsoft Office Suite",
        id: "skill-office",
        category: "app",
        percentage: 95,
        level: "Expert",
        speed: 98,
        versatility: 85,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        details: [
            "Excel Formulas & Sheets",
            "Technical Report Outlines",
            "PowerPoint Project Decks",
            "Access Files Data Structuring"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderSkillsDeck();
    initSkillsTabs();
    init3DTilt();
    
    // Automatically select first card to populate visualizer on load
    const firstCard = document.querySelector('.deck-card');
    if (firstCard) {
        setTimeout(() => {
            selectSkill(firstCard);
        }, 300);
    }
});

// Render the right panel control deck of skill buttons
function renderSkillsDeck() {
    const deck = document.getElementById('skills-deck-container');
    if (!deck) return;

    deck.innerHTML = '';

    skillsData.forEach((skill, idx) => {
        const cardClass = `deck-card deck-card-${skill.category}`;
        const delay = idx * 0.05;

        const html = `
            <div class="${cardClass}" data-id="${skill.id}" data-category="${skill.category}" style="animation-delay: ${delay}s;">
                <div class="deck-card-header">
                    <div class="deck-card-icon">${skill.icon}</div>
                    <span class="deck-card-percent">${skill.percentage}%</span>
                </div>
                <h4 class="deck-card-name">${skill.name}</h4>
                <span class="deck-card-level">${skill.level}</span>
            </div>
        `;
        deck.insertAdjacentHTML('beforeend', html);
    });

    // Attach hover and click listeners to cards
    const cards = document.querySelectorAll('.deck-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => selectSkill(card));
        card.addEventListener('click', () => selectSkill(card));
    });
}

// Select skill and animate content transitions in visualizer console
function selectSkill(card) {
    const cards = document.querySelectorAll('.deck-card');
    const skillId = card.getAttribute('data-id');
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    // Toggle active classes on cards
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const visualizer = document.getElementById('skills-visualizer');
    const hint = document.getElementById('visualizer-hint');
    const content = document.getElementById('visualizer-content');

    // Title & Metadata selectors
    const vizTitle = document.getElementById('viz-title');
    const vizCategory = document.getElementById('viz-category');
    const vizPercentage = document.getElementById('viz-percentage');
    const vizCircleBar = document.getElementById('viz-circle-bar');
    
    // Metrics selectors
    const vizLevel = document.getElementById('viz-level');
    const vizSpeed = document.getElementById('viz-speed');
    const vizVersatility = document.getElementById('viz-versatility');
    
    const vizFillLevel = document.getElementById('viz-fill-level');
    const vizFillSpeed = document.getElementById('viz-fill-speed');
    const vizFillVersatility = document.getElementById('viz-fill-versatility');
    
    // Footer capability list selector
    const vizCapabilities = document.getElementById('viz-capabilities');

    // Hide user guide hint
    if (hint) hint.style.opacity = '0';
    setTimeout(() => { if (hint) hint.style.display = 'none'; }, 200);

    // Apply console accent themes
    visualizer.className = 'skills-visualizer'; // Reset categories
    visualizer.classList.add(`viz-${skill.category}`);

    // Slide out / Fade out current content, then swap and fade back in
    content.classList.add('hidden');

    setTimeout(() => {
        // Swap values
        vizTitle.textContent = skill.name;
        vizCategory.textContent = skill.category === 'design' ? 'Graphic Design' : (skill.category === 'web' ? 'Web Dev' : 'IT & Systems');
        vizPercentage.textContent = `0%`; // Reset counter text
        
        vizLevel.textContent = skill.level;
        vizSpeed.textContent = `${skill.speed}%`;
        vizVersatility.textContent = `${skill.versatility}%`;

        // Render capability bullet elements
        vizCapabilities.innerHTML = skill.details.map(detail => `<li>${detail}</li>`).join('');

        // Remove hidden state to fade in layout
        content.classList.remove('hidden');

        // Animate circular progress gauge
        // Circle perimeter is 2 * pi * 60 = 377
        const perimeter = 377;
        const offset = perimeter - (perimeter * skill.percentage / 100);
        vizCircleBar.style.strokeDashoffset = offset;

        // Animate sub-metric linear fills
        vizFillLevel.style.width = `${skill.level === 'Expert' ? 95 : 82}%`;
        vizFillSpeed.style.width = `${skill.speed}%`;
        vizFillVersatility.style.width = `${skill.versatility}%`;

        // Animate counter text
        let curr = 0;
        const duration = 800; // Counter takes 0.8s
        const stepTime = Math.max(Math.floor(duration / skill.percentage), 10);
        
        const counterInterval = setInterval(() => {
            if (curr >= skill.percentage) {
                clearInterval(counterInterval);
            } else {
                curr++;
                vizPercentage.textContent = `${curr}%`;
            }
        }, stepTime);

    }, 200); // Wait for transition fade out to complete
}

// Category tabs filters
function initSkillsTabs() {
    const tabBtns = document.querySelectorAll('.skills-tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            const cards = document.querySelectorAll('.deck-card');
            let firstVisibleCard = null;

            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    
                    if (!firstVisibleCard) firstVisibleCard = card;

                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });

            // Automatically select first visible card in filtered tab to update visualizer
            if (firstVisibleCard) {
                setTimeout(() => {
                    selectSkill(firstVisibleCard);
                }, 100);
            }
        });
    });
}

// 3D Tilt handler for cards
function init3DTilt() {
    const deckContainer = document.getElementById('skills-deck-container');
    if (!deckContainer) return;

    // Use event delegation on parent deck container for optimal efficiency
    deckContainer.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.deck-card');
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        const angleX = -(mouseY / (height / 2)) * 12;
        const angleY = (mouseX / (width / 2)) * 12;
        
        card.style.transform = `perspective(800px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-4px)`;
    });

    deckContainer.addEventListener('mouseleave', (e) => {
        const card = e.target.closest('.deck-card');
        if (card) {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        }
    }, true);
}
