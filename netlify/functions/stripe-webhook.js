// netlify/functions/stripe-webhook.js
// Recebe eventos do Stripe, notifica Rafael e envia boas-vindas ao cliente.
//
// Variáveis de ambiente necessárias (Netlify → Site settings → Environment variables):
//   STRIPE_WEBHOOK_SECRET   → whsec_... (gerado no Stripe ao criar o webhook)
//   STRIPE_SECRET_KEY       → sk_live_... (chave secreta do Stripe)
//   RESEND_API_KEY          → re_... (resend.com, grátis até 3k emails/mês)
//   OWNER_EMAIL             → bsafe@bsafebitcoin.org

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// ── Mapeamento Payment Link ID → nome do plano e URL dos tutoriais ──────────
// Substitua pelos IDs reais dos seus Payment Links (live mode)
// Você encontra o ID em: Stripe Dashboard → Payment Links → clique no link → URL termina com plink_xxx
const PLANOS = {
  // test mode (remova antes de ir ao ar)
  "plink_test_placeholder_kit":     { nome: "Kit Autocustódia",   tutoriais: "https://bsafebitcoin.org/tutoriais/kit" },
  "plink_test_placeholder_multi":   { nome: "BSafe Multisig",     tutoriais: "https://bsafebitcoin.org/tutoriais/multisig" },
  "plink_test_placeholder_pro":     { nome: "BSafe Multisig Pro", tutoriais: "https://bsafebitcoin.org/tutoriais/pro" },
  "plink_test_placeholder_premium": { nome: "BSafe Premium",      tutoriais: "https://bsafebitcoin.org/tutoriais/premium" },
  // live mode — adicione aqui quando trocar os links
  // "plink_xxx": { nome: "Kit Autocustódia", tutoriais: "https://..." },
};

// ── Envio de e-mail via Resend ───────────────────────────────────────────────
async function sendEmail({ to, subject, html }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "BSafe Bitcoin <bsafe@bsafebitcoin.org>",
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error ${res.status}: ${err}`);
  }
  return res.json();
}

// ── Formata endereço de entrega ──────────────────────────────────────────────
function formatAddress(addr) {
  if (!addr) return "Não informado";
  const parts = [
    addr.line1,
    addr.line2,
    addr.city,
    addr.state,
    addr.postal_code,
    addr.country,
  ].filter(Boolean);
  return parts.join(", ");
}

// ── E-mail de notificação para Rafael ───────────────────────────────────────
function emailOwner({ plano, cliente, email, telefone, endereco, valor, moeda, sessionId }) {
  const subject = `🟠 Nova compra BSafe — ${plano}`;
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #0d0d0d; color: #e8e8e0; margin: 0; padding: 0; }
  .wrap { max-width: 560px; margin: 40px auto; background: #141414; border: 1px solid rgba(247,147,26,0.25); border-radius: 14px; overflow: hidden; }
  .header { background: #F7931A; padding: 28px 32px; }
  .header h1 { margin: 0; font-size: 22px; color: #000; font-weight: 800; letter-spacing: -0.5px; }
  .header p { margin: 4px 0 0; font-size: 13px; color: rgba(0,0,0,0.6); }
  .body { padding: 32px; }
  .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
  .row:last-child { border-bottom: none; }
  .label { color: #5a5a5a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
  .value { color: #e8e8e0; font-weight: 600; text-align: right; max-width: 320px; word-break: break-word; }
  .badge { display: inline-block; background: rgba(247,147,26,0.15); color: #F7931A; border: 1px solid rgba(247,147,26,0.35); border-radius: 6px; padding: 3px 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; }
  .footer { background: #0d0d0d; padding: 16px 32px; font-size: 11px; color: #3a3a3a; border-top: 1px solid rgba(255,255,255,0.05); }
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>🟠 Nova compra recebida</h1>
    <p>BSafe Bitcoin — sistema automático</p>
  </div>
  <div class="body">
    <div class="row"><span class="label">Plano</span><span class="value"><span class="badge">${plano}</span></span></div>
    <div class="row"><span class="label">Cliente</span><span class="value">${cliente || "Não informado"}</span></div>
    <div class="row"><span class="label">E-mail</span><span class="value">${email || "Não informado"}</span></div>
    <div class="row"><span class="label">Telefone</span><span class="value">${telefone || "Não informado"}</span></div>
    <div class="row"><span class="label">Endereço de entrega</span><span class="value">${endereco}</span></div>
    <div class="row"><span class="label">Valor pago</span><span class="value">${moeda.toUpperCase()} ${(valor / 100).toFixed(2)}</span></div>
    <div class="row"><span class="label">Session ID</span><span class="value" style="font-size:11px;font-family:monospace;color:#5a5a5a">${sessionId}</span></div>
  </div>
  <div class="footer">Enviado automaticamente pelo webhook BSafe · bsafebitcoin.org</div>
</div>
</body></html>`;

  return sendEmail({ to: process.env.OWNER_EMAIL || "bsafe@bsafebitcoin.org", subject, html });
}

// ── E-mail de boas-vindas ao cliente ────────────────────────────────────────
function emailCliente({ emailCliente, nomeCliente, plano, urlTutoriais }) {
  const primeiroNome = (nomeCliente || "").split(" ")[0] || "Bitcoiner";
  const subject = `Bem-vindo(a) ao ${plano} — seu kit está a caminho 🟠`;
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #0d0d0d; color: #e8e8e0; margin: 0; padding: 0; }
  .wrap { max-width: 560px; margin: 40px auto; background: #141414; border: 1px solid rgba(247,147,26,0.25); border-radius: 14px; overflow: hidden; }
  .header { background: #080808; padding: 36px 32px 28px; text-align: center; border-bottom: 1px solid rgba(247,147,26,0.2); }
  .logo { font-size: 28px; font-weight: 900; color: #F7931A; letter-spacing: -1px; margin-bottom: 4px; }
  .logo span { color: #e8e8e0; }
  .tagline { font-size: 12px; color: #5a5a5a; letter-spacing: 0.1em; text-transform: uppercase; }
  .body { padding: 36px 32px; }
  h2 { font-size: 22px; color: #fff; margin: 0 0 16px; font-weight: 700; }
  p { font-size: 15px; color: #9a9a90; line-height: 1.75; margin: 0 0 16px; }
  .highlight { color: #e8e8e0; }
  .steps { background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 24px; margin: 24px 0; }
  .step { display: flex; gap: 14px; margin-bottom: 18px; align-items: flex-start; }
  .step:last-child { margin-bottom: 0; }
  .step-num { background: rgba(247,147,26,0.15); color: #F7931A; border: 1px solid rgba(247,147,26,0.35); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
  .step-text { font-size: 14px; color: #9a9a90; line-height: 1.6; padding-top: 4px; }
  .step-text strong { color: #e8e8e0; }
  .cta { display: block; background: #F7931A; color: #000; text-decoration: none; text-align: center; font-size: 15px; font-weight: 800; padding: 16px 24px; border-radius: 10px; margin: 28px 0 0; letter-spacing: 0.02em; }
  .warn { background: rgba(247,147,26,0.06); border: 1px solid rgba(247,147,26,0.2); border-radius: 8px; padding: 14px 16px; margin-top: 24px; font-size: 12px; color: #5a5a5a; line-height: 1.65; }
  .warn strong { color: #F7931A; }
  .footer { background: #0d0d0d; padding: 20px 32px; font-size: 11px; color: #3a3a3a; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; line-height: 1.7; }
  .footer a { color: #5a5a5a; text-decoration: none; }
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <div class="logo">B<span>SAFE</span></div>
    <div class="tagline">Bitcoin · Autocustódia · Educação</div>
  </div>
  <div class="body">
    <h2>Olá, ${primeiroNome}! Sua jornada começa agora. 🟠</h2>
    <p>Sua compra do <span class="highlight"><strong>${plano}</strong></span> foi confirmada. Aqui está o que acontece a seguir:</p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-text"><strong>Seu kit está sendo preparado.</strong> A Tapsigner será enviada para o endereço que você informou. Você receberá o código de rastreio assim que despacharmos.</div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-text"><strong>Acesse os tutoriais gravados.</strong> Você já pode começar a aprender enquanto o kit chega. Assista no seu ritmo, quantas vezes precisar.</div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-text"><strong>Configure sua custódia.</strong> Com o kit em mãos, siga os vídeos passo a passo. Se tiver dúvidas, estou disponível para ajudar.</div>
      </div>
    </div>

    <a href="${urlTutoriais}" class="cta">Acessar tutoriais →</a>

    <div class="warn">
      <strong>⚠️ Atenção:</strong> Nunca compartilhe suas 24 palavras (seed phrase) com ninguém — nem comigo. Qualquer pessoa que as solicitar está tentando roubar seu Bitcoin. A BSafe jamais pedirá suas palavras-chave.
    </div>
  </div>
  <div class="footer">
    BSafe Bitcoin · <a href="https://bsafebitcoin.org">bsafebitcoin.org</a><br>
    Dúvidas? Responda este e-mail ou entre em contato pelo Telegram do grupo fechado.<br>
    <span style="color:#2a2a2a">Rafael Bered · Advogado · Educador Bitcoin</span>
  </div>
</div>
</body></html>`;

  return sendEmail({ to: emailCliente, subject, html });
}

// ── Handler principal ────────────────────────────────────────────────────────
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Verificar assinatura do Stripe
  const sig = event.headers["stripe-signature"];
  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  // Só nos interessa checkout.session.completed
  if (stripeEvent.type !== "checkout.session.completed") {
    return { statusCode: 200, body: "Ignored" };
  }

  const session = stripeEvent.data.object;

  // Identificar o plano pelo Payment Link ID
  const paymentLinkId = session.payment_link;
  const planoInfo = PLANOS[paymentLinkId] || { nome: "Plano BSafe", tutoriais: "https://bsafebitcoin.org/tutoriais" };

  // Dados do cliente
  const nomeCliente   = session.customer_details?.name    || "";
  const emailDoCliente = session.customer_details?.email  || "";
  const telefone      = session.customer_details?.phone   || "";
  const endereco      = formatAddress(session.shipping_details?.address || session.customer_details?.address);
  const valor         = session.amount_total  || 0;
  const moeda         = session.currency      || "brl";

  console.log(`Nova compra: ${planoInfo.nome} | ${emailDoCliente} | ${endereco}`);

  // Disparar os dois e-mails em paralelo
  const promises = [
    emailOwner({
      plano: planoInfo.nome,
      cliente: nomeCliente,
      email: emailDoCliente,
      telefone,
      endereco,
      valor,
      moeda,
      sessionId: session.id,
    }),
  ];

  if (emailDoCliente) {
    promises.push(
      emailCliente({
        emailCliente: emailDoCliente,
        nomeCliente,
        plano: planoInfo.nome,
        urlTutoriais: planoInfo.tutoriais,
      })
    );
  }

  try {
    await Promise.all(promises);
  } catch (err) {
    // Loga o erro mas retorna 200 para o Stripe não retentar
    console.error("Email error:", err.message);
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
