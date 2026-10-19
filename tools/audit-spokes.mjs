import fs from 'fs';

const files = [
  'dist/creator-commerce/best-stan-store-alternatives-for-creators/index.html',
  'dist/reviews/linkstack-creator-platform-review-and-pricing/index.html'
];

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  const schemaMatches = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];

  console.log(`\n=== AUDIT: ${f} ===`);
  console.log(`H1 Count: ${h1Matches.length}`);
  if (h1Matches.length > 0) {
    console.log(`H1 Text: "${h1Matches[0].replace(/<[^>]+>/g, '').trim()}"`);
  }
  if (metaDescMatch) {
    console.log(`Meta Description Length: ${metaDescMatch[1].length} characters`);
    console.log(`Meta Description: "${metaDescMatch[1]}"`);
    if (metaDescMatch[1].length >= 120 && metaDescMatch[1].length <= 158) {
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
