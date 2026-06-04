/* ==========================================
   CANVAS PARTICLE BACKGROUND
   ========================================== */

(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let particleCount = 80; // Default count for optimal performance
    const maxLinkDistance = 140; // Max distance to draw lines between dots
    
    // Mouse configurations
    let mouse = {
        x: null,
        y: null,
        radius: 160 // Mouse interaction radius
    };

    // Color definitions cached from CSS properties
    let colors = {
        particleColor: 'rgba(99, 102, 241, 0.25)', // Fallback
        lineColor: 'rgba(99, 102, 241, 0.08)'
    };

    // Adjust particle count for mobile screens to avoid lag
    function calculateParticleCount() {
        const area = window.innerWidth * window.innerHeight;
        particleCount = Math.min(Math.floor(area / 16000), 120);
        if (particleCount < 30) particleCount = 30;
    }

    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        calculateParticleCount();
        initParticles();
    }

    // Query active colors from body CSS variables
    function updateColors() {
        const style = getComputedStyle(document.body);
        const primaryAccent = style.getPropertyValue('--accent-primary').trim();
        
        // Formulate semi-translucent colors
        colors.particleColor = primaryAccent.replace(')', ', 0.22)').replace('hsl', 'hsla');
        colors.lineColor = primaryAccent.replace(')', ', 0.06)').replace('hsl', 'hsla');
    }

    // Capture mouse moves
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Adapt to window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Adapt to custom theme toggles
    window.addEventListener('themechanged', updateColors);

    // Particle Object blueprint
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1.5; // Radius size
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce off boundaries
            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

            // Mouse Gravity attraction effect
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    // Pull slightly towards mouse
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= dx * force * 0.02;
                    this.y -= dy * force * 0.02;
                }
            }
        }

        draw() {
            ctx.fillStyle = colors.particleColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Populate particles arrays
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Draw connection lines
    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxLinkDistance) {
                    // Calculate opacity based on closeness
                    const alpha = (1 - (distance / maxLinkDistance)) * 0.5;
                    ctx.strokeStyle = colors.lineColor.replace('0.06)', `${alpha * 0.12})`);
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    }

    // Game loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        connectParticles();
        requestAnimationFrame(animate);
    }

    // Initialize and run
    updateColors();
    resizeCanvas();
    animate();
})();
