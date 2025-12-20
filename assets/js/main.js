/**
 * Main Portfolio Logic
 * Handles animations, interactions and data visualizations
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initScrollAnimations();
    initSkillChart();
    initMobileNav();
    initThemeToggle();
});

/* =========================================
   1. Hero Canvas Animation (Neural Network)
   ========================================= */
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationId = null;
    let running = true;

    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseDistance = 200;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Mouse tracking
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.scrollY; // Adjust for scroll if canvas is fixed/absolute
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;
                    this.vx += directionX;
                    this.vy += directionY;
                }
            }
        }

        draw() {
            const darkColor = 'rgba(0, 191, 196, 0.5)'; // Teal
            const lightColor = 'rgba(248, 118, 109, 0.5)'; // Coral for light mode (same alpha as dark)
            ctx.fillStyle = document.body.classList.contains('theme-light') ? lightColor : darkColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Init particles
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        if (!running) return;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Draw connections
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    const baseAlpha = 1 - distance / connectionDistance;
                    const alpha = (document.body.classList.contains('theme-light')) ? baseAlpha * 0.4 : baseAlpha;
                    const lineColor = document.body.classList.contains('theme-light') ? '248, 118, 109' : '0, 191, 196';
                    ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        animationId = requestAnimationFrame(animate);
    }
    const start = () => {
        if (running) return;
        running = true;
        animationId = requestAnimationFrame(animate);
    };
    const stop = () => {
        running = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    };

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    });

    animate();
}

/* =========================================
   2. Scroll Animations (Fade In Up)
   ========================================= */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Select all elements to animate (add proper classes in CSS/HTML first)
    // For now we add a helper class dynamically to sections
    document.querySelectorAll('section > div').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
}

/* =========================================
   3. D3 Skill Chart (Placeholder)
   ========================================= */
function initSkillChart() {
    const container = document.getElementById('skill-chart');
    if (!container) return;

    // If the visual container is removed, skip rendering
    if (container.dataset.disabled === "true") return;
}

/* =========================================
   4. Mobile Navigation Toggle
   ========================================= */
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    const closeMenu = () => {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    };

    toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu after selecting any link or button in the nav (mobile)
    menu.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', closeMenu);
    });
}

/* =========================================
   5. Theme Toggle (Light/Dark)
   ========================================= */
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('i');
    const setTheme = (mode) => {
        if (mode === 'light') {
            document.body.classList.add('theme-light');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('theme-light');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Restore theme preference; default to dark if none saved or no preference detected
    const saved = window.__PREFERRED_THEME || localStorage.getItem('theme');
    // Default to dark when no preference has been stored; otherwise respect saved
    setTheme(saved ? saved : 'dark');

    toggle.addEventListener('click', () => {
        const isLight = document.body.classList.contains('theme-light');
        setTheme(isLight ? 'dark' : 'light');
    });
}
