// BSafe Invest — Sistema de Temas
// Dark (padrão) vs Light (Off-White Elegante — Opção 3)

const BSAFE_THEME = {

  // ── VARIÁVEIS CSS POR TEMA ─────────────────────────────────
  themes: {
    dark: {
      '--bg':         '#0A0A0A',
      '--bg2':        '#111111',
      '--bg3':        '#181818',
      '--bg4':        '#1E1E1E',
      '--border-dim': 'rgba(255,255,255,0.06)',
      '--border':     'rgba(232,71,10,0.18)',
      '--text':       '#F0F0F0',
      '--muted':      '#666666',
      '--muted2':     '#3A3A3A',
      '--white':      '#FFFFFF',
      '--orange':     '#E8470A',
      '--orange-dim': 'rgba(232,71,10,0.10)',
      '--green':      '#22C55E',
      '--green-dim':  'rgba(34,197,94,0.10)',
      '--red':        '#EF4444',
      '--btc':        '#F7931A',
      '--btc-dim':    'rgba(247,147,26,0.10)',
      '--blue':       '#3B82F6',
      '--nav-bg':     'rgba(10,10,10,0.93)',
      '--card-bg':    '#111111',
      '--input-bg':   '#181818',
      '--hero-text':  '#FFFFFF',
    },
    light: {
      '--bg':         '#FAFAF8',
      '--bg2':        '#F0EFE9',
      '--bg3':        '#E8E7E0',
      '--bg4':        '#E0DFD8',
      '--border-dim': 'rgba(0,0,0,0.08)',
      '--border':     'rgba(232,71,10,0.25)',
      '--text':       '#18181B',
      '--muted':      '#71717A',
      '--muted2':     '#A1A1AA',
      '--white':      '#18181B',
      '--orange':     '#E8470A',
      '--orange-dim': 'rgba(232,71,10,0.08)',
      '--green':      '#16A34A',
      '--green-dim':  'rgba(22,163,74,0.10)',
      '--red':        '#DC2626',
      '--btc':        '#C2610A',
      '--btc-dim':    'rgba(194,97,10,0.08)',
      '--blue':       '#2563EB',
      '--nav-bg':     'rgba(250,250,248,0.95)',
      '--card-bg':    '#F0EFE9',
      '--input-bg':   '#E8E7E0',
      '--hero-text':  '#18181B',
    }
  },

  current: null,

  // ── APLICAR TEMA ───────────────────────────────────────────
  apply(theme) {
    this.current = theme;
    localStorage.setItem('bsafe_theme', theme);
    const vars = this.themes[theme];
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    // Update toggle button state
    this.updateToggle();
    // Update meta theme-color for mobile browser
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', vars['--bg']);
    // Swap logo for theme
    this.updateLogo(theme);
  },

  updateLogo(theme) {
    const logos = document.querySelectorAll('.nav-logo img, .footer-logo img, .sidebar-logo img');
    logos.forEach(img => {
      if (theme === 'light' && img.dataset.logoDark) {
        // Light theme: use dark logo (dark text, orange icon)
        img.src = img.dataset.logoDark;
      } else if (theme === 'dark' && img.dataset.logoWhite) {
        // Dark theme: use white/colored logo
        img.src = img.dataset.logoWhite;
      }
    });
  },

  // ── ALTERNAR TEMA ──────────────────────────────────────────
  toggle() {
    this.apply(this.current === 'dark' ? 'light' : 'dark');
  },

  // ── ATUALIZAR BOTÃO ────────────────────────────────────────
  updateToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    if (this.current === 'light') {
      btn.setAttribute('title', 'Mudar para tema escuro');
      btn.querySelector('.theme-icon').textContent = '☀️';
      btn.querySelector('.theme-label').textContent = 'Claro';
    } else {
      btn.setAttribute('title', 'Mudar para tema claro');
      btn.querySelector('.theme-icon').textContent = '🌙';
      btn.querySelector('.theme-label').textContent = 'Escuro';
    }
  },

  // ── INICIALIZAR ────────────────────────────────────────────
  init() {
    // Load saved preference or default to dark
    const saved = localStorage.getItem('bsafe_theme') || 'dark';
    this.apply(saved);
    // Inject toggle button into nav
    this.injectToggle();
  },

  // ── INJETAR BOTÃO NA NAV ───────────────────────────────────
  injectToggle() {
    // Inject CSS for toggle button
    const style = document.createElement('style');
    style.textContent = `
      #theme-toggle {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--bg3);
        border: 1px solid var(--border-dim);
        border-radius: 20px;
        padding: 5px 12px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        font-weight: 600;
        color: var(--muted);
        letter-spacing: 0.5px;
        white-space: nowrap;
      }
      #theme-toggle:hover {
        border-color: var(--orange);
        color: var(--orange);
        background: var(--orange-dim);
      }
      .theme-icon { font-size: 13px; line-height: 1; }
      .theme-label { display: none; }
      @media(min-width: 900px) { .theme-label { display: inline; } }

      /* Light theme overrides for specific elements */
      body[data-theme="light"] .hero-title em,
      body[data-theme="light"] .cta-title em {
        color: var(--orange) !important;
      }
      body[data-theme="light"] .nav-cta,
      body[data-theme="light"] .mob-dash {
        color: var(--orange) !important;
      }
      body[data-theme="light"] nav {
        background: var(--nav-bg) !important;
        border-bottom: 1px solid var(--border-dim) !important;
      }
      body[data-theme="light"] .nav-links a:hover,
      body[data-theme="light"] .nav-links a.active {
        color: var(--orange) !important;
      }
    `;
    document.head.appendChild(style);

    // Create toggle button
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.onclick = () => BSAFE_THEME.toggle();
    btn.innerHTML = '<span class="theme-icon">🌙</span><span class="theme-label">Escuro</span>';

    // Insert into nav — before .nav-cta or at end of nav
    const nav = document.querySelector('nav');
    if (!nav) return;
    const cta = nav.querySelector('.nav-cta');
    if (cta) nav.insertBefore(btn, cta);
    else nav.appendChild(btn);

    // Apply data-theme to body for CSS targeting
    document.body.setAttribute('data-theme', this.current);
  }
};

// Observe theme changes to update body attribute
const _origApply = BSAFE_THEME.apply.bind(BSAFE_THEME);
BSAFE_THEME.apply = function(theme) {
  _origApply(theme);
  document.body && document.body.setAttribute('data-theme', theme);
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => BSAFE_THEME.init());

// Also apply immediately to prevent flash of wrong theme
(function() {
  const saved = localStorage.getItem('bsafe_theme') || 'dark';
  const vars = BSAFE_THEME.themes[saved];
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, val]) => root.style.setProperty(key, val));
})();
