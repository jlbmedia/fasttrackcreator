import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf8');
const match = envContent.match(/CLOUDFLARE_API_TOKEN=([^\r\n]+)/);
const token = match[1].trim();
const accountId = '799589fb4e4f92d2afe04e898e8f617c';
const projectName = 'fasttrackcreator';

async function refreshDomain(domain) {
  console.log(`\n🔄 Refreshing domain ${domain}...`);
  // 1. Delete
  const delRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains/${domain}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log(`Delete ${domain}:`, delRes.status);

  // Wait 1 second
  await new Promise(r => setTimeout(r, 1000));

  // 2. Re-add
  const addRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: domain })
  });
  const data = await addRes.json();
  console.log(`Add ${domain}:`, JSON.stringify(data, null, 2));
}

async function main() {
  await refreshDomain('fasttrackcreator.com');
  await refreshDomain('www.fasttrackcreator.com');
}

main().catch(console.error);
