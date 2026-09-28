export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "On Thin Ice Wiki",
  shortName: "On Thin Ice",
  logoText: "OTI",
  tagline: "Complete Guides, Tips, Walkthroughs & Mechanics",
  description: "Complete On Thin Ice Wiki covering gameplay guides, beginner tips, mechanics, updates, and important information for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://onthinicewiki.top",
  supportEmail: "support@onthinicewiki.top",
  gameUrl: "https://onthinicewiki.top",
  heroVideoId: "Vr4OXIvRXsw",
  social: {
    discord: "https://discord.gg",
    youtube: "https://www.youtube.com/watch?v=Vr4OXIvRXsw",
  },
  locales: ["en", "ja", "es", "de"],
  defaultLocale: "en",
};
