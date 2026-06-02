// netlify/functions/xpub.js
// Proxy serverless para consultar xpub via Trezor Blockbook
// Evita CORS — a chamada é feita servidor→servidor

const TREZOR_NODES = [
  'btc1.trezor.io',
  'btc2.trezor.io',
  'btc3.trezor.io',
];

exports.handler = async function(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const xpub = event.queryStringParameters?.xpub;
  const type = event.queryStringParameters?.type || 'info'; // info | txs

  if (!xpub || xpub.length < 80) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'xpub inválida ou ausente' }),
    };
  }

  // Tenta cada nó Trezor até um responder
  for (const node of TREZOR_NODES) {
    try {
      let url;
      if (type === 'txs') {
        url = `https://${node}/api/v2/xpub/${xpub}?details=txs&pageSize=20`;
      } else {
        url = `https://${node}/api/v2/xpub/${xpub}?details=basic`;
      }

      const response = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(12000),
      });

      if (!response.ok) continue;

      const data = await response.json();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ...data, _source: node }),
      };
    } catch (e) {
      // Tenta próximo nó
      continue;
    }
  }

  return {
    statusCode: 502,
    headers,
    body: JSON.stringify({ error: 'Todos os nós Trezor indisponíveis' }),
  };
};
