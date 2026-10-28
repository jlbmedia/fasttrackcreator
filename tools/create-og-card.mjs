import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712" />
      <stop offset="50%" stop-color="#0b1329" />
      <stop offset="100%" stop-color="#02040a" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Subtle glow circles -->
  <circle cx="150" cy="150" r="280" fill="#3b82f6" opacity="0.12" filter="blur(80px)" />
  <circle cx="1050" cy="480" r="320" fill="#10b981" opacity="0.12" filter="blur(90px)" />

  <!-- Outer Border Frame -->
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="#1e293b" stroke-width="2" />

  <!-- Brand Badge Top Left -->
  <g transform="translate(80, 85)">
    <rect width="320" height="42" rx="21" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
    <circle cx="24" cy="21" r="7" fill="#10b981" />
    <text x="42" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#93c5fd" letter-spacing="1.5">FAST TRACK CREATOR</text>
  </g>

  <!-- Year / Verified Badge Top Right -->
  <g transform="translate(890, 85)">
    <rect width="230" height="42" rx="21" fill="#064e3b" fill-opacity="0.6" stroke="#10b981" stroke-width="1.5" />
    <text x="115" y="26" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#6ee7b7" letter-spacing="1">2026 AUTHORITY AUDIT</text>
  </g>

  <!-- Main Headline -->
  <text x="80" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1">
    Bypass the 12-Month Grind.
  </text>
  <text x="80" y="305" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="url(#brandGrad)" letter-spacing="-1">
    Turnkey Cash Flow Architecture.
  </text>

  <!-- Subheadline -->
  <text x="80" y="375" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">
    Pre-monetized media assets, photorealistic virtual creators, 40% recurring MRR,
  </text>
  <text x="80" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">
    and friction-free digital storefronts engineered for immediate creator ROI.
  </text>

  <!-- Feature Pillar Pills -->
  <g transform="translate(80, 480)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="220" height="52" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    <text x="110" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#cbd5e1">⚡ Turnkey Channels</text>

    <!-- Pill 2 -->
    <rect x="240" y="0" width="220" height="52" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    <text x="350" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#cbd5e1">🤖 Virtual AI Personas</text>

    <!-- Pill 3 -->
    <rect x="480" y="0" width="220" height="52" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    <text x="590" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#cbd5e1">💎 40% Lifetime MRR</text>

    <!-- Pill 4 -->
    <rect x="720" y="0" width="240" height="52" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
    <text x="840" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#34d399">✓ fasttrackcreator.com</text>
  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/og-card.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);
  console.log(`✅ Successfully generated 1200x630 OG image at ${outputPath}`);
}

run().catch(console.error);
