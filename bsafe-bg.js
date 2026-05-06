// BSafe Invest — Fundos Animados
// Elementos visuais sutis que harmonizam com o tema escuro

const BG = {

  // Cria canvas animado no elemento hero
  initHero(container) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.55';
    container.style.position = container.style.position || 'relative';
    container.insertBefore(canvas, container.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H, particles, animId;

    const ORANGE = '#E8470A';
    const GOLD   = '#F7931A';
    const DIM    = 'rgba(232,71,10,0.12)';

    // Resize handler
    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      initParticles();
    }

    // Particle system
    function initParticles() {
      const count = Math.floor((W * H) / 18000);
      particles = Array.from({length: count}, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r:  Math.random() * 1.5 + 0.5,
        col: Math.random() > 0.7 ? GOLD : ORANGE,
        alpha: Math.random() * 0.6 + 0.2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Grid lines — very subtle
      ctx.strokeStyle = DIM;
      ctx.lineWidth = 0.5;
      const step = 60;
      for (let x = 0; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 120) {
            const alpha = (1 - dist/120) * 0.15;
            ctx.strokeStyle = `rgba(232,71,10,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    // Init
    resize();
    window.addEventListener('resize', resize);
    draw();

    // Pause when not visible (performance)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting && animId) {
          cancelAnimationFrame(animId); animId = null;
        } else if (e.isIntersecting && !animId) {
          draw();
        }
      });
    });
    observer.observe(canvas);
  },

  // Gráfico de linha sutil para seções financeiras
  initChart(container) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.4';
    container.style.position = container.style.position || 'relative';
    container.insertBefore(canvas, container.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H, points, t = 0, animId;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      generatePoints();
    }

    function generatePoints() {
      const n = 12;
      // Simulates a growing investment curve (general upward trend)
      points = [];
      let val = 0.3;
      for (let i = 0; i <= n; i++) {
        val += (Math.random() - 0.35) * 0.15;
        val = Math.max(0.1, Math.min(0.85, val));
        points.push({ x: (i / n) * W, y: H - val * H * 0.7 - H * 0.1 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      if (!points || points.length < 2) return;

      // Draw curve
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, 'rgba(232,71,10,0.15)');
      grad.addColorStop(1, 'rgba(232,71,10,0)');

      ctx.beginPath();
      ctx.moveTo(points[0].x, H);
      ctx.lineTo(points[0].x, points[0].y);

      // Smooth bezier
      for (let i = 1; i < points.length; i++) {
        const cpX = (points[i-1].x + points[i].x) / 2;
        ctx.bezierCurveTo(cpX, points[i-1].y, cpX, points[i].y, points[i].x, points[i].y);
      }
      ctx.lineTo(points[points.length-1].x, H);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        const cpX = (points[i-1].x + points[i].x) / 2;
        ctx.bezierCurveTo(cpX, points[i-1].y, cpX, points[i].y, points[i].x, points[i].y);
      }
      ctx.strokeStyle = 'rgba(232,71,10,0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
  },

  // Inicializa tudo automaticamente
  init() {
    // Hero section — particles + grid
    const hero = document.querySelector('.hero, .hero-section, section.hero');
    if (hero) this.initHero(hero);

    // CTA section — chart lines
    const cta = document.querySelector('.cta-section, .cta-sec, .lema-section');
    if (cta) this.initChart(cta);
  }
};

document.addEventListener('DOMContentLoaded', () => BG.init());
