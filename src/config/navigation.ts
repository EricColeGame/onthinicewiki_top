export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "puzzles", path: "/puzzles", isContentType: true },
  { key: "chapters", path: "/chapters", isContentType: true },
  { key: "game", path: "/game", isContentType: true },
  { key: "reviews", path: "/reviews", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
