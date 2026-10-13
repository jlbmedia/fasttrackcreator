import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-contrast, electric acceleration bolt design for Fast Track Creator
// Engineered for maximum recognition on dark & light browser tabs,
// iOS Safari touch icons, Android home screens, and Google Search SERP snippets.
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Radiant Electric Indigo to Neon Cyan Gradient -->
    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="35%" stop-color="#6366f1"/>
      <stop offset="70%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>

    <!-- Deep Obsidian Core Background -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <!-- Glowing Accent -->
    <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#c7d2fe"/>
    </linearGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#6366f1" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Deep Obsidian Squircle Base -->
  <rect x="20" y="20" width="472" height="472" rx="128" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="4"/>

  <!-- Polished Luminous Rim -->
  <rect x="30" y="30" width="452" height="452" rx="118" fill="none" stroke="#6366f1" stroke-width="8" stroke-opacity="0.4"/>

  <!-- High-Energy Forward Acceleration Lightning Bolt -->
  <path d="M 284 68
           L 136 264
           L 248 264
           L 216 444
           L 384 228
           L 272 228
           Z"
        fill="url(#boltGrad)"
        filter="url(#softGlow)"/>

  <!-- Inner Razor-Sharp Highlight Core -->
  <path d="M 280 96
           L 168 252
           L 256 252
           L 236 396
           L 356 240
           L 274 240
           Z"
        fill="#ffffff"
        opacity="0.25"/>

  <!-- 4-Point Speed Star Sparkle (Top Right) -->
  <path d="M 390 76
           Q 390 106 420 106
           Q 390 106 390 136
           Q 390 106 360 106
           Q 390 106 390 76 Z"
        fill="url(#starGrad)"/>
</svg>`;

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  const dirSize = headerSize + entrySize * count;

  let currentOffset = dirSize;
  const entries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image byte size
    entry.writeUInt32LE(currentOffset, 12); // image offset

    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // number of images

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgBuf = Buffer.from(svgContent.trim());

  // 1. Save crisp scalable SVG
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent.trim());
  console.log(`✅ Saved: ${svgPath}`);

  // 2. Generate standard resolutions
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 }, // Explicitly recommended by Google Search
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'apple-touch-icon.png', size: 180 }, // iOS home screen
    { name: 'icon-192x192.png', size: 192 }, // Android PWA standard
    { name: 'icon-512x512.png', size: 512 }  // High-res PWA splash
  ];

  const generatedPngs = {};
  for (const s of sizes) {
    const outPath = path.join(publicDir, s.name);
    const buf = await sharp(svgBuf).resize(s.size, s.size).png().toBuffer();
    fs.writeFileSync(outPath, buf);
    generatedPngs[s.size] = buf;
    console.log(`✅ Generated: ${s.name} (${s.size}x${s.size}px)`);
  }

  // 3. Generate multi-size binary ICO file (16x16, 32x32, 48x48)
  const icoPath = path.join(publicDir, 'favicon.ico');
  const icoBuffer = buildIco([
    { width: 16, height: 16, buffer: generatedPngs[16] },
    { width: 32, height: 32, buffer: generatedPngs[32] },
    { width: 48, height: 48, buffer: generatedPngs[48] }
  ]);
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`✅ Generated multi-resolution binary favicon.ico (16px, 32px, 48px, ${icoBuffer.length} bytes)`);

  // 4. Generate webmanifest
  const manifest = {
    name: "Fast Track Creator - Monetization Portal",
    short_name: "Fast Track Creator",
    description: "The premier acceleration portal for creators and media investors to bypass the 12-month startup grind.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  };
  const manifestPath = path.join(publicDir, 'site.webmanifest');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Saved: site.webmanifest`);
}

main().catch(err => {
  console.error('❌ Failed to generate favicons:', err);
  process.exit(1);
});
