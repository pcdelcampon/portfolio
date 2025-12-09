/**
 * Main Portfolio Logic
 * Handles animations, interactions and data visualizations
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initScrollAnimations();
    initSkillChart();
    initMobileNav();
});

/* =========================================
   1. Hero Canvas Animation (Flow Field)
   ========================================= */
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];

    // Config for flow field
    const particleCount = 150;
    const speed = 0.6;
    const fieldScale = 0.0015;
    const trailOpacity = 0.05;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.hue = 190 + Math.random() * 40; // around brand color
        }
        update(time) {
            // Simple flow field driven by sin/cos and time
            const angle = Math.sin((this.x + time * 0.05) * fieldScale) * Math.cos((this.y - time * 0.05) * fieldScale) * Math.PI * 2;
            this.x += Math.cos(angle) * speed;
            this.y += Math.sin(angle) * speed;

            // wrap edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;

            this.draw();
        }
        draw() {
            ctx.fillStyle = `hsla(${this.hue}, 90%, 60%, 0.6)`;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    let lastTime = 0;
    function animate(timestamp) {
        const delta = timestamp - lastTime;
        lastTime = timestamp;

        // trail effect
        ctx.fillStyle = `rgba(15, 23, 42, ${trailOpacity})`;
        ctx.fillRect(0, 0, width, height);

        const t = timestamp * 0.001;
        for (const p of particles) {
            p.update(t);
        }
        requestAnimationFrame(animate);
    }
    // prime background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);
    requestAnimationFrame(animate);
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
