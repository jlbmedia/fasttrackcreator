import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf8');
const match = envContent.match(/CLOUDFLARE_API_TOKEN=([^\r\n]+)/);
const token = match[1].trim();
const accountId = '799589fb4e4f92d2afe04e898e8f617c';
const projectName = 'fasttrackcreator';

async function checkDomains() {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  console.log('Domain statuses:', JSON.stringify(data.result?.map(d => ({ name: d.name, status: d.status, certificate_status: d.certificate_status })), null, 2));
}

checkDomains().catch(console.error);
