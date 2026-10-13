export interface CategoryHub {
  slug: string;
  name: string;
  title: string; // Meaningful Title | Brand Name
  metaDescription: string; // 120-158 chars
  h1: string;
  description: string;
  badge: string;
  featuredAffiliates: string[];
}

export const CATEGORIES: Record<string, CategoryHub> = {
  'turnkey-assets': {
    slug: 'turnkey-assets',
    name: 'Turnkey Media Assets',
    title: 'Turnkey Monetized Channels & Digital Real Estate | Fast Track Creator',
    metaDescription: 'Bypass the 12-month startup grind. Discover verified pre-monetized YouTube channels, aged TikTok accounts, and automated digital media assets.',
    h1: 'Turnkey Media Real Estate & Monetized Channels',
    description: 'Acquire pre-monetized digital real estate with established AdSense and Creator Rewards active on Day 1. Eliminate 4,000 watch-hour delays.',
    badge: 'Day 1 Monetization',
    featuredAffiliates: ['dfy-youtube', 'fameswap', 'dfy-tiktok', 'dfy-videos', 'fameswap-youtube']
  },
  'virtual-creators': {
    slug: 'virtual-creators',
    name: 'Virtual Creators & AI Models',
    title: 'Virtual Creators & AI Influencer Software Systems | Fast Track Creator',
    metaDescription: 'Deploy photorealistic AI influencers and virtual creators in 24 hours. Compare leading AI model generators, LoRA training, and Fanvue backends.',
    h1: 'Virtual Creators & AI Influencer Systems',
    description: 'Explore hands-off virtual creator systems, AI video syndication, and fan monetization platforms with zero filming or camera anxiety.',
    badge: '24-Hour Deployment',
    featuredAffiliates: ['room30', 'fanvue', 'room30-dfy']
  },
  'creator-commerce': {
    slug: 'creator-commerce',
    name: 'Creator Commerce & Communities',
    title: 'Creator Commerce, Link-in-Bio Stores & Communities | Fast Track Creator',
    metaDescription: 'Monetize audiences under 1,000 followers. Compare link-in-bio storefronts, digital downloads, and 40% recurring MRR Skool communities.',
    h1: 'Creator Commerce & Recurring Community Engines',
    description: 'Transform social attention into recurring monthly cash flow with digital product storefronts, coaching funnels, and private subscription masterminds.',
    badge: 'Under 1k Followers',
    featuredAffiliates: ['skool', 'beacons']
  },
  'reviews': {
    slug: 'reviews',
    name: 'Audits & Comparative Reviews',
    title: 'Creator Software Audits & Legitimacy Scorecards | Fast Track Creator',
    metaDescription: 'In-depth evaluations of creator tools and monetization services. Compare DFY Dave, Room30, Skool, Fameswap, and Beacons with verified data.',
    h1: 'Platform Audits, Scorecards & Comparative Reviews',
    description: 'Unbiased, data-driven evaluations of done-for-you monetization platforms, account marketplaces, and creator tools to protect your capital.',
    badge: 'Independent Audits',
    featuredAffiliates: ['dfy-dave', 'room30', 'fameswap', 'skool', 'beacons', 'fanvue']
  }
};

export function getCategory(slug: string): CategoryHub | undefined {
  return CATEGORIES[slug];
}

export function getAllCategories(): CategoryHub[] {
  return Object.values(CATEGORIES);
}
