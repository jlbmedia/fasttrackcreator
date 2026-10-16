export interface AffiliateProgram {
  id: string;
  name: string;
  tagline: string;
  vendor: string;
  targetUrl: string;
  vanityPath: string; // e.g. /go/fameswap
  category: 'turnkey-assets' | 'virtual-creators' | 'creator-commerce' | 'video-automation';
  payoutModel: 'high-ticket' | 'recurring-mrr' | 'escrow-cut' | 'creator-cut' | 'hybrid-revshare';
  payoutBadge: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  primaryCtaText: string;
  keyBenefits: string[];
  bestForAudience: string;
}

export const AFFILIATE_PROGRAMS: Record<string, AffiliateProgram> = {
  // 1. Fameswap
  'fameswap': {
    id: 'fameswap',
    name: 'Fameswap Account Marketplace',
    tagline: 'World\'s largest verified marketplace for YouTube, TikTok, and Instagram accounts.',
    vendor: 'Fameswap LLC',
    targetUrl: 'https://fameswap.com/?ref=1514192',
    vanityPath: '/go/fameswap',
    category: 'turnkey-assets',
    payoutModel: 'escrow-cut',
    payoutBadge: '20% Lifetime Escrow + 30% VIP Fee',
    rating: 4.8,
    reviewCount: 3120,
    startingPrice: '$100 - $10,000+',
    primaryCtaText: 'Browse Verified Accounts on Fameswap →',
    keyBenefits: [
      'Comprehensive escrow buyer protection',
      'Verified audience analytics & engagement audit',
      'Safe transfer assistance for YouTube, IG & TikTok',
      'Instant access to established social distribution'
    ],
    bestForAudience: 'Growth hackers, agencies, and operators acquiring established audiences'
  },
  'fameswap-youtube': {
    id: 'fameswap-youtube',
    name: 'Fameswap Monetized YouTube Accounts',
    tagline: 'Acquire established YouTube channels with active subscriber bases and watch time.',
    vendor: 'Fameswap LLC',
    targetUrl: 'https://fameswap.com/browse-youtube-accounts-for-sale?ref=1514192',
    vanityPath: '/go/fameswap-youtube',
    category: 'turnkey-assets',
    payoutModel: 'escrow-cut',
    payoutBadge: '20% Lifetime Escrow Fees',
    rating: 4.9,
    reviewCount: 1840,
    startingPrice: '$250+',
    primaryCtaText: 'View YouTube Channels for Sale →',
    keyBenefits: [
      'Skip 4,000 watch-hour threshold delays',
      'Established niche authority and viewer history',
      'Google Brand Account secure handover',
      'Zero risk of phantom subscriber drops'
    ],
    bestForAudience: 'Video entrepreneurs seeking immediate YouTube algorithmic trust'
  },
  'fameswap-tiktok': {
    id: 'fameswap-tiktok',
    name: 'Fameswap Aged TikTok Accounts',
    tagline: 'Purchase aged, algorithmically warm TikTok accounts ready for live streaming & commerce.',
    vendor: 'Fameswap LLC',
    targetUrl: 'https://fameswap.com/browse-tiktok-accounts-for-sale?ref=1514192',
    vanityPath: '/go/fameswap-tiktok',
    category: 'turnkey-assets',
    payoutModel: 'escrow-cut',
    payoutBadge: '20% Lifetime Escrow Fees',
    rating: 4.8,
    reviewCount: 2190,
    startingPrice: '$150+',
    primaryCtaText: 'Browse TikTok Accounts for Sale →',
    keyBenefits: [
      'Pre-approved for TikTok Shop & Live Studio',
      'Targeted geographical follower bases (US/UK)',
      'Escrow inspection period before fund release',
      'Clean account history with zero strike flags'
    ],
    bestForAudience: 'E-commerce dropshippers and TikTok Shop affiliate marketers'
  },
  'fameswap-instagram': {
    id: 'fameswap-instagram',
    name: 'Fameswap Established Instagram Pages',
    tagline: 'Acquire theme pages and niche Instagram accounts with organic reach.',
    vendor: 'Fameswap LLC',
    targetUrl: 'https://fameswap.com/browse-instagram-accounts-for-sale?ref=1514192',
    vanityPath: '/go/fameswap-instagram',
    category: 'turnkey-assets',
    payoutModel: 'escrow-cut',
    payoutBadge: '20% Lifetime Escrow Fees',
    rating: 4.7,
    reviewCount: 1450,
    startingPrice: '$120+',
    primaryCtaText: 'Explore Instagram Accounts for Sale →',
    keyBenefits: [
      'High-engagement niche theme pages',
      'Warm DM outreach capability for agencies',
      'Established explore page algorithmic authority',
      'Original email and login credential handover'
    ],
    bestForAudience: 'Theme page flippers, digital coaches, and affiliate promoters'
  },

  // 2. DFY Dave (Soldi.ai)
  'dfy-dave': {
    id: 'dfy-dave',
    name: 'DFY Dave Turnkey Media Assets',
    tagline: 'Dave Nick\'s premier catalog of pre-monetized YouTube channels and content systems.',
    vendor: 'Soldi.ai / Dave Nick',
    targetUrl: 'https://www.dfydave.com/?p=B63B41B5',
    vanityPath: '/go/dfy-dave',
    category: 'turnkey-assets',
    payoutModel: 'high-ticket',
    payoutBadge: '$83.40 – $239.40 per Asset',
    rating: 4.9,
    reviewCount: 2450,
    startingPrice: '$250 - $995',
    primaryCtaText: 'Access DFY Dave Catalog →',
    keyBenefits: [
      'Pre-enrolled in YouTube Partner Program (YPP)',
      'Turnkey Google Brand Account transfer within 48h',
      'Packaged with production-ready faceless videos',
      'Complete onboarding and AdSense payout guide'
    ],
    bestForAudience: 'Passive digital media investors and faceless automation operators'
  },
  'dfy-youtube': {
    id: 'dfy-youtube',
    name: 'DFY Dave Monetized YouTube Channel',
    tagline: 'Turnkey YouTube channel pre-enrolled in YPP with AdSense active on Day 1.',
    vendor: 'Soldi.ai / Dave Nick',
    targetUrl: 'https://dfydave.com/monetization?p=B63B41B5',
    vanityPath: '/go/dfy-youtube',
    category: 'turnkey-assets',
    payoutModel: 'high-ticket',
    payoutBadge: '$139.00 Bounty per Channel',
    rating: 4.9,
    reviewCount: 1980,
    startingPrice: '$695.00',
    primaryCtaText: 'Claim Pre-Monetized YouTube Channel →',
    keyBenefits: [
      'Bypasses 1,000 subscribers and 4,000 watch hours',
      'Instant AdSense revenue eligibility from upload #1',
      '100% compliant organic threshold fulfillment',
      'Includes 1-on-1 account transfer specialist'
    ],
    bestForAudience: 'Creators and investors who refuse to waste 9 months waiting for AdSense'
  },
  'dfy-tiktok': {
    id: 'dfy-tiktok',
    name: 'DFY Dave Monetized TikTok Account',
    tagline: 'Pre-qualified US/UK TikTok accounts enrolled in the Creator Rewards Program.',
    vendor: 'Soldi.ai / Dave Nick',
    targetUrl: 'https://www.dfydave.com/tiktok-monetization?p=B63B41B5',
    vanityPath: '/go/dfy-tiktok',
    category: 'turnkey-assets',
    payoutModel: 'high-ticket',
    payoutBadge: '$159.00 Bounty per Account',
    rating: 4.8,
    reviewCount: 1620,
    startingPrice: '$795.00',
    primaryCtaText: 'Claim Monetized TikTok Account →',
    keyBenefits: [
      'Pre-enrolled in US Creator Rewards Program ($1+ RPM)',
      '10,000+ organic follower foundation verified',
      'Zero identity-lock or regional restriction issues',
      'Ready for instant video upload & payout scaling'
    ],
    bestForAudience: 'Viral clip creators and international operators targeting high US RPMs'
  },
  'dfy-amazon': {
    id: 'dfy-amazon',
    name: 'DFY Dave Amazon Affiliate Website',
    tagline: 'Turnkey affiliate blog loaded with high-ranking buyer guides and product reviews.',
    vendor: 'Soldi.ai / Dave Nick',
    targetUrl: 'https://www.dfydave.com/amazon-affiliate-website?p=B63B41B5',
    vanityPath: '/go/dfy-amazon',
    category: 'turnkey-assets',
    payoutModel: 'high-ticket',
    payoutBadge: '$199.00 Bounty per Site',
    rating: 4.7,
    reviewCount: 890,
    startingPrice: '$995.00',
    primaryCtaText: 'Deploy Turnkey Amazon Affiliate Site →',
    keyBenefits: [
      '50+ pre-written SEO commercial buyer guides',
      'High-converting comparison tables and product carousels',
      'Integrated Amazon Associates API & tracking',
      'Turnkey WordPress setup with premium theme licenses'
    ],
    bestForAudience: 'Passive SEO publishers looking for hands-off e-commerce commission cash flow'
  },
  'dfy-videos': {
    id: 'dfy-videos',
    name: 'DFY Dave Done-For-You YouTube Videos',
    tagline: 'Professional script-to-screen video production packs (10, 20, or 30 long-form videos).',
    vendor: 'Soldi.ai / Dave Nick',
    targetUrl: 'https://buy.dfydave.com/dfy-10-long-form-youtube-videos?p=B63B41B5',
    vanityPath: '/go/dfy-videos',
    category: 'turnkey-assets',
    payoutModel: 'high-ticket',
    payoutBadge: '$50.00 – $150.00 Bounty per Pack',
    rating: 4.8,
    reviewCount: 1140,
    startingPrice: '$250 - $650',
    primaryCtaText: 'Order DFY YouTube Video Pack →',
    keyBenefits: [
      'Turnkey voiceover, scriptwriting & motion editing',
      'High CTR clickable thumbnail package included',
      'Tailored to high-RPM finance, tech, and luxury niches',
      'Ready to upload immediately with SEO titles & tags'
    ],
    bestForAudience: 'Faceless channel operators needing rapid content delivery without editing'
  },

  // 3. Room30 (FirstPromoter)
  'room30': {
    id: 'room30',
    name: 'Room30 AI Influencer Portfolio',
    tagline: 'Deploy photorealistic AI influencer models and automated video content in 24 hours.',
    vendor: 'Room30.ai / Gregory Cooke',
    targetUrl: 'https://room30.ai/offer?fpr=joseph65',
    vanityPath: '/go/room30',
    category: 'virtual-creators',
    payoutModel: 'high-ticket',
    payoutBadge: '$87.50 Upfront Bounty (50%)',
    rating: 4.9,
    reviewCount: 1420,
    startingPrice: '$175.00',
    primaryCtaText: 'Deploy Room30 AI System in 24h →',
    keyBenefits: [
      'Photorealistic virtual persona creation in 24 hours',
      'Zero camera filming or physical influencer fees',
      'Multi-platform syndication across IG, TikTok & Fanvue',
      'Complete prompt, LoRA, and video generation blueprints'
    ],
    bestForAudience: 'Creators and agencies launching faceless virtual influencer businesses'
  },
  'room30-dfy': {
    id: 'room30-dfy',
    name: 'Room30 Done-For-You Pre-Made Business',
    tagline: '100% turnkey AI creator business with 10k followers and 90-day content pipeline.',
    vendor: 'Room30.ai / Gregory Cooke',
    targetUrl: 'https://room30.ai/dfy-ai-influencer?fpr=joseph65',
    vanityPath: '/go/room30-dfy',
    category: 'virtual-creators',
    payoutModel: 'high-ticket',
    payoutBadge: '$1,000+ High-Ticket Bounty',
    rating: 4.9,
    reviewCount: 380,
    startingPrice: '$4,997.00',
    primaryCtaText: 'Claim 100% Turnkey AI Creator Business →',
    keyBenefits: [
      'Fully trained custom AI persona with proprietary LoRA',
      '10,000 real followers grown organically by Room30 team',
      '90 pieces of scheduled high-definition video content',
      'Turnkey Fanvue and Brand partnership monetization backend'
    ],
    bestForAudience: 'High-net-worth investors seeking automated media asset cash flow'
  },
  'room30-vip': {
    id: 'room30-vip',
    name: 'Room30 Three Days With Greg Immersion',
    tagline: 'Private 1-on-1 founder immersion to architect an eight-figure virtual media holding company.',
    vendor: 'Room30.ai / Gregory Cooke',
    targetUrl: 'https://room30.ai/three-days-with-greg?fpr=joseph65',
    vanityPath: '/go/room30-vip',
    category: 'virtual-creators',
    payoutModel: 'high-ticket',
    payoutBadge: 'VIP Partner Allocation',
    rating: 5.0,
    reviewCount: 12,
    startingPrice: '$100,000.00',
    primaryCtaText: 'Apply for Private Founder Immersion →',
    keyBenefits: [
      '3 full days in-person with Gregory Cooke',
      'Architect full multi-model AI agency infrastructure',
      'Direct introductions to private media holding funds',
      'Strictly capped at 4 private clients per calendar year'
    ],
    bestForAudience: 'C-suite executives, private equity partners, and agency holding groups'
  },

  // 4. Skool
  'skool': {
    id: 'skool',
    name: 'Skool Community & Course Platform',
    tagline: 'The #1 platform for paid creator communities, gamified courses, and recurring MRR.',
    vendor: 'Skool Inc. / Sam Ovens',
    targetUrl: 'https://www.skool.com/signup?ref=f5c036bfb1ee414b80732fbee6b19ccd',
    vanityPath: '/go/skool',
    category: 'creator-commerce',
    payoutModel: 'recurring-mrr',
    payoutBadge: '40% Lifetime Recurring MRR (~$39.60/mo)',
    rating: 4.9,
    reviewCount: 5200,
    startingPrice: '$99.00 / month',
    primaryCtaText: 'Launch Your Skool Community in 14 Days →',
    keyBenefits: [
      '40% lifetime recurring monthly commission for every referral',
      'Gamification engines that boost member retention by 300%',
      'Single-click billing with zero merchant setup hassle',
      'Built-in creator discovery directory and mobile app'
    ],
    bestForAudience: 'Creators, coaches, and faceless brand operators building recurring subscription cash flow'
  },

  // 5. Fanvue
  'fanvue': {
    id: 'fanvue',
    name: 'Fanvue Creator Subscription Platform',
    tagline: 'The AI-friendly creator subscription network paying 20%–50% referral share.',
    vendor: 'Fanvue Ltd',
    targetUrl: 'https://www.fanvue.com/signup?referral=FV-YQ6P77',
    vanityPath: '/go/fanvue',
    category: 'virtual-creators',
    payoutModel: 'creator-cut',
    payoutBadge: '20% – 50% Creator Revenue Share',
    rating: 4.8,
    reviewCount: 4100,
    startingPrice: 'Free to Launch',
    primaryCtaText: 'Launch on Fanvue & Monetize Virtual Models →',
    keyBenefits: [
      '100% friendly and supportive to AI influencers & virtual models',
      'Automated pay-per-view (PPV) messaging and sub tiers',
      'Built-in AI voice note and instant video message engine',
      'Fast global payouts via crypto, bank transfer, and card'
    ],
    bestForAudience: 'Virtual creators, AI model operators, and subscription managers'
  },

  // 6. Beacons
  'beacons': {
    id: 'beacons',
    name: 'Beacons.ai Creator Storefront',
    tagline: 'All-in-one link-in-bio storefront, digital product sales, and media kit platform.',
    vendor: 'Beacons.ai',
    targetUrl: 'https://beacons.ai/signup?c=jlbmedia',
    vanityPath: '/go/beacons',
    category: 'creator-commerce',
    payoutModel: 'recurring-mrr',
    payoutBadge: '30% Lifetime Recurring MRR',
    rating: 4.8,
    reviewCount: 8900,
    startingPrice: 'Free Tier Available',
    primaryCtaText: 'Build Your Free Beacons Store in 5 Mins →',
    keyBenefits: [
      'Generous free plan with zero monthly subscription barrier',
      'Sell digital guides, templates, and 1:1 calls with 0 followers',
      'Automated media kit and brand deal invoicing tools',
      'Direct, zero-cost alternative to Stan Store\'s $29/mo fee'
    ],
    bestForAudience: 'TikTok, Reels, and Shorts creators monetizing audiences under 1,000 followers'
  },

  // 7. Fiverr (Marketplace, Automation, AI & Logo)
  'fiverr': {
    id: 'fiverr',
    name: 'Fiverr Creator Marketplace',
    tagline: 'Global freelance talent marketplace for video editing, scriptwriting, voiceover, and creator branding.',
    vendor: 'Fiverr International Ltd.',
    targetUrl: 'https://go.fiverr.com/visit/?bta=843111&brand=fiverrmarketplace',
    vanityPath: '/go/fiverr',
    category: 'video-automation',
    payoutModel: 'hybrid-revshare',
    payoutBadge: '25% FTB CPA + 10% Ongoing Revshare',
    rating: 4.8,
    reviewCount: 14500,
    startingPrice: '$15 - $250 / Project',
    primaryCtaText: 'Hire Verified Creator Talent on Fiverr →',
    keyBenefits: [
      'Comprehensive buyer escrow protection (funds released only upon delivery approval)',
      'Global pool of specialized YouTube video editors, scriptwriters, and voiceover artists',
      'Flexible pay-as-you-go production without high-friction agency retainers',
      'Rapid 24-48 hour turnarounds on short-form Reels, TikToks, and YouTube Shorts'
    ],
    bestForAudience: 'Faceless channel operators, lean content creators, and automation builders'
  },
  'fiverr-automation': {
    id: 'fiverr-automation',
    name: 'Fiverr YouTube Automation Teams',
    tagline: 'Hire modular scriptwriting, voiceover, and video editing teams for faceless cash cow channels.',
    vendor: 'Fiverr International Ltd.',
    targetUrl: 'https://go.fiverr.com/visit/?bta=843111&brand=fiverrmarketplace&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fsearch%2Fgigs%3Fquery%3Dyoutube%2Bautomation',
    vanityPath: '/go/fiverr-automation',
    category: 'turnkey-assets',
    payoutModel: 'hybrid-revshare',
    payoutBadge: '25% FTB CPA + 10% Ongoing Revshare',
    rating: 4.7,
    reviewCount: 6800,
    startingPrice: '$25 / Video',
    primaryCtaText: 'Browse YouTube Automation Gigs on Fiverr →',
    keyBenefits: [
      'Complete end-to-end script-to-screen video production packages',
      'Fraction of the upfront barrier of $5,000+ managed agency channel builds',
      'Audited seller ratings, verifiable video portfolios, and structured milestone deliveries',
      'Predictable recurring video batches to maintain continuous upload cadence'
    ],
    bestForAudience: 'YouTube channel investors, cash cow operators, and media buyers scaling channel fleets'
  },
  'fiverr-ai': {
    id: 'fiverr-ai',
    name: 'Fiverr AI Influencer & Model Creation',
    tagline: 'Hire custom Stable Diffusion, LoRA, and character consistency creators for virtual influencer brands.',
    vendor: 'Fiverr International Ltd.',
    targetUrl: 'https://go.fiverr.com/visit/?bta=843111&brand=fiverrmarketplace&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fsearch%2Fgigs%3Fquery%3Dai%2Binfluencer',
    vanityPath: '/go/fiverr-ai',
    category: 'virtual-creators',
    payoutModel: 'hybrid-revshare',
    payoutBadge: '25% FTB CPA + 10% Ongoing Revshare',
    rating: 4.8,
    reviewCount: 4200,
    startingPrice: '$35 / Model',
    primaryCtaText: 'Hire AI Character Specialists on Fiverr →',
    keyBenefits: [
      'Custom LoRA checkpoint training for 100% facial and physical consistency',
      'Production-ready photo batches for Instagram, TikTok, and Fanvue subscriber monetization',
      'Talking avatar animations, voice cloning, and dynamic lip-sync pipeline setups',
      'Fast 24-72 hour delivery with full commercial licensing and original generation files'
    ],
    bestForAudience: 'Virtual influencer operators, Fanvue agency managers, and digital model creators'
  },
  'fiverr-logo': {
    id: 'fiverr-logo',
    name: 'Fiverr Logo Maker & Branding Studio',
    tagline: 'Instant AI-generated, designer-customized logos and brand kits for creator storefronts and channels.',
    vendor: 'Fiverr International Ltd.',
    targetUrl: 'https://go.fiverr.com/visit/?bta=843111&brand=logomaker',
    vanityPath: '/go/fiverr-logo',
    category: 'creator-commerce',
    payoutModel: 'hybrid-revshare',
    payoutBadge: '$30 Fixed CPA + 10% Revshare',
    rating: 4.9,
    reviewCount: 19200,
    startingPrice: '$30 Instant Download',
    primaryCtaText: 'Design Your Channel Logo in 60 Seconds →',
    keyBenefits: [
      'Advanced generator powered by top professional agency typography and iconography',
      'Instant vector SVG, transparent PNG, and pre-formatted social media exports',
      'Full commercial ownership rights for YouTube banners, Beacons stores, and merch',
      'Optional one-click human designer revisions for pixel-perfect brand customization'
    ],
    bestForAudience: 'New creators launching Beacons storefronts, Skool communities, and YouTube channels'
  }
};

export function getAffiliate(id: string): AffiliateProgram | undefined {
  return AFFILIATE_PROGRAMS[id];
}

export function getAllAffiliates(): AffiliateProgram[] {
  return Object.values(AFFILIATE_PROGRAMS);
}

export function getAffiliatesByCategory(cat: AffiliateProgram['category']): AffiliateProgram[] {
  return Object.values(AFFILIATE_PROGRAMS).filter(p => p.category === cat);
}
