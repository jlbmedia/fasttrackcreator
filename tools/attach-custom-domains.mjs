import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf8');
const match = envContent.match(/CLOUDFLARE_API_TOKEN=([^\r\n]+)/);
const token = match[1].trim();
const accountId = '799589fb4e4f92d2afe04e898e8f617c';
const projectName = 'fasttrackcreator';

async function attachDomain(domain) {
  console.log(`📡 Attaching custom domain "${domain}" to Pages project "${projectName}"...`);
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: domain })
  });

  const data = await res.json();
  if (res.ok && data.success) {
    console.log(`✅ Successfully added ${domain}:`, data.result?.status || 'pending DNS validation');
  } else {
    console.log(`Response for ${domain}:`, JSON.stringify(data.errors || data, null, 2));
  }
}

async function main() {
  await attachDomain('fasttrackcreator.com');
  await attachDomain('www.fasttrackcreator.com');
}

main().catch(console.error);
