import fs from 'fs';
import path from 'path';

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = getAllHtmlFiles('dist');
console.log(`Auditing ${allFiles.length} HTML files in dist/...\n`);

let totalPassed = 0;
let errors = 0;

for (const f of allFiles) {
  const is404 = f.includes('404.html');
  const html = fs.readFileSync(f, 'utf8');
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]*)"/i);
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href="([^"]*)"/i);
  const schemaMatches = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];

  const relPath = f.replace(/\\/g, '/');
  let fileError = false;

  // 1. Exactly 1 H1
  if (h1Matches.length !== 1) {
    console.error(`❌ ${relPath}: Expected exactly 1 H1, found ${h1Matches.length}`);
    fileError = true;
  }

  // 2. Meta description (unless 404 page)
  if (!is404) {
    if (!metaDescMatch) {
      console.error(`❌ ${relPath}: Meta description missing!`);
      fileError = true;
    } else {
      const rawDesc = metaDescMatch[1].replace(/&#38;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
      if (rawDesc.length < 120 || rawDesc.length > 158) {
        console.error(`❌ ${relPath}: Meta description length ${rawDesc.length} out of bounds (120-158): "${rawDesc}"`);
        fileError = true;
      }
    }
  }

  // 3. Absolute canonical tag
  if (!is404) {
    if (!canonicalMatch || !canonicalMatch[1].startsWith('https://fasttrackcreator.com/')) {
      console.error(`❌ ${relPath}: Missing or invalid canonical tag (${canonicalMatch ? canonicalMatch[1] : 'none'})`);
      fileError = true;
    }
  }

  // 4. Schema JSON-LD validity
  schemaMatches.forEach((s, idx) => {
    const raw = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
    try {
      JSON.parse(raw);
    } catch (e) {
      console.error(`❌ ${relPath}: Schema #${idx + 1} invalid JSON: ${e.message}`);
      fileError = true;
    }
  });

  if (fileError) {
    errors++;
  } else {
    totalPassed++;
  }
}

console.log(`\n========================================`);
console.log(`AUDIT RESULTS:`);
console.log(`Total Files Checked: ${allFiles.length}`);
console.log(`Passed: ${totalPassed}`);
console.log(`Failed: ${errors}`);
console.log(`========================================`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('✅ ALL PAGES 100% COMPLIANT WITH DEFENSIVE SEO RULES!');
}
