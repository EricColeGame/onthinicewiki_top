import type { ComponentType } from "react";
import { BookOpen, Gamepad2, ListOrdered, Puzzle, Star, Video } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: ComponentType<{ className?: string }>;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "puzzles", path: "/puzzles", icon: Puzzle, isContentType: true },
  { key: "chapters", path: "/chapters", icon: ListOrdered, isContentType: true },
  { key: "game", path: "/game", icon: Gamepad2, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "media", path: "/media", icon: Video, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
