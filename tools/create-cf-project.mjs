import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf8');
const match = envContent.match(/CLOUDFLARE_API_TOKEN=([^\r\n]+)/);
const token = match[1].trim();
const accountId = '799589fb4e4f92d2afe04e898e8f617c';

async function createProject() {
  console.log('📡 Creating Cloudflare Pages project "fasttrackcreator"...');
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'fasttrackcreator',
      production_branch: 'main'
    })
  });

  const data = await res.json();
  if (res.ok && data.success) {
    console.log('✅ Pages project created successfully:', data.result.name, data.result.subdomain);
  } else if (data.errors?.some(e => e.message?.includes('already exists'))) {
    console.log('ℹ️ Pages project already exists, ready to deploy.');
  } else {
    console.log('Response:', JSON.stringify(data, null, 2));
  }
}

createProject().catch(console.error);
