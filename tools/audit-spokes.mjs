import fs from 'fs';

const files = [
  'dist/turnkey-assets/buy-tiktok-shop-accounts-for-sale/index.html',
  'dist/turnkey-assets/monetized-youtube-channels-for-sale/index.html',
  'dist/turnkey-assets/buy-aged-instagram-accounts-and-theme-pages/index.html',
  'dist/reviews/fameswap-marketplace-review-and-safety-audit/index.html',
  'dist/creator-commerce/linkstack-vs-stan-store-for-creators/index.html',
  'dist/reviews/room30-ai-influencer-portfolio-review/index.html',
  'dist/reviews/dfy-dave-monetized-channels-review/index.html',
  'dist/reviews/linkstack-creator-platform-review-and-pricing/index.html'
];

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]*)"/i);
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href="([^"]*)"/i);
  const schemaMatches = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];

  console.log(`\n=== AUDIT: ${f} ===`);
  console.log(`H1 Count: ${h1Matches.length}`);
  if (h1Matches.length > 0) {
    console.log(`H1 Text: "${h1Matches[0].replace(/<[^>]+>/g, '').trim()}"`);
  }
  if (metaDescMatch) {
    const rawDesc = metaDescMatch[1].replace(/&#38;/g, '&');
    console.log(`Meta Description Length: ${rawDesc.length} characters`);
    console.log(`Meta Description: "${rawDesc}"`);
    if (rawDesc.length >= 120 && rawDesc.length <= 158) {
      console.log('✅ Meta Description PASS (120-158 chars)');
    } else {
      console.log('❌ Meta Description FAIL');
    }
  } else {
    console.log('❌ Meta Description Missing');
  }

  if (canonicalMatch) {
    console.log(`Canonical URL: ${canonicalMatch[1]}`);
    if (canonicalMatch[1].startsWith('https://fasttrackcreator.com/')) {
      console.log('✅ Canonical URL PASS');
    }
  }

  console.log(`Schema JSON-LD Blocks: ${schemaMatches.length}`);
  schemaMatches.forEach((s, idx) => {
    const raw = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
    try {
      const parsed = JSON.parse(raw);
      console.log(`  Schema #${idx + 1} (${parsed['@type'] || 'Custom'}): ✅ Valid JSON-LD`);
    } catch (e) {
      console.log(`  Schema #${idx + 1}: ❌ Invalid JSON - ${e.message}`);
    }
  });
}
