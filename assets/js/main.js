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
   1. Hero Canvas Animation (Low-Poly Gradient Mesh)
   ========================================= */
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // Grid settings
    const cols = 18;
    const rows = 12;
    const points = [];
    const noiseScale = 0.8;
    const timeScale = 0.0018;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function initGrid() {
        points.length = 0;
        for (let y = 0; y <= rows; y++) {
            for (let x = 0; x <= cols; x++) {
                points.push({
                    baseX: (x / cols) * width,
                    baseY: (y / rows) * height,
                    offX: Math.random() * 1000,
                    offY: Math.random() * 1000
                });
            }
        }
    }
    initGrid();

    // Simple 2D noise using sin/cos
    function noise2D(x, y) {
        return Math.sin(x) * Math.cos(y);
    }

    function drawTriangle(p1, p2, p3, time) {
        const hue = 200 + noise2D(time * 0.4 + p1.baseX * 0.0005, time * 0.4 + p1.baseY * 0.0005) * 20;
        const alpha = 0.35;
        const grad = ctx.createLinearGradient(p1.x, p1.y, p3.x, p3.y);
        grad.addColorStop(0, `hsla(${hue}, 80%, 60%, ${alpha})`);
        grad.addColorStop(1, `hsla(${hue + 40}, 80%, 50%, ${alpha})`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        ctx.fill();
    }

    function animate(timestamp) {
        const t = timestamp * timeScale;
        ctx.clearRect(0, 0, width, height);

        // Update positions with gentle noise offset
        points.forEach(pt => {
            const nX = noise2D(pt.offX + t, pt.offY);
            const nY = noise2D(pt.offY - t, pt.offX);
            pt.x = pt.baseX + nX * (noiseScale * 20);
            pt.y = pt.baseY + nY * (noiseScale * 20);
        });

        // Draw triangles row by row
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const idx = y * (cols + 1) + x;
                const p1 = points[idx];
                const p2 = points[idx + 1];
                const p3 = points[idx + cols + 1];
                const p4 = points[idx + cols + 2];
                drawTriangle(p1, p3, p2, t);
                drawTriangle(p2, p3, p4, t);
            }
        }

        requestAnimationFrame(animate);
    }

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
