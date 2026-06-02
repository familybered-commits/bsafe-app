// netlify/functions/xpub.js
// Proxy serverless — consulta Trezor Blockbook servidor→servidor
// Usa https nativo do Node.js (funciona em todas as versões)

const https = require('https');

const TREZOR_NODES = [
  'btc1.trezor.io',
  'btc2.trezor.io', 
  'btc3.trezor.io',
];

// Faz uma requisição HTTPS e retorna o body como string
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'BSafe-Dashboard/1.0'
      },
      timeout: 12000,
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, body });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
        }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

exports.handler = async function(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const xpub = event.queryStringParameters && event.queryStringParameters.xpub;
  const type = (event.queryStringParameters && event.queryStringParameters.type) || 'info';

  if (!xpub || xpub.length < 80) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'xpub inválida ou ausente' }),
    };
  }

  const errors = [];

  for (const node of TREZOR_NODES) {
    try {
      const path = type === 'txs'
        ? `/api/v2/xpub/${xpub}?details=txs&pageSize=20`
        : `/api/v2/xpub/${xpub}?details=basic`;

      const url = `https://${node}${path}`;
      console.log(`Tentando ${node}...`);

      const { body } = await httpsGet(url);
      const data = JSON.parse(body);

      console.log(`Sucesso: ${node}, balance=${data.balance}`);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ...data, _source: node }),
      };
    } catch (e) {
      const msg = `${node}: ${e.message}`;
      console.error(msg);
      errors.push(msg);
    }
  }

  return {
    statusCode: 502,
    headers,
    body: JSON.stringify({ 
      error: 'Todos os nós Trezor indisponíveis',
      details: errors 
    }),
  };
};
