// BSafe Invest — Sistema de Tradução
// Suporta: PT (Português), EN (English), IT (Italiano)

const BSAFE_TRANSLATIONS = {

  // ── NAV ──────────────────────────────────────────────────────────
  nav: {
    inicio:   { pt: 'Início',        en: 'Home',        it: 'Home' },
    sobre:    { pt: 'Sobre',         en: 'About',       it: 'Chi Siamo' },
    ibkr:     { pt: 'IBKR',          en: 'IBKR',        it: 'IBKR' },
    wise:     { pt: 'Wise',          en: 'Wise',        it: 'Wise' },
    bitcoin:  { pt: 'Bitcoin',       en: 'Bitcoin',     it: 'Bitcoin' },
    planos:   { pt: 'Planos',        en: 'Plans',       it: 'Piani' },
    assinar:  { pt: 'Assinar Pro',   en: 'Subscribe Pro', it: 'Abbonati Pro' },
    comecar:  { pt: 'Começar Agora', en: 'Get Started', it: 'Inizia Ora' },
  },

  // ── HOMEPAGE ─────────────────────────────────────────────────────
  home: {
    tag:       { pt: 'Educação Financeira Internacional', en: 'International Financial Education', it: 'Educazione Finanziaria Internazionale' },
    title1:    { pt: 'Proteja seu',       en: 'Protect your',    it: 'Proteggi il tuo' },
    title2:    { pt: 'patrimônio',        en: 'wealth',          it: 'patrimonio' },
    title3:    { pt: 'do real',           en: 'from inflation',  it: "dall'inflazione" },
    lema:      { pt: 'Gaste reais · Invista em dólares · Guarde bitcoin', en: 'Spend local · Invest in dollars · Save bitcoin', it: 'Spendi locale · Investi in dollari · Salva bitcoin' },
    btn1:      { pt: 'Ver a Inflação Real →', en: 'See Real Inflation →', it: "Vedi l'Inflazione Reale →" },
    btn2:      { pt: 'Sobre Rafael Bered',    en: 'About Rafael Bered',   it: 'Chi è Rafael Bered' },
    sec_tag:   { pt: 'Guias e Ferramentas',   en: 'Guides & Tools',       it: 'Guide e Strumenti' },
    sec_title: { pt: 'Tudo que você precisa', en: 'Everything you need',  it: 'Tutto ciò di cui hai bisogno' },
    sec_sub:   { pt: 'Do zero à autocustódia de Bitcoin — guias completos, ferramentas interativas e assistentes com IA.', en: 'From zero to Bitcoin self-custody — complete guides, interactive tools and AI assistants.', it: "Da zero all'autocustodia Bitcoin — guide complete, strumenti interattivi e assistenti IA." },
    stat1:     { pt: 'Anos investindo no exterior',   en: 'Years investing abroad',         it: 'Anni investendo all\'estero' },
    stat2:     { pt: 'Real perdeu vs dólar em 10 anos', en: 'Real lost vs dollar in 10 years', it: 'Il Real ha perso contro il dollaro in 10 anni' },
    stat3:     { pt: 'Guias e ferramentas disponíveis', en: 'Guides and tools available',    it: 'Guide e strumenti disponibili' },
    stat4:     { pt: 'Bitcoin em autocustódia',        en: 'Bitcoin in self-custody',        it: 'Bitcoin in autocustodia' },
    cta_by:    { pt: 'Fundador BSafe Invest',          en: 'Founder BSafe Invest',           it: 'Fondatore BSafe Invest' },
    btn_start: { pt: 'Começar Agora →',   en: 'Get Started →',    it: 'Inizia Ora →' },
    btn_about: { pt: 'Conhecer Rafael',   en: 'Meet Rafael',      it: 'Conosci Rafael' },
  },

  // ── INFLAÇÃO REAL ────────────────────────────────────────────────
  inflacao: {
    tag:        { pt: '⚠ Seu dinheiro está encolhendo',     en: '⚠ Your money is shrinking',          it: '⚠ I tuoi soldi si stanno svalutando' },
    title1:     { pt: 'A Inflação Real',                     en: 'The Real Inflation',                 it: "L'Inflazione Reale" },
    title2:     { pt: 'do Seu',                              en: 'of Your',                            it: 'del Tuo' },
    title3:     { pt: 'Real',                                en: 'Money',                              it: 'Denaro' },
    sub:        { pt: 'Enquanto você lê isso, o poder de compra do seu dinheiro está diminuindo. Descubra exatamente quanto você perdeu — e como proteger o que sobrou.', en: 'While you read this, your money\'s purchasing power is shrinking. Find out exactly how much you\'ve lost — and how to protect what\'s left.', it: 'Mentre leggi questo, il potere d\'acquisto del tuo denaro sta diminuendo. Scopri esattamente quanto hai perso — e come proteggere ciò che resta.' },
    btn1:       { pt: 'Calcular Minha Perda',   en: 'Calculate My Loss',   it: 'Calcola la Mia Perdita' },
    btn2:       { pt: 'Por que isso acontece?', en: 'Why does this happen?', it: 'Perché succede?' },
    sec_tag:    { pt: 'Entenda o problema',      en: 'Understand the problem', it: 'Capisci il problema' },
    sec_title:  { pt: 'Por que seu dinheiro perde valor todo ano?', en: 'Why does your money lose value every year?', it: 'Perché il tuo denaro perde valore ogni anno?' },
    sec_sub:    { pt: 'Não é azar. É estrutural.', en: "It's not bad luck. It's structural.", it: 'Non è sfortuna. È strutturale.' },
    calc_tag:   { pt: 'Calculadora BSafe',   en: 'BSafe Calculator',   it: 'Calcolatrice BSafe' },
    calc_title: { pt: 'Quanto você perdeu?', en: 'How much did you lose?', it: 'Quanto hai perso?' },
    calc_sub:   { pt: 'Insira o valor e o período para ver o impacto real da inflação no seu patrimônio.', en: 'Enter the amount and period to see the real impact of inflation on your wealth.', it: "Inserisci l'importo e il periodo per vedere l'impatto reale dell'inflazione sul tuo patrimonio." },
    lbl_valor:  { pt: 'Valor em Reais (R$)',   en: 'Amount in Reais (R$)', it: 'Importo in Reais (R$)' },
    lbl_ano:    { pt: 'Ano de referência',      en: 'Reference year',      it: 'Anno di riferimento' },
    btn_calc:   { pt: 'Calcular Perda de Poder de Compra →', en: 'Calculate Purchasing Power Loss →', it: 'Calcola la Perdita di Potere d\'Acquisto →' },
  },

  // ── IBKR ─────────────────────────────────────────────────────────
  ibkr: {
    tag:    { pt: 'Guia Completo · Interactive Brokers', en: 'Complete Guide · Interactive Brokers', it: 'Guida Completa · Interactive Brokers' },
    title1: { pt: 'Sua conta',         en: 'Your international', it: 'Il tuo conto' },
    title2: { pt: 'internacional',     en: 'account',            it: 'internazionale' },
    title3: { pt: 'em 5 passos',       en: 'in 5 steps',         it: 'in 5 passi' },
    sub:    { pt: 'A Interactive Brokers é a maior corretora independente do mundo. Aprenda a abrir sua conta, depositar reais e comprar seus primeiros ETFs — com segurança e sem complicação.', en: 'Interactive Brokers is the world\'s largest independent broker. Learn how to open your account, deposit and buy your first ETFs — safely and without hassle.', it: 'Interactive Brokers è il più grande broker indipendente al mondo. Impara ad aprire il tuo conto, depositare e acquistare i tuoi primi ETF — in sicurezza e senza complicazioni.' },
    badge1: { pt: '✓ 100% Legal para brasileiros', en: '✓ 100% Legal for Brazilians', it: '✓ 100% Legale per i Brasiliani' },
    badge2: { pt: '✓ Sem taxa de custódia',        en: '✓ No custody fee',            it: '✓ Nessuna commissione di custodia' },
    badge3: { pt: '⏱ ~45 min para abrir conta',   en: '⏱ ~45 min to open account',  it: '⏱ ~45 min per aprire il conto' },
    btn1:   { pt: 'Começar o Guia →',  en: 'Start the Guide →', it: 'Inizia la Guida →' },
    btn2:   { pt: 'Falar com Sofia',   en: 'Talk to Sofia',     it: 'Parla con Sofia' },
    steps_tag:   { pt: 'Passo a Passo',           en: 'Step by Step',           it: 'Passo dopo Passo' },
    steps_title: { pt: 'Do zero à primeira compra', en: 'From zero to first purchase', it: 'Da zero al primo acquisto' },
    steps_sub:   { pt: 'Siga cada etapa em ordem. Se tiver dúvidas, a Sofia está disponível abaixo para te ajudar em tempo real.', en: 'Follow each step in order. If you have questions, Sofia is available below to help you in real time.', it: 'Segui ogni passo in ordine. Se hai domande, Sofia è disponibile qui sotto per aiutarti in tempo reale.' },
  },

  // ── WISE ─────────────────────────────────────────────────────────
  wise: {
    tag:    { pt: 'Guia Completo · Wise',      en: 'Complete Guide · Wise',   it: 'Guida Completa · Wise' },
    title1: { pt: 'Câmbio sem',               en: 'Exchange without',         it: 'Cambio senza' },
    title2: { pt: 'taxas abusivas',           en: 'abusive fees',             it: 'commissioni abusive' },
    sub:    { pt: 'A Wise cobra a taxa de câmbio real do mercado, sem IOF escondido em spread. Converta seus reais em dólares e envie direto para sua conta na IBKR com o menor custo possível.', en: 'Wise charges the real market exchange rate, with no hidden spread. Convert your reais to dollars and send directly to your IBKR account at the lowest possible cost.', it: 'Wise applica il tasso di cambio reale del mercato, senza spread nascosto. Converti i tuoi reais in dollari e invia direttamente al tuo conto IBKR al costo più basso possibile.' },
    badge1: { pt: '✓ Taxa de câmbio real (mid-market)', en: '✓ Real exchange rate (mid-market)', it: '✓ Tasso di cambio reale (mid-market)' },
    badge2: { pt: '✓ Sem spread escondido',             en: '✓ No hidden spread',                it: '✓ Nessuno spread nascosto' },
    badge3: { pt: '💱 Até 8x mais barato que bancos',  en: '💱 Up to 8x cheaper than banks',    it: '💱 Fino a 8 volte più economico delle banche' },
    btn1:   { pt: 'Começar o Guia →', en: 'Start the Guide →', it: 'Inizia la Guida →' },
    btn2:   { pt: 'Falar com Lucas',  en: 'Talk to Lucas',     it: 'Parla con Lucas' },
  },

  // ── BITCOIN ──────────────────────────────────────────────────────
  bitcoin: {
    tag:    { pt: '₿ Bitcoin · Autocustódia · Blockstream Jade', en: '₿ Bitcoin · Self-Custody · Blockstream Jade', it: '₿ Bitcoin · Autocustodia · Blockstream Jade' },
    title1: { pt: 'Seja seu',    en: 'Be your',     it: 'Sii la tua' },
    title2: { pt: 'próprio banco', en: 'own bank',  it: 'propria banca' },
    sub:    { pt: 'Bitcoin é a única forma de possuir dinheiro que nenhum governo, banco ou instituição pode confiscar, congelar ou desvalorizar. Aprenda a comprar e guardar com segurança absoluta.', en: 'Bitcoin is the only form of money that no government, bank or institution can confiscate, freeze or devalue. Learn how to buy and store it with absolute security.', it: 'Bitcoin è l\'unica forma di denaro che nessun governo, banca o istituzione può confiscare, congelare o svalutare. Impara ad acquistarlo e conservarlo con assoluta sicurezza.' },
    badge1: { pt: '₿ Escassez absoluta — 21M coins', en: '₿ Absolute scarcity — 21M coins', it: '₿ Scarsità assoluta — 21M coin' },
    badge2: { pt: '✓ Sem intermediários',             en: '✓ No intermediaries',              it: '✓ Nessun intermediario' },
    badge3: { pt: '🔐 Jade Wallet — autocustódia',   en: '🔐 Jade Wallet — self-custody',    it: '🔐 Jade Wallet — autocustodia' },
    btn1:   { pt: 'Começar o Guia →',  en: 'Start the Guide →', it: 'Inizia la Guida →' },
    btn2:   { pt: 'Ver a Jade Wallet', en: 'See Jade Wallet',   it: 'Vedi Jade Wallet' },
  },

  // ── SOBRE ────────────────────────────────────────────────────────
  sobre: {
    tag:    { pt: 'CEO & Fundador · BSafe Invest', en: 'CEO & Founder · BSafe Invest', it: 'CEO & Fondatore · BSafe Invest' },
    role:   { pt: 'Advogado · Mestre em Economia · Educador Financeiro', en: 'Lawyer · Master in Economics · Financial Educator', it: 'Avvocato · Master in Economia · Educatore Finanziario' },
    lema:   { pt: '"Gaste reais, invista em dólares e guarde bitcoin."', en: '"Spend reais, invest in dollars and save bitcoin."', it: '"Spendi reais, investi in dollari e salva bitcoin."' },
    btn1:   { pt: 'Conhecer a História →', en: 'Learn the Story →', it: 'Scopri la Storia →' },
    btn2:   { pt: 'Ver a Missão',          en: 'See the Mission',   it: 'Vedi la Missione' },
    hist_tag:   { pt: 'A História',         en: 'The Story',         it: 'La Storia' },
    hist_title: { pt: 'De onde vem o BSafe', en: 'The origin of BSafe', it: "L'origine di BSafe" },
    miss_tag:   { pt: 'A Missão do BSafe Invest', en: 'The BSafe Invest Mission', it: 'La Missione di BSafe Invest' },
    miss_title: { pt: 'Proteger o fruto do seu trabalho', en: 'Protect the fruit of your work', it: 'Proteggere il frutto del tuo lavoro' },
  },

  // ── PLANOS ───────────────────────────────────────────────────────
  planos: {
    tag:       { pt: 'Planos BSafe Invest',    en: 'BSafe Invest Plans',    it: 'Piani BSafe Invest' },
    title1:    { pt: 'Invista em',             en: 'Invest in',             it: 'Investi in' },
    title2:    { pt: 'conhecimento',           en: 'knowledge',             it: 'conoscenza' },
    sub:       { pt: 'Acesse guias completos, ferramentas interativas e o dashboard Pro para acompanhar seu patrimônio internacional em tempo real.', en: 'Access complete guides, interactive tools and the Pro dashboard to track your international wealth in real time.', it: 'Accedi a guide complete, strumenti interattivi e alla dashboard Pro per monitorare il tuo patrimonio internazionale in tempo reale.' },
    mensal:    { pt: 'Mensal',    en: 'Monthly',  it: 'Mensile' },
    anual:     { pt: 'Anual',     en: 'Annual',   it: 'Annuale' },
    economize: { pt: 'Economize 20%', en: 'Save 20%', it: 'Risparmia 20%' },
    free_name: { pt: 'Gratuito',      en: 'Free',     it: 'Gratuito' },
    free_per:  { pt: 'para sempre',   en: 'forever',  it: 'per sempre' },
    free_desc: { pt: 'Comece a aprender gratuitamente. Acesso aos guias essenciais e ferramentas básicas.', en: 'Start learning for free. Access to essential guides and basic tools.', it: 'Inizia a imparare gratuitamente. Accesso alle guide essenziali e agli strumenti di base.' },
    pro_desc:  { pt: 'O plano completo para quem leva o patrimônio internacional a sério.', en: 'The complete plan for those who take international wealth seriously.', it: 'Il piano completo per chi prende sul serio il patrimonio internazionale.' },
    elite_desc:{ pt: 'Para quem quer acompanhamento próximo e acesso antecipado a todos os novos recursos.', en: 'For those who want close monitoring and early access to all new features.', it: 'Per chi vuole un monitoraggio ravvicinato e accesso anticipato a tutte le nuove funzionalità.' },
    btn_free:  { pt: 'Criar Conta Grátis', en: 'Create Free Account', it: 'Crea Account Gratuito' },
    btn_pro:   { pt: 'Assinar Pro →',      en: 'Subscribe Pro →',     it: 'Abbonati Pro →' },
    btn_elite: { pt: 'Assinar Elite →',    en: 'Subscribe Elite →',   it: 'Abbonati Elite →' },
    guarantee_title: { pt: 'Garantia de 7 dias', en: '7-day Guarantee', it: 'Garanzia di 7 giorni' },
    guarantee_text:  { pt: 'Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do valor pago. Sem perguntas, sem burocracia.', en: 'If for any reason you are not satisfied in the first 7 days, we will refund 100% of the amount paid. No questions, no bureaucracy.', it: 'Se per qualsiasi motivo non sei soddisfatto nei primi 7 giorni, rimborsiamo il 100% dell\'importo pagato. Nessuna domanda, nessuna burocrazia.' },
  },

  // ── TERMOS ───────────────────────────────────────────────────────
  termos: {
    tag:   { pt: 'Documentos Legais',   en: 'Legal Documents',   it: 'Documenti Legali' },
    title: { pt: 'Termos de Uso e Disclaimers', en: 'Terms of Use and Disclaimers', it: 'Termini di Utilizzo e Disclaimer' },
  },

  // ── DASHBOARD ────────────────────────────────────────────────────
  dashboard: {
    title:   { pt: 'Visão Geral do Patrimônio', en: 'Wealth Overview',          it: 'Panoramica del Patrimonio' },
    refresh: { pt: '↻ Atualizar',               en: '↻ Refresh',                it: '↻ Aggiorna' },
    report:  { pt: 'Gerar Relatório',            en: 'Generate Report',          it: 'Genera Rapporto' },
    launch:  { pt: '+ Lançar Mês',              en: '+ Add Month',              it: '+ Aggiungi Mese' },
    kpi1:    { pt: 'Patrimônio Total (BRL)',     en: 'Total Wealth (BRL)',       it: 'Patrimonio Totale (BRL)' },
    kpi2:    { pt: 'Carteira IBKR (USD)',        en: 'IBKR Portfolio (USD)',     it: 'Portafoglio IBKR (USD)' },
    kpi3:    { pt: 'Bitcoin (BTC)',              en: 'Bitcoin (BTC)',             it: 'Bitcoin (BTC)' },
    kpi4:    { pt: '% Protegido do Real',        en: '% Protected from Inflation', it: '% Protetto dall\'Inflazione' },
  },

  // ── FOOTER ───────────────────────────────────────────────────────
  footer: {
    disclaimer: { pt: '⚠ Conteúdo educacional. Não é recomendação de investimento. BSafe Invest não é corretora nem consultora de valores mobiliários.', en: '⚠ Educational content. Not investment advice. BSafe Invest is not a broker or investment advisor.', it: '⚠ Contenuto educativo. Non è una consulenza sugli investimenti. BSafe Invest non è un broker né un consulente di investimenti.' },
  },
};

// ── LANGUAGE ENGINE ──────────────────────────────────────────────
const BSAFE_LANG = {
  current: localStorage.getItem('bsafe_lang') || 'pt',

  set(lang) {
    this.current = lang;
    localStorage.setItem('bsafe_lang', lang);
    this.apply();
    this.updateSelector();
  },

  get(section, key) {
    try {
      return BSAFE_TRANSLATIONS[section][key][this.current] ||
             BSAFE_TRANSLATIONS[section][key]['pt'];
    } catch(e) { return ''; }
  },

  apply() {
    // Apply all data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const [section, key] = el.getAttribute('data-i18n').split('.');
      const text = this.get(section, key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Update html lang attribute
    const langMap = { pt: 'pt-BR', en: 'en-US', it: 'it-IT' };
    document.documentElement.lang = langMap[this.current] || 'pt-BR';

    // Update page title if data-i18n-title exists
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      const [section, key] = titleEl.getAttribute('data-i18n-title').split('.');
      document.title = this.get(section, key) + ' — BSafe Invest';
    }
  },

  updateSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  init() {
    this.apply();
    this.updateSelector();
  }
};

// ── LANGUAGE SELECTOR HTML ───────────────────────────────────────
function createLangSelector() {
  const sel = document.createElement('div');
  sel.className = 'lang-selector';
  sel.innerHTML = `
    <button class="lang-btn ${BSAFE_LANG.current === 'pt' ? 'active' : ''}" data-lang="pt" onclick="BSAFE_LANG.set('pt')" title="Português">🇧🇷</button>
    <button class="lang-btn ${BSAFE_LANG.current === 'en' ? 'active' : ''}" data-lang="en" onclick="BSAFE_LANG.set('en')" title="English">🇺🇸</button>
    <button class="lang-btn ${BSAFE_LANG.current === 'it' ? 'active' : ''}" data-lang="it" onclick="BSAFE_LANG.set('it')" title="Italiano">🇮🇹</button>
  `;
  return sel;
}

// ── INJECT SELECTOR INTO NAV ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inject CSS for selector
  const style = document.createElement('style');
  style.textContent = `
    .lang-selector {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      padding-left: 16px;
      border-left: 1px solid rgba(255,255,255,0.08);
    }
    .lang-btn {
      background: none;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      font-size: 18px;
      padding: 3px 5px;
      transition: all 0.2s;
      opacity: 0.45;
      line-height: 1;
    }
    .lang-btn:hover { opacity: 0.8; border-color: rgba(232,71,10,0.3); }
    .lang-btn.active { opacity: 1; border-color: rgba(232,71,10,0.5); background: rgba(232,71,10,0.08); }
    @media(max-width:768px) {
      .lang-selector { margin-left: 8px; padding-left: 8px; }
      .lang-btn { font-size: 16px; }
    }
  `;
  document.head.appendChild(style);

  // Find nav and inject selector
  const nav = document.querySelector('nav');
  if (nav) {
    const navCta = nav.querySelector('.nav-cta');
    const selector = createLangSelector();
    if (navCta) {
      nav.insertBefore(selector, navCta);
    } else {
      nav.appendChild(selector);
    }
  }

  // Apply translations
  BSAFE_LANG.init();
});
