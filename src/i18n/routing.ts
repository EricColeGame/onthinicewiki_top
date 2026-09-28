import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const locales = ["en", "ja", "es", "de"] as const;

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
