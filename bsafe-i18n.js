// BSafe Invest — Sistema de Tradução Completo
// PT | EN | IT

const T = {

  // ─── GLOBAL / NAV / FOOTER ───────────────────────────────────────
  'nav.inicio':   { pt:'Início',        en:'Home',         it:'Home' },
  'nav.sobre':    { pt:'Sobre',         en:'About',        it:'Chi Siamo' },
  'nav.ibkr':     { pt:'IBKR',          en:'IBKR',         it:'IBKR' },
  'nav.wise':     { pt:'Wise',          en:'Wise',         it:'Wise' },
  'nav.bitcoin':  { pt:'Bitcoin',       en:'Bitcoin',      it:'Bitcoin' },
  'nav.planos':   { pt:'Planos',        en:'Plans',        it:'Piani' },
  'nav.assinar':  { pt:'Assinar Pro',   en:'Subscribe Pro',it:'Abbonati Pro' },
  'nav.comecar':  { pt:'Começar Agora', en:'Get Started',  it:'Inizia Ora' },
  'nav.dashboard':{ pt:'Dashboard',    en:'Dashboard',    it:'Dashboard' },
  'footer.disc':  { pt:'⚠ Conteúdo educacional. Não é recomendação de investimento. BSafe Invest não é corretora nem consultora de valores mobiliários.', en:'⚠ Educational content only. Not investment advice. BSafe Invest is not a broker or investment advisor.', it:'⚠ Solo contenuto educativo. Non è una consulenza finanziaria. BSafe Invest non è un broker né un consulente di investimenti.' },

  // ─── HOMEPAGE ────────────────────────────────────────────────────
  'home.tag':       { pt:'Educação Financeira Internacional', en:'International Financial Education', it:'Educazione Finanziaria Internazionale' },
  'home.title1':    { pt:'Proteja seu',    en:'Protect your',   it:'Proteggi il tuo' },
  'home.title2':    { pt:'patrimônio',     en:'wealth',          it:'patrimonio' },
  'home.title3':    { pt:'do real',        en:'from inflation',  it:"dall'inflazione" },
  'home.lema':      { pt:'Gaste reais · Invista em dólares · Guarde bitcoin', en:'Spend local · Invest in dollars · Save bitcoin', it:'Spendi locale · Investi in dollari · Salva bitcoin' },
  'home.btn1':      { pt:'Ver a Inflação Real →',  en:'See Real Inflation →', it:"Vedi l'Inflazione Reale →" },
  'home.btn2':      { pt:'Sobre Rafael Bered',      en:'About Rafael Bered',   it:'Chi è Rafael Bered' },
  'home.sec_tag':   { pt:'Guias e Ferramentas',     en:'Guides & Tools',       it:'Guide e Strumenti' },
  'home.sec_title': { pt:'Tudo que você precisa',   en:'Everything you need',  it:'Tutto ciò di cui hai bisogno' },
  'home.sec_sub':   { pt:'Do zero à autocustódia de Bitcoin — guias completos, ferramentas interativas e assistentes com IA.', en:'From zero to Bitcoin self-custody — complete guides, interactive tools and AI assistants.', it:"Da zero all'autocustodia Bitcoin — guide complete, strumenti interattivi e assistenti IA." },
  'home.stat1':     { pt:'Anos investindo no exterior',        en:'Years investing abroad',           it:"Anni d'investimento all'estero" },
  'home.stat2':     { pt:'Real perdeu vs dólar em 10 anos',   en:'Real lost vs dollar in 10 years',  it:'Il Real ha perso contro il dollaro in 10 anni' },
  'home.stat3':     { pt:'Guias e ferramentas disponíveis',   en:'Guides and tools available',       it:'Guide e strumenti disponibili' },
  'home.stat4':     { pt:'Bitcoin em autocustódia',           en:'Bitcoin in self-custody',           it:'Bitcoin in autocustodia' },
  'home.btn_start': { pt:'Começar Agora →', en:'Get Started →',  it:'Inizia Ora →' },
  'home.btn_about': { pt:'Conhecer Rafael', en:'Meet Rafael',    it:'Conosci Rafael' },
  'home.founder':   { pt:'Fundador BSafe Invest', en:'Founder BSafe Invest', it:'Fondatore BSafe Invest' },
  'home.p1.name':   { pt:'Inflação Real',     en:'Real Inflation',   it:'Inflazione Reale' },
  'home.p1.desc':   { pt:'Calculadora interativa: veja exatamente quanto seu dinheiro perdeu em poder de compra desde qualquer ano.', en:'Interactive calculator: see exactly how much your money lost in purchasing power since any year.', it:'Calcolatrice interattiva: vedi esattamente quanto ha perso il tuo denaro in potere d\'acquisto da qualsiasi anno.' },
  'home.p1.link':   { pt:'Acessar ferramenta →', en:'Access tool →', it:'Accedi allo strumento →' },
  'home.p2.name':   { pt:'Interactive Brokers',  en:'Interactive Brokers', it:'Interactive Brokers' },
  'home.p2.desc':   { pt:'Guia completo para abrir conta, depositar e comprar seus primeiros ETFs globais. Com assistente Sofia (IA).', en:'Complete guide to open an account, deposit and buy your first global ETFs. With Sofia AI assistant.', it:'Guida completa per aprire un conto, depositare e acquistare i tuoi primi ETF globali. Con assistente Sofia (IA).' },
  'home.p2.link':   { pt:'Ver o guia →', en:'See the guide →', it:'Vedi la guida →' },
  'home.p3.name':   { pt:'Wise — Câmbio',    en:'Wise — Exchange',  it:'Wise — Cambio' },
  'home.p3.desc':   { pt:'Converta reais em dólares com a menor taxa do mercado e envie direto para a IBKR. Com assistente Lucas (IA).', en:'Convert reais to dollars at the lowest market rate and send directly to IBKR. With Lucas AI assistant.', it:'Converti reais in dollari al tasso di mercato più basso e invia direttamente a IBKR. Con assistente Lucas (IA).' },
  'home.p3.link':   { pt:'Ver o guia →', en:'See the guide →', it:'Vedi la guida →' },
  'home.p4.name':   { pt:'Bitcoin + Jade Wallet', en:'Bitcoin + Jade Wallet', it:'Bitcoin + Jade Wallet' },
  'home.p4.desc':   { pt:'Da compra na Kraken à autocustódia com a Blockstream Jade. Seed phrase, segurança e mempool.space.', en:'From buying on Kraken to self-custody with Blockstream Jade. Seed phrase, security and mempool.space.', it:'Dall\'acquisto su Kraken all\'autocustodia con Blockstream Jade. Seed phrase, sicurezza e mempool.space.' },
  'home.p4.link':   { pt:'Ver o guia →', en:'See the guide →', it:'Vedi la guida →' },
  'home.p5.name':   { pt:'Dashboard Pro',  en:'Pro Dashboard',  it:'Dashboard Pro' },
  'home.p5.desc':   { pt:'Acompanhe sua carteira IBKR, saldo Bitcoin e patrimônio consolidado. Relatório mensal gerado por IA.', en:'Track your IBKR portfolio, Bitcoin balance and consolidated wealth. Monthly report generated by AI.', it:'Monitora il tuo portafoglio IBKR, saldo Bitcoin e patrimonio consolidato. Report mensile generato dall\'IA.' },
  'home.p5.link':   { pt:'Acessar dashboard →', en:'Access dashboard →', it:'Accedi alla dashboard →' },
  'home.p6.name':   { pt:'Rafael Bered',   en:'Rafael Bered',   it:'Rafael Bered' },
  'home.p6.desc':   { pt:'Advogado, mestre em economia e educador financeiro. Conheça a história e a filosofia por trás do BSafe.', en:'Lawyer, master in economics and financial educator. Learn the story and philosophy behind BSafe.', it:'Avvocato, master in economia ed educatore finanziario. Scopri la storia e la filosofia dietro BSafe.' },
  'home.p6.link':   { pt:'Conhecer Rafael →', en:'Meet Rafael →', it:'Conosci Rafael →' },

  // ─── INFLAÇÃO REAL ───────────────────────────────────────────────
  'inf.alert':      { pt:'⚠ Seu dinheiro está encolhendo', en:'⚠ Your money is shrinking', it:'⚠ I tuoi soldi si stanno svalutando' },
  'inf.title1':     { pt:'A Inflação Real', en:'The Real Inflation', it:"L'Inflazione Reale" },
  'inf.title2':     { pt:'do Seu',          en:'of Your',            it:'del Tuo' },
  'inf.title3':     { pt:'Real',            en:'Money',              it:'Denaro' },
  'inf.sub':        { pt:'Enquanto você lê isso, o poder de compra do seu dinheiro está diminuindo. Descubra exatamente quanto você perdeu — e como proteger o que sobrou.', en:"While you read this, your money's purchasing power is shrinking. Find out exactly how much you've lost — and how to protect what's left.", it:"Mentre leggi questo, il potere d'acquisto del tuo denaro sta diminuendo. Scopri esattamente quanto hai perso — e come proteggere ciò che resta." },
  'inf.btn1':       { pt:'Calcular Minha Perda',    en:'Calculate My Loss',      it:'Calcola la Mia Perdita' },
  'inf.btn2':       { pt:'Por que isso acontece?',  en:'Why does this happen?',  it:'Perché succede?' },
  'inf.why_tag':    { pt:'Entenda o problema',       en:'Understand the problem', it:'Capisci il problema' },
  'inf.why_title':  { pt:'Por que seu dinheiro perde valor todo ano?', en:'Why does your money lose value every year?', it:'Perché il tuo denaro perde valore ogni anno?' },
  'inf.why_sub':    { pt:'Não é azar. É estrutural.', en:"It's not bad luck. It's structural.", it:'Non è sfortuna. È strutturale.' },
  'inf.c1_title':   { pt:'Emissão de Moeda',   en:'Money Printing',       it:'Emissione di Moneta' },
  'inf.c1_text':    { pt:'O governo imprime reais para pagar dívidas. Mais dinheiro em circulação = cada real vale menos. É matemática, não política.', en:'The government prints money to pay debts. More money in circulation = each real is worth less. It\'s math, not politics.', it:'Il governo stampa denaro per pagare i debiti. Più denaro in circolazione = ogni real vale meno. È matematica, non politica.' },
  'inf.c2_title':   { pt:'IPCA Subestimado',   en:'Understated Inflation', it:'Inflazione Sottostimata' },
  'inf.c2_text':    { pt:'A inflação oficial não captura a realidade do brasileiro médio. Aluguel, saúde e educação sobem muito mais que o índice oficial.', en:'The official inflation rate does not capture the reality of the average Brazilian. Rent, health and education rise much more than the official index.', it:"L'inflazione ufficiale non cattura la realtà del brasiliano medio. Affitto, salute e istruzione aumentano molto più dell'indice ufficiale." },
  'inf.c3_title':   { pt:'Câmbio Crônico',     en:'Chronic Devaluation',  it:'Svalutazione Cronica' },
  'inf.c3_text':    { pt:'Em 10 anos, o real perdeu mais de 60% do valor contra o dólar. Quem guardou em BRL perdeu. Quem dolarizou, protegeu.', en:'In 10 years, the real lost more than 60% of its value against the dollar. Those who saved in BRL lost. Those who dollarized, protected.', it:'In 10 anni, il real ha perso più del 60% del suo valore rispetto al dollaro. Chi ha risparmiato in BRL ha perso. Chi ha dolarizzato, ha protetto.' },
  'inf.calc_tag':   { pt:'Calculadora BSafe',   en:'BSafe Calculator',     it:'Calcolatrice BSafe' },
  'inf.calc_title': { pt:'Quanto você perdeu?', en:'How much did you lose?', it:'Quanto hai perso?' },
  'inf.calc_sub':   { pt:'Insira o valor e o período para ver o impacto real da inflação no seu patrimônio.', en:'Enter the amount and period to see the real impact of inflation on your wealth.', it:"Inserisci l'importo e il periodo per vedere l'impatto reale dell'inflazione sul tuo patrimonio." },
  'inf.lbl_valor':  { pt:'Valor em Reais (R$)',  en:'Amount in Reais (R$)', it:'Importo in Reais (R$)' },
  'inf.lbl_ano':    { pt:'Ano de referência',    en:'Reference year',       it:'Anno di riferimento' },
  'inf.btn_calc':   { pt:'Calcular Perda de Poder de Compra →', en:'Calculate Purchasing Power Loss →', it:"Calcola la Perdita di Potere d'Acquisto →" },
  'inf.r1':         { pt:'Valor Original (BRL)', en:'Original Value (BRL)', it:'Valore Originale (BRL)' },
  'inf.r2':         { pt:'Valor Corrigido Hoje', en:'Corrected Value Today', it:'Valore Corretto Oggi' },
  'inf.r3':         { pt:'Perda Real de Poder',  en:'Real Purchasing Loss',  it:'Perdita Reale di Potere' },
  'inf.r4':         { pt:'Em USD (época)',        en:'In USD (at the time)',  it:'In USD (allora)' },
  'inf.r5':         { pt:'Equivalente hoje (USD)', en:'Equivalent today (USD)', it:'Equivalente oggi (USD)' },
  'inf.r6':         { pt:'Ganho Dolarizando',    en:'Gain by Dollarizing',  it:'Guadagno Dolarizzando' },
  'inf.chart_title':{ pt:'Evolução do Poder de Compra — BRL vs Dólar', en:'Purchasing Power Evolution — BRL vs Dollar', it:'Evoluzione del Potere d\'Acquisto — BRL vs Dollaro' },
  'inf.cta_title':  { pt:'Proteja o que você construiu.', en:'Protect what you built.', it:'Proteggi ciò che hai costruito.' },
  'inf.cta_sub':    { pt:'Aprenda a internacionalizar sua poupança com segurança, sem precisar ser especialista.', en:'Learn how to internationalize your savings safely, without needing to be an expert.', it:'Impara a internazionalizzare i tuoi risparmi in sicurezza, senza dover essere un esperto.' },
  'inf.cta_btn1':   { pt:'Abrir Conta na IBKR', en:'Open IBKR Account', it:'Apri Conto IBKR' },
  'inf.cta_btn2':   { pt:'Ver Todos os Guias',  en:'See All Guides',    it:'Vedi Tutte le Guide' },

  // ─── IBKR ────────────────────────────────────────────────────────
  'ibkr.tag':         { pt:'Guia Completo · Interactive Brokers', en:'Complete Guide · Interactive Brokers', it:'Guida Completa · Interactive Brokers' },
  'ibkr.title1':      { pt:'Sua conta',       en:'Your international', it:'Il tuo conto' },
  'ibkr.title2':      { pt:'internacional',   en:'account',             it:'internazionale' },
  'ibkr.title3':      { pt:'em 5 passos',     en:'in 5 steps',          it:'in 5 passi' },
  'ibkr.sub':         { pt:'A Interactive Brokers é a maior corretora independente do mundo. Aprenda a abrir sua conta, depositar reais e comprar seus primeiros ETFs — com segurança e sem complicação.', en:"Interactive Brokers is the world's largest independent broker. Learn how to open your account, deposit and buy your first ETFs — safely and without hassle.", it:'Interactive Brokers è il più grande broker indipendente al mondo. Impara ad aprire il tuo conto, depositare e acquistare i tuoi primi ETF — in sicurezza e senza complicazioni.' },
  'ibkr.badge1':      { pt:'✓ 100% Legal para brasileiros', en:'✓ 100% Legal for Brazilians', it:'✓ 100% Legale per i Brasiliani' },
  'ibkr.badge2':      { pt:'✓ Sem taxa de custódia',        en:'✓ No custody fee',             it:'✓ Nessuna commissione di custodia' },
  'ibkr.badge3':      { pt:'⏱ ~45 min para abrir conta',   en:'⏱ ~45 min to open account',   it:'⏱ ~45 min per aprire il conto' },
  'ibkr.btn1':        { pt:'Começar o Guia →', en:'Start the Guide →', it:'Inizia la Guida →' },
  'ibkr.btn2':        { pt:'Falar com Sofia',  en:'Talk to Sofia',     it:'Parla con Sofia' },
  'ibkr.steps_tag':   { pt:'Passo a Passo',    en:'Step by Step',      it:'Passo dopo Passo' },
  'ibkr.steps_title': { pt:'Do zero à primeira compra', en:'From zero to first purchase', it:'Da zero al primo acquisto' },
  'ibkr.steps_sub':   { pt:'Siga cada etapa em ordem. Se tiver dúvidas, a Sofia está disponível abaixo para te ajudar em tempo real.', en:'Follow each step in order. If you have questions, Sofia is available below to help you in real time.', it:'Segui ogni passo in ordine. Se hai domande, Sofia è disponibile qui sotto per aiutarti in tempo reale.' },
  'ibkr.s1_title':    { pt:'Criar sua conta no site da IBKR',         en:'Create your IBKR account',            it:'Crea il tuo conto IBKR' },
  'ibkr.s1_prev':     { pt:'Acesse o site oficial e preencha o formulário com seus dados pessoais.',  en:'Access the official website and fill in the form with your personal details.',  it:'Accedi al sito ufficiale e compila il modulo con i tuoi dati personali.' },
  'ibkr.s2_title':    { pt:'Enviar seus documentos',                   en:'Submit your documents',               it:'Invia i tuoi documenti' },
  'ibkr.s2_prev':     { pt:'Upload do RG/Passaporte e comprovante de residência para verificação de identidade.', en:'Upload your ID/Passport and proof of address for identity verification.', it:'Carica il tuo ID/Passaporto e prova di indirizzo per la verifica dell\'identità.' },
  'ibkr.s3_title':    { pt:'Aguardar aprovação da conta',              en:'Wait for account approval',           it:'Attendi l\'approvazione del conto' },
  'ibkr.s3_prev':     { pt:'A IBKR analisa os documentos e aprova a conta. Você receberá um e-mail de confirmação.', en:'IBKR reviews your documents and approves the account. You will receive a confirmation email.', it:'IBKR esamina i tuoi documenti e approva il conto. Riceverai un\'email di conferma.' },
  'ibkr.s4_title':    { pt:'Fazer o primeiro depósito (via Wise)',     en:'Make your first deposit (via Wise)',  it:'Fai il primo deposito (tramite Wise)' },
  'ibkr.s4_prev':     { pt:'Transfira dólares da sua conta Wise para a IBKR usando os dados bancários fornecidos.', en:'Transfer dollars from your Wise account to IBKR using the provided bank details.', it:'Trasferisci dollari dal tuo conto Wise a IBKR utilizzando i dettagli bancari forniti.' },
  'ibkr.s5_title':    { pt:'Comprar seu primeiro ETF',                 en:'Buy your first ETF',                  it:'Acquista il tuo primo ETF' },
  'ibkr.s5_prev':     { pt:'Com saldo disponível, execute sua primeira ordem de compra de um ETF global.', en:'With available balance, execute your first purchase order for a global ETF.', it:'Con saldo disponibile, esegui il tuo primo ordine di acquisto per un ETF globale.' },
  'ibkr.sofia_tag':   { pt:'Assistente BSafe',              en:'BSafe Assistant',              it:'Assistente BSafe' },
  'ibkr.sofia_title': { pt:'Dúvidas? Fale com a',           en:'Questions? Talk to',           it:'Domande? Parla con' },
  'ibkr.sofia_role':  { pt:'Especialista em Interactive Brokers · BSafe Invest', en:'Interactive Brokers Specialist · BSafe Invest', it:'Specialista Interactive Brokers · BSafe Invest' },
  'ibkr.sofia_greet': { pt:'Olá! Sou a <strong>Sofia</strong>, sua guia para a Interactive Brokers. Estou aqui para tirar qualquer dúvida sobre como abrir sua conta, fazer depósitos ou comprar ETFs. Por onde quer começar? 😊', en:'Hello! I\'m <strong>Sofia</strong>, your Interactive Brokers guide. I\'m here to answer any questions about opening your account, making deposits or buying ETFs. Where would you like to start? 😊', it:'Ciao! Sono <strong>Sofia</strong>, la tua guida per Interactive Brokers. Sono qui per rispondere a qualsiasi domanda su come aprire il tuo conto, fare depositi o acquistare ETF. Da dove vuoi iniziare? 😊' },
  'ibkr.q1':          { pt:'⏱ Quanto tempo leva?',   en:'⏱ How long does it take?', it:'⏱ Quanto tempo ci vuole?' },
  'ibkr.q2':          { pt:'📄 Quais documentos?',   en:'📄 What documents?',       it:'📄 Quali documenti?' },
  'ibkr.q3':          { pt:'💵 Depósito mínimo?',    en:'💵 Minimum deposit?',      it:'💵 Deposito minimo?' },
  'ibkr.q4':          { pt:'🔄 Como depositar?',     en:'🔄 How to deposit?',       it:'🔄 Come depositare?' },
  'ibkr.q5':          { pt:'📈 Melhores ETFs?',      en:'📈 Best ETFs?',            it:'📈 Migliori ETF?' },
  'ibkr.aff_title':   { pt:'Abra sua conta com nosso link',  en:'Open your account with our link', it:'Apri il tuo conto con il nostro link' },
  'ibkr.aff_sub':     { pt:'Ao usar o link de afiliado BSafe Invest, você apoia a plataforma educacional. Sem custo adicional para você.', en:'By using the BSafe Invest affiliate link, you support the educational platform. No additional cost to you.', it:'Utilizzando il link affiliato BSafe Invest, supporti la piattaforma educativa. Nessun costo aggiuntivo per te.' },
  'ibkr.faq_tag':     { pt:'Perguntas Frequentes', en:'Frequently Asked Questions', it:'Domande Frequenti' },
  'ibkr.faq_title':   { pt:'Dúvidas comuns',       en:'Common questions',           it:'Domande comuni' },

  // ─── WISE ────────────────────────────────────────────────────────
  'wise.tag':         { pt:'Guia Completo · Wise',  en:'Complete Guide · Wise',   it:'Guida Completa · Wise' },
  'wise.title1':      { pt:'Câmbio sem',            en:'Exchange without',         it:'Cambio senza' },
  'wise.title2':      { pt:'taxas abusivas',        en:'abusive fees',             it:'commissioni abusive' },
  'wise.sub':         { pt:'A Wise cobra a taxa de câmbio real do mercado, sem IOF escondido em spread. Converta seus reais em dólares e envie direto para sua conta na IBKR com o menor custo possível.', en:'Wise charges the real market exchange rate, with no hidden spread. Convert your reais to dollars and send directly to your IBKR account at the lowest possible cost.', it:'Wise applica il tasso di cambio reale del mercato, senza spread nascosto. Converti i tuoi reais in dollari e invia direttamente al tuo conto IBKR al costo più basso possibile.' },
  'wise.badge1':      { pt:'✓ Taxa de câmbio real (mid-market)', en:'✓ Real exchange rate (mid-market)', it:'✓ Tasso di cambio reale (mid-market)' },
  'wise.badge2':      { pt:'✓ Sem spread escondido',             en:'✓ No hidden spread',                it:'✓ Nessuno spread nascosto' },
  'wise.badge3':      { pt:'💱 Até 8x mais barato que bancos',  en:'💱 Up to 8x cheaper than banks',    it:'💱 Fino a 8x più economico delle banche' },
  'wise.btn1':        { pt:'Começar o Guia →', en:'Start the Guide →', it:'Inizia la Guida →' },
  'wise.btn2':        { pt:'Falar com Lucas',  en:'Talk to Lucas',     it:'Parla con Lucas' },
  'wise.steps_tag':   { pt:'Passo a Passo',    en:'Step by Step',      it:'Passo dopo Passo' },
  'wise.steps_title': { pt:'Do real ao dólar na IBKR', en:'From real to dollars at IBKR', it:'Dal real al dollaro su IBKR' },
  'wise.steps_sub':   { pt:'5 etapas para converter seus reais e depositar na corretora com o menor custo do mercado.', en:'5 steps to convert your reais and deposit at the broker at the lowest market cost.', it:'5 passi per convertire i tuoi reais e depositare presso il broker al costo di mercato più basso.' },
  'wise.s1_title':    { pt:'Criar sua conta na Wise',         en:'Create your Wise account',    it:'Crea il tuo conto Wise' },
  'wise.s2_title':    { pt:'Verificar sua identidade (KYC)',  en:'Verify your identity (KYC)',  it:'Verifica la tua identità (KYC)' },
  'wise.s3_title':    { pt:'Adicionar reais à sua conta Wise', en:'Add reais to your Wise account', it:'Aggiungi reais al tuo conto Wise' },
  'wise.s4_title':    { pt:'Converter BRL para USD',          en:'Convert BRL to USD',          it:'Converti BRL in USD' },
  'wise.s5_title':    { pt:'Enviar dólares para a IBKR',     en:'Send dollars to IBKR',        it:'Invia dollari a IBKR' },
  'wise.sim_title':   { pt:'💱 Simulador de Câmbio',         en:'💱 Exchange Simulator',       it:'💱 Simulatore di Cambio' },
  'wise.sim_label':   { pt:'Quanto você quer enviar (R$)',   en:'How much do you want to send (R$)', it:'Quanto vuoi inviare (R$)' },
  'wise.lucas_tag':   { pt:'Assistente BSafe',               en:'BSafe Assistant',              it:'Assistente BSafe' },
  'wise.lucas_role':  { pt:'Especialista em Câmbio e Wise · BSafe Invest', en:'Exchange & Wise Specialist · BSafe Invest', it:'Specialista Cambio e Wise · BSafe Invest' },
  'wise.lucas_greet': { pt:'Olá! Sou o <strong>Lucas</strong>, especialista em câmbio e Wise da BSafe Invest. Posso te ajudar com qualquer dúvida sobre como transferir seus reais para dólares e depositar na IBKR com o menor custo possível. O que você quer saber? 😊', en:"Hello! I'm <strong>Lucas</strong>, exchange and Wise specialist at BSafe Invest. I can help with any question about transferring your reais to dollars and depositing at IBKR at the lowest possible cost. What do you want to know? 😊", it:'Ciao! Sono <strong>Lucas</strong>, specialista in cambio e Wise di BSafe Invest. Posso aiutarti con qualsiasi domanda su come trasferire i tuoi reais in dollari e depositare su IBKR al costo più basso possibile. Cosa vuoi sapere? 😊' },
  'wise.q1':          { pt:'💸 Qual a taxa?',        en:'💸 What is the fee?',        it:'💸 Qual è la commissione?' },
  'wise.q2':          { pt:'📋 IOF na Wise?',        en:'📋 IOF at Wise?',            it:'📋 IOF su Wise?' },
  'wise.q3':          { pt:'⏱ Quanto tempo?',       en:'⏱ How long?',               it:'⏱ Quanto tempo?' },
  'wise.q4':          { pt:'💵 Valor mínimo?',       en:'💵 Minimum amount?',         it:'💵 Importo minimo?' },
  'wise.q5':          { pt:'🔒 É segura?',           en:'🔒 Is it safe?',             it:'🔒 È sicura?' },
  'wise.cmp_tag':     { pt:'Comparativo',            en:'Comparison',                 it:'Confronto' },
  'wise.cmp_title':   { pt:'Wise vs Banco Tradicional', en:'Wise vs Traditional Bank', it:'Wise vs Banca Tradizionale' },
  'wise.faq_tag':     { pt:'Perguntas Frequentes',   en:'Frequently Asked Questions', it:'Domande Frequenti' },
  'wise.faq_title':   { pt:'Dúvidas comuns',         en:'Common questions',           it:'Domande comuni' },

  // ─── BITCOIN ─────────────────────────────────────────────────────
  'btc.tag':          { pt:'₿ Bitcoin · Autocustódia · Blockstream Jade', en:'₿ Bitcoin · Self-Custody · Blockstream Jade', it:'₿ Bitcoin · Autocustodia · Blockstream Jade' },
  'btc.title1':       { pt:'Seja seu',      en:'Be your',      it:'Sii la tua' },
  'btc.title2':       { pt:'próprio banco', en:'own bank',     it:'propria banca' },
  'btc.sub':          { pt:'Bitcoin é a única forma de possuir dinheiro que nenhum governo, banco ou instituição pode confiscar, congelar ou desvalorizar. Aprenda a comprar e guardar com segurança absoluta.', en:"Bitcoin is the only form of money that no government, bank or institution can confiscate, freeze or devalue. Learn how to buy and store it with absolute security.", it:"Bitcoin è l'unica forma di denaro che nessun governo, banca o istituzione può confiscare, congelare o svalutare. Impara ad acquistarlo e conservarlo con assoluta sicurezza." },
  'btc.badge1':       { pt:'₿ Escassez absoluta — 21M coins', en:'₿ Absolute scarcity — 21M coins', it:'₿ Scarsità assoluta — 21M coin' },
  'btc.badge2':       { pt:'✓ Sem intermediários',            en:'✓ No intermediaries',              it:'✓ Nessun intermediario' },
  'btc.badge3':       { pt:'🔐 Jade Wallet — autocustódia',  en:'🔐 Jade Wallet — self-custody',    it:'🔐 Jade Wallet — autocustodia' },
  'btc.btn1':         { pt:'Começar o Guia →',  en:'Start the Guide →', it:'Inizia la Guida →' },
  'btc.btn2':         { pt:'Ver a Jade Wallet', en:'See Jade Wallet',   it:'Vedi Jade Wallet' },
  'btc.concepts_tag': { pt:'Entenda Antes de Comprar', en:'Understand Before Buying', it:'Capisci Prima di Acquistare' },
  'btc.concepts_title':{ pt:'Os 3 pilares do Bitcoin', en:'The 3 pillars of Bitcoin', it:'I 3 pilastri di Bitcoin' },
  'btc.concepts_sub': { pt:'Antes de comprar, entenda os conceitos fundamentais que fazem o Bitcoin ser único.', en:'Before buying, understand the fundamental concepts that make Bitcoin unique.', it:'Prima di acquistare, capisci i concetti fondamentali che rendono Bitcoin unico.' },
  'btc.c1_title':     { pt:'Bitcoin — Escassez Digital',    en:'Bitcoin — Digital Scarcity',     it:'Bitcoin — Scarsità Digitale' },
  'btc.c1_text':      { pt:'Existe um limite máximo de 21 milhões de bitcoins. Nunca haverá mais do que isso. Enquanto governos podem imprimir moeda infinitamente, o Bitcoin tem escassez matemática garantida pelo código.', en:'There is a maximum limit of 21 million bitcoins. There will never be more than that. While governments can print money infinitely, Bitcoin has mathematical scarcity guaranteed by code.', it:'Esiste un limite massimo di 21 milioni di bitcoin. Non ce ne saranno mai di più. Mentre i governi possono stampare denaro all\'infinito, Bitcoin ha una scarsità matematica garantita dal codice.' },
  'btc.c2_title':     { pt:'Autocustódia — Seja o Banco',   en:'Self-Custody — Be Your Own Bank', it:'Autocustodia — Sii la Tua Banca' },
  'btc.c2_text':      { pt:'"Not your keys, not your coins." Quando você compra Bitcoin em uma exchange, ela guarda as chaves. Na autocustódia, você possui as chaves privadas — e portanto o bitcoin de verdade.', en:'"Not your keys, not your coins." When you buy Bitcoin on an exchange, they hold the keys. In self-custody, you own the private keys — and therefore the real bitcoin.', it:'"Not your keys, not your coins." Quando acquisti Bitcoin su un exchange, loro custodiscono le chiavi. Nell\'autocustodia, possiedi le chiavi private — e quindi il vero bitcoin.' },
  'btc.c3_title':     { pt:'Seed Phrase — Seu Cofre',       en:'Seed Phrase — Your Vault',        it:'Seed Phrase — Il Tuo Cofre' },
  'btc.c3_text':      { pt:'Uma sequência de 12 ou 24 palavras que representa seu bitcoin. Com ela você pode recuperar tudo em qualquer dispositivo. Sem ela, perde acesso para sempre.', en:'A sequence of 12 or 24 words that represents your bitcoin. With it you can recover everything on any device. Without it, you lose access forever.', it:'Una sequenza di 12 o 24 parole che rappresenta il tuo bitcoin. Con essa puoi recuperare tutto su qualsiasi dispositivo. Senza di essa, perdi l\'accesso per sempre.' },
  'btc.steps_tag':    { pt:'Passo a Passo',          en:'Step by Step',         it:'Passo dopo Passo' },
  'btc.steps_title':  { pt:'Do zero à autocustódia', en:'From zero to self-custody', it:"Da zero all'autocustodia" },
  'btc.steps_sub':    { pt:'Siga cada etapa com atenção. Este guia leva você da primeira compra até seu bitcoin 100% sob seu controle.', en:'Follow each step carefully. This guide takes you from your first purchase to your bitcoin 100% under your control.', it:'Segui ogni passo con attenzione. Questa guida ti porta dal primo acquisto al tuo bitcoin 100% sotto il tuo controllo.' },
  'btc.s1_title':     { pt:'Comprar Bitcoin na Kraken',             en:'Buy Bitcoin on Kraken',               it:'Acquista Bitcoin su Kraken' },
  'btc.s2_title':     { pt:'Configurar a Blockstream Jade',         en:'Set up Blockstream Jade',             it:'Configura Blockstream Jade' },
  'btc.s3_title':     { pt:'⚠ Anotar a Seed Phrase (CRÍTICO)',     en:'⚠ Write down Seed Phrase (CRITICAL)', it:'⚠ Annota la Seed Phrase (CRITICO)' },
  'btc.s4_title':     { pt:'Transferir Bitcoin da Kraken para a Jade', en:'Transfer Bitcoin from Kraken to Jade', it:'Trasferisci Bitcoin da Kraken a Jade' },
  'btc.s5_title':     { pt:'Verificar saldo e testar recuperação',  en:'Check balance and test recovery',     it:'Verifica il saldo e testa il recupero' },
  'btc.jade_tag':     { pt:'Hardware Wallet',   en:'Hardware Wallet',   it:'Hardware Wallet' },
  'btc.jade_title':   { pt:'Blockstream',       en:'Blockstream',       it:'Blockstream' },
  'btc.jade_name':    { pt:'Blockstream Jade',  en:'Blockstream Jade',  it:'Blockstream Jade' },
  'btc.jade_desc':    { pt:'Hardware wallet open-source, compacta e robusta. Protege suas chaves privadas offline.', en:'Open-source, compact and robust hardware wallet. Protects your private keys offline.', it:'Hardware wallet open-source, compatta e robusta. Protegge le tue chiavi private offline.' },
  'btc.sec_tag':      { pt:'Níveis de Segurança',    en:'Security Levels',       it:'Livelli di Sicurezza' },
  'btc.sec_title':    { pt:'Como guardar seu Bitcoin', en:'How to store your Bitcoin', it:'Come custodire il tuo Bitcoin' },
  'btc.faq_tag':      { pt:'Perguntas Frequentes',   en:'Frequently Asked Questions', it:'Domande Frequenti' },
  'btc.faq_title':    { pt:'Dúvidas sobre Bitcoin',  en:'Bitcoin Questions',      it:'Domande su Bitcoin' },
  'btc.cta_title':    { pt:'Seu patrimônio. Suas',   en:'Your wealth. Your',      it:'Il tuo patrimonio. Le tue' },
  'btc.cta_title2':   { pt:'regras',                 en:'rules',                   it:'regole' },
  'btc.cta_sub':      { pt:'Com Bitcoin em autocustódia, nenhum banco, governo ou empresa pode bloquear ou confiscar o que é seu.', en:'With Bitcoin in self-custody, no bank, government or company can block or confiscate what is yours.', it:'Con Bitcoin in autocustodia, nessuna banca, governo o azienda può bloccare o confiscare ciò che è tuo.' },

  // ─── SOBRE ───────────────────────────────────────────────────────
  'sobre.tag':        { pt:'CEO & Fundador · BSafe Invest', en:'CEO & Founder · BSafe Invest', it:'CEO & Fondatore · BSafe Invest' },
  'sobre.role':       { pt:'Advogado · Mestre em Economia · Educador Financeiro', en:'Lawyer · Master in Economics · Financial Educator', it:'Avvocato · Master in Economia · Educatore Finanziario' },
  'sobre.lema':       { pt:'"Gaste reais, invista em dólares e guarde bitcoin."', en:'"Spend reais, invest in dollars and save bitcoin."', it:'"Spendi reais, investi in dollari e salva bitcoin."' },
  'sobre.badge1':     { pt:'⚖️ Advogado Previdenciarista', en:'⚖️ Social Security Lawyer',     it:'⚖️ Avvocato Previdenziale' },
  'sobre.badge2':     { pt:'🎓 Mestre em Economia',        en:'🎓 Master in Economics',         it:'🎓 Master in Economia' },
  'sobre.badge3':     { pt:'✓ +10 anos investindo no exterior', en:'✓ +10 years investing abroad', it:"✓ +10 anni d'investimento all'estero" },
  'sobre.badge4':     { pt:'₿ Bitcoin desde cedo',         en:'₿ Bitcoin since early days',    it:'₿ Bitcoin fin dall\'inizio' },
  'sobre.btn1':       { pt:'Conhecer a História →', en:'Learn the Story →', it:'Scopri la Storia →' },
  'sobre.btn2':       { pt:'Ver a Missão',           en:'See the Mission',   it:'Vedi la Missione' },
  'sobre.hist_tag':   { pt:'A História',              en:'The Story',         it:'La Storia' },
  'sobre.hist_title': { pt:'De onde vem o BSafe',    en:'The origin of BSafe', it:"L'origine di BSafe" },
  'sobre.phil_tag':   { pt:'Filosofia',               en:'Philosophy',         it:'Filosofia' },
  'sobre.phil_title': { pt:'Os 3 pilares do BSafe',  en:'The 3 pillars of BSafe', it:'I 3 pilastri di BSafe' },
  'sobre.phil_sub':   { pt:'O lema de Rafael não é apenas uma frase — é um sistema completo de proteção patrimonial adaptado à realidade brasileira.', en:"Rafael's motto is not just a phrase — it's a complete wealth protection system adapted to Brazilian reality.", it:'Il motto di Rafael non è solo una frase — è un sistema completo di protezione patrimoniale adattato alla realtà brasiliana.' },
  'sobre.aut_tag':    { pt:'Fundamentos',             en:'Foundations',        it:'Fondamenti' },
  'sobre.aut_title':  { pt:'Por que a Escola Austríaca?', en:'Why the Austrian School?', it:'Perché la Scuola Austriaca?' },
  'sobre.aut_sub':    { pt:'A base intelectual que explica por que o real perde valor — e por que Bitcoin é a resposta.', en:'The intellectual foundation that explains why the real loses value — and why Bitcoin is the answer.', it:'La base intellettuale che spiega perché il real perde valore — e perché Bitcoin è la risposta.' },
  'sobre.miss_eyebrow':{ pt:'A Missão do BSafe Invest', en:'The BSafe Invest Mission', it:'La Missione di BSafe Invest' },
  'sobre.miss_title': { pt:'Proteger o fruto do seu',  en:'Protect the fruit of your', it:'Proteggere il frutto del tuo' },
  'sobre.miss_title2':{ pt:'trabalho',                  en:'work',               it:'lavoro' },
  'sobre.miss_text':  { pt:'Milhões de brasileiros trabalham duro, economizam com disciplina e ainda assim chegam à aposentadoria empobrecidos. Não por falta de esforço — mas porque ninguém os ensinou a proteger o que construíram. O BSafe Invest existe para mudar isso.', en:'Millions of Brazilians work hard, save with discipline and still reach retirement impoverished. Not for lack of effort — but because no one taught them to protect what they built. BSafe Invest exists to change that.', it:'Milioni di brasiliani lavorano sodo, risparmiano con disciplina e arrivano comunque alla pensione impoveriti. Non per mancanza di impegno — ma perché nessuno li ha insegnati a proteggere ciò che hanno costruito. BSafe Invest esiste per cambiare questo.' },
  'sobre.edu_tag':    { pt:'Conteúdo Educacional',      en:'Educational Content',  it:'Contenuto Educativo' },
  'sobre.edu_title':  { pt:'O que você vai aprender',  en:'What you will learn',  it:'Cosa imparerai' },
  'sobre.edu_sub':    { pt:'Tudo no BSafe é conteúdo educacional gratuito ou acessível. Sem promessas de retorno, sem recomendações de investimento — só conhecimento.', en:'Everything at BSafe is free or affordable educational content. No return promises, no investment recommendations — just knowledge.', it:'Tutto su BSafe è contenuto educativo gratuito o accessibile. Nessuna promessa di rendimento, nessuna raccomandazione di investimento — solo conoscenza.' },
  'sobre.cta_title':  { pt:'Pronto para proteger o que você construiu?', en:'Ready to protect what you built?', it:'Pronto a proteggere ciò che hai costruito?' },
  'sobre.cta_sub':    { pt:'Comece pelo guia gratuito ou torne-se membro Pro para acesso completo ao dashboard, relatórios e comunidade.', en:'Start with the free guide or become a Pro member for full access to the dashboard, reports and community.', it:'Inizia con la guida gratuita o diventa membro Pro per accesso completo alla dashboard, report e community.' },
  'sobre.cta_btn1':   { pt:'Começar Gratuitamente →', en:'Start for Free →',     it:'Inizia Gratuitamente →' },
  'sobre.cta_btn2':   { pt:'Conhecer o Plano Pro',    en:'See Pro Plan',         it:'Vedi Piano Pro' },

  // ─── PLANOS ──────────────────────────────────────────────────────
  'planos.tag':       { pt:'Planos BSafe Invest',   en:'BSafe Invest Plans',   it:'Piani BSafe Invest' },
  'planos.title1':    { pt:'Invista em',            en:'Invest in',            it:'Investi in' },
  'planos.title2':    { pt:'conhecimento',          en:'knowledge',            it:'conoscenza' },
  'planos.sub':       { pt:'Acesse guias completos, ferramentas interativas e o dashboard Pro para acompanhar seu patrimônio internacional em tempo real.', en:'Access complete guides, interactive tools and the Pro dashboard to track your international wealth in real time.', it:'Accedi a guide complete, strumenti interattivi e alla dashboard Pro per monitorare il tuo patrimonio internazionale in tempo reale.' },
  'planos.mensal':    { pt:'Mensal',     en:'Monthly',   it:'Mensile' },
  'planos.anual':     { pt:'Anual',      en:'Annual',    it:'Annuale' },
  'planos.economize': { pt:'Economize 20%', en:'Save 20%', it:'Risparmia 20%' },
  'planos.popular':   { pt:'MAIS POPULAR',  en:'MOST POPULAR', it:'PIÙ POPOLARE' },
  'planos.free_name': { pt:'Gratuito',   en:'Free',      it:'Gratuito' },
  'planos.free_per':  { pt:'para sempre', en:'forever',  it:'per sempre' },
  'planos.free_desc': { pt:'Comece a aprender gratuitamente. Acesso aos guias essenciais e ferramentas básicas.', en:'Start learning for free. Access to essential guides and basic tools.', it:'Inizia a imparare gratuitamente. Accesso alle guide essenziali e agli strumenti di base.' },
  'planos.pro_desc':  { pt:'O plano completo para quem leva o patrimônio internacional a sério.', en:'The complete plan for those who take international wealth seriously.', it:'Il piano completo per chi prende sul serio il patrimonio internazionale.' },
  'planos.elite_desc':{ pt:'Para quem quer acompanhamento próximo e acesso antecipado a todos os novos recursos.', en:'For those who want close monitoring and early access to all new features.', it:'Per chi vuole un monitoraggio ravvicinato e accesso anticipato a tutte le nuove funzionalità.' },
  'planos.incluido':  { pt:'Incluído',           en:'Included',          it:'Incluso' },
  'planos.tudo_free': { pt:'Tudo do Free, mais:', en:'Everything in Free, plus:', it:'Tutto del Free, più:' },
  'planos.tudo_pro':  { pt:'Tudo do Pro, mais:', en:'Everything in Pro, plus:', it:'Tutto del Pro, più:' },
  'planos.btn_free':  { pt:'Criar Conta Grátis', en:'Create Free Account', it:'Crea Account Gratuito' },
  'planos.btn_pro':   { pt:'Assinar Pro →',      en:'Subscribe Pro →',    it:'Abbonati Pro →' },
  'planos.btn_elite': { pt:'Assinar Elite →',    en:'Subscribe Elite →',  it:'Abbonati Elite →' },
  'planos.cmp_tag':   { pt:'Comparativo Completo', en:'Full Comparison',  it:'Confronto Completo' },
  'planos.cmp_title': { pt:'O que está incluído em cada plano', en:'What\'s included in each plan', it:'Cosa è incluso in ogni piano' },
  'planos.gar_title': { pt:'Garantia de 7 dias', en:'7-day Guarantee',   it:'Garanzia di 7 giorni' },
  'planos.gar_text':  { pt:'Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do valor pago. Sem perguntas, sem burocracia. Você não tem nada a perder.', en:'If for any reason you are not satisfied in the first 7 days, we will refund 100% of the amount paid. No questions, no bureaucracy. You have nothing to lose.', it:'Se per qualsiasi motivo non sei soddisfatto nei primi 7 giorni, rimborsiamo il 100% dell\'importo pagato. Nessuna domanda, nessuna burocrazia. Non hai nulla da perdere.' },
  'planos.faq_tag':   { pt:'Dúvidas sobre os Planos', en:'Plan Questions',  it:'Domande sui Piani' },
  'planos.faq_title': { pt:'Perguntas frequentes',    en:'Frequently asked questions', it:'Domande frequenti' },
  'planos.cta_title': { pt:'Comece hoje. É',          en:'Start today. It\'s', it:'Inizia oggi. È' },
  'planos.cta_free':  { pt:'gratuito',               en:'free',              it:'gratuito' },
  'planos.cta_sub':   { pt:'Crie sua conta Free agora e acesse todos os guias. Faça upgrade para o Pro quando quiser.', en:'Create your Free account now and access all guides. Upgrade to Pro whenever you want.', it:'Crea il tuo account Free ora e accedi a tutte le guide. Passa a Pro quando vuoi.' },
  'planos.cta_btn1':  { pt:'Criar Conta Grátis →',  en:'Create Free Account →', it:'Crea Account Gratuito →' },
  'planos.cta_btn2':  { pt:'Ver Plano Pro',          en:'See Pro Plan',          it:'Vedi Piano Pro' },

  // ─── DASHBOARD ───────────────────────────────────────────────────
  'dash.title':    { pt:'Visão Geral do Patrimônio', en:'Wealth Overview',         it:'Panoramica del Patrimonio' },
  'dash.live':     { pt:'AO VIVO',                   en:'LIVE',                    it:'IN DIRETTA' },
  'dash.refresh':  { pt:'↻ Atualizar',               en:'↻ Refresh',               it:'↻ Aggiorna' },
  'dash.report':   { pt:'Gerar Relatório',            en:'Generate Report',         it:'Genera Rapporto' },
  'dash.launch':   { pt:'+ Lançar Mês',              en:'+ Add Month',             it:'+ Aggiungi Mese' },
  'dash.kpi1':     { pt:'Patrimônio Total (BRL)',     en:'Total Wealth (BRL)',      it:'Patrimonio Totale (BRL)' },
  'dash.kpi2':     { pt:'Carteira IBKR (USD)',        en:'IBKR Portfolio (USD)',    it:'Portafoglio IBKR (USD)' },
  'dash.kpi3':     { pt:'Bitcoin (BTC)',              en:'Bitcoin (BTC)',            it:'Bitcoin (BTC)' },
  'dash.kpi4':     { pt:'% Protegido do Real',        en:'% Protected from BRL',   it:'% Protetto dal BRL' },
  'dash.chart_title': { pt:'Evolução do Patrimônio — 12 meses', en:'Wealth Evolution — 12 months', it:'Evoluzione del Patrimonio — 12 mesi' },
  'dash.alloc':    { pt:'Alocação de Ativos',         en:'Asset Allocation',        it:'Allocazione degli Asset' },
  'dash.ibkr_pos': { pt:'Carteira IBKR — Posições',  en:'IBKR Portfolio — Positions', it:'Portafoglio IBKR — Posizioni' },
  'dash.btc_mon':  { pt:'Monitor Bitcoin',            en:'Bitcoin Monitor',         it:'Monitor Bitcoin' },
  'dash.btc_ph':   { pt:'Cole seu xpub ou endereço Bitcoin...', en:'Paste your xpub or Bitcoin address...', it:'Incolla il tuo xpub o indirizzo Bitcoin...' },
  'dash.btc_check':{ pt:'Consultar',                  en:'Check',                   it:'Controlla' },
  'dash.hist_title':{ pt:'📅 Histórico de Lançamentos Mensais', en:'📅 Monthly Entry History', it:'📅 Storico Inserimenti Mensili' },
  'dash.hist_btn': { pt:'+ Novo Lançamento',          en:'+ New Entry',             it:'+ Nuovo Inserimento' },
  'dash.macro':    { pt:'Macro — Indicadores',        en:'Macro — Indicators',      it:'Macro — Indicatori' },
  'dash.report_month': { pt:'📋 Relatório de',        en:'📋 Report for',           it:'📋 Rapporto di' },

  // ─── TERMOS ──────────────────────────────────────────────────────
  'termos.tag':   { pt:'Documentos Legais',            en:'Legal Documents',         it:'Documenti Legali' },
  'termos.title': { pt:'Termos de Uso e Disclaimers',  en:'Terms of Use and Disclaimers', it:'Termini di Utilizzo e Disclaimer' },
  'termos.updated':{ pt:'Última atualização: Abril de 2026 · BSafe Invest', en:'Last updated: April 2026 · BSafe Invest', it:'Ultimo aggiornamento: Aprile 2026 · BSafe Invest' },
  'termos.alert_title': { pt:'⚠ Leia antes de usar a plataforma', en:'⚠ Read before using the platform', it:'⚠ Leggi prima di usare la piattaforma' },
  'termos.alert_text':  { pt:'Todo o conteúdo do BSafe Invest é de natureza exclusivamente educacional. Não somos consultores de valores mobiliários, não oferecemos recomendações individuais de investimento e não somos regulados pela CVM como tal. Ao usar esta plataforma, você concorda com estes termos.', en:'All BSafe Invest content is exclusively educational in nature. We are not securities advisors, we do not offer individual investment recommendations and are not regulated by the CVM as such. By using this platform, you agree to these terms.', it:'Tutto il contenuto di BSafe Invest è di natura esclusivamente educativa. Non siamo consulenti di valori mobiliari, non offriamo raccomandazioni di investimento individuali e non siamo regolamentati dalla CVM come tali. Utilizzando questa piattaforma, accetti questi termini.' },
};

// ── ENGINE ───────────────────────────────────────────────────────
const LANG = {
  current: localStorage.getItem('bsafe_lang') || 'pt',

  set(lang) {
    this.current = lang;
    localStorage.setItem('bsafe_lang', lang);
    this.apply();
    this.updateBtns();
  },

  t(key) {
    const entry = T[key];
    if (!entry) return null;
    return entry[this.current] || entry['pt'] || '';
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text === null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });
    const langMap = { pt:'pt-BR', en:'en-US', it:'it-IT' };
    document.documentElement.lang = langMap[this.current] || 'pt-BR';
  },

  updateBtns() {
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === this.current);
    });
  },

  init() {
    this.apply();
    this.updateBtns();
  }
};

// ── SELECTOR ─────────────────────────────────────────────────────
function injectLangSelector() {
  const style = document.createElement('style');
  style.textContent = `
    .lang-selector{display:flex;align-items:center;gap:4px;margin-left:12px;padding-left:12px;border-left:1px solid rgba(255,255,255,0.08)}
    .lang-btn{background:none;border:1px solid transparent;border-radius:4px;cursor:pointer;font-size:18px;padding:3px 5px;transition:all 0.2s;opacity:0.4;line-height:1}
    .lang-btn:hover{opacity:0.75;border-color:rgba(232,71,10,0.3)}
    .lang-btn.active{opacity:1;border-color:rgba(232,71,10,0.5);background:rgba(232,71,10,0.08)}
    @media(max-width:768px){.lang-selector{margin-left:6px;padding-left:6px}.lang-btn{font-size:15px;padding:2px 4px}}
  `;
  document.head.appendChild(style);

  const sel = document.createElement('div');
  sel.className = 'lang-selector';
  sel.innerHTML = `
    <button class="lang-btn" data-lang="pt" onclick="LANG.set('pt')" title="Português">🇧🇷</button>
    <button class="lang-btn" data-lang="en" onclick="LANG.set('en')" title="English">🇺🇸</button>
    <button class="lang-btn" data-lang="it" onclick="LANG.set('it')" title="Italiano">🇮🇹</button>
  `;

  const nav = document.querySelector('nav');
  if (!nav) return;
  const cta = nav.querySelector('.nav-cta');
  if (cta) nav.insertBefore(sel, cta);
  else nav.appendChild(sel);
}

document.addEventListener('DOMContentLoaded', () => {
  injectLangSelector();
  LANG.init();
});
