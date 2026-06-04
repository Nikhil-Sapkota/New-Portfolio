/* ==========================================
   PORTFOLIO GALLERY & MODAL ENGINE
   ========================================== */

const portfolioData = [
    {
        id: "project-utsahit",
        title: "Utsahit Sudhar Kendra Portal",
        category: "web",
        shortDesc: "Designed and developed a responsive, accessible landing portal for a leading rehabilitation center in Nepal.",
        longDesc: "<p>Utsahit Sudhar Kendra is a rehabilitation and recovery center in Nepal. This project involved creating a complete, digital portal to establish their online presence, allowing families to discover care services, contact counselors, and access treatment details.</p><p>We implemented a clean, calming visual layout utilizing custom CSS grids, accessible typography systems, and optimized communication forms. The landing portal is written in semantic HTML5, CSS, and vanilla JavaScript to ensure zero loading delays and responsiveness on both smartphones and desktops.</p>",
        tags: ["Web Design", "Responsive Layout", "SEO"],
        tech: ["HTML5", "Vanilla CSS", "JavaScript", "SEO Optimization"],
        image: "assets/project_utsahit.png",
        client: "Utsahit Sudhar Kendra",
        date: "Dec 2025",
        liveUrl: "https://utsahitsudharkendra.com.np/",
        repoUrl: "#"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioGrid();
    initPortfolioFilters();
    initModalControls();
});

// Render the grid of portfolio items dynamically
function renderPortfolioGrid() {
    const grid = document.getElementById('portfolio-grid-container');
    if (!grid) return;

    grid.innerHTML = '';

    portfolioData.forEach((project, idx) => {
        const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        const delay = idx * 0.1;

        const html = `
            <div class="portfolio-item portfolio-item-${project.category}" data-id="${project.id}" data-category="${project.category}" style="animation-delay: ${delay}s;">
                <div class="portfolio-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <span class="portfolio-overlay-btn">View Details</span>
                    </div>
                </div>
                <div class="portfolio-info">
                    <span class="portfolio-tag">${project.category.replace('app', 'IT & Systems').replace('web', 'Web Dev')}</span>
                    <h3 class="portfolio-item-title">${project.title}</h3>
                    <p class="portfolio-item-desc">${project.shortDesc}</p>
                    <div class="portfolio-item-tech">
                        ${techTags}
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

// Portfolio category filter button bindings
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active state toggle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            items.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // Clear any running animation classes to allow replay
                item.classList.remove('filtering');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'flex';
                    // Trigger reflow to restart animation frames
                    void item.offsetWidth; 
                    item.classList.add('filtering');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Modal open, close, and data injection handlers
function initModalControls() {
    const items = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalBody = document.getElementById('modal-body-content');

    // Click project to open modal
    items.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-id');
            const project = portfolioData.find(p => p.id === projectId);
            if (!project) return;

            injectModalContent(project, modalBody);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock page scroll
        });
    });

    // Close button click
    closeBtn.addEventListener('click', closeModal);

    // Click outside modal container closes it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key press closes it
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock page scroll
    }
}

// Inject detailed content template into Modal
function injectModalContent(project, container) {
    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const tagsText = project.tags.join(', ');

    container.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-img">
        <div class="modal-project-header">
            <span class="modal-project-tag">${project.category.replace('app', 'IT & Systems').replace('web', 'Web Dev')}</span>
            <h2 class="modal-project-title">${project.title}</h2>
        </div>
        <div class="modal-project-body">
            <div class="modal-project-desc">
                ${project.longDesc}
            </div>
            <div class="modal-project-meta">
                <h4>Project Details</h4>
                <ul class="modal-project-meta-list">
                    <li><strong>Client:</strong> ${project.client}</li>
                    <li><strong>Date:</strong> ${project.date}</li>
                    <li><strong>Tags:</strong> ${tagsText}</li>
                </ul>
                <div class="modal-project-tech">
                    <h4>Tech Used</h4>
                    <div class="portfolio-item-tech" style="margin-bottom: 2rem;">
                        ${techTags}
                    </div>
                </div>
                <div class="modal-actions">
                    <a href="${project.liveUrl}" class="btn btn-primary" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;" target="_blank">View Live Demo</a>
                    <a href="${project.repoUrl}" class="btn btn-secondary" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;" target="_blank">Source Code</a>
                </div>
            </div>
        </div>
    `;
}
