import { breakpointsTokens } from "@/theme/tokens/breakpoints";
import { removePx } from "@/utils/theme";
import { useEffect, useState, useMemo } from "react";

type MediaQueryConfig = {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  orientation?: "portrait" | "landscape";
  prefersColorScheme?: "light" | "dark";
  prefersReducedMotion?: boolean;
  devicePixelRatio?: number;
  pointerType?: "coarse" | "fine";
};

const buildMediaQuery = (config: MediaQueryConfig | string): string => {
  if (typeof config === "string") return config;

  const conditions: string[] = [];

  if (config.minWidth) conditions.push(`(min-width: ${config.minWidth}px)`);
  if (config.maxWidth) conditions.push(`(max-width: ${config.maxWidth}px)`);
  if (config.minHeight) conditions.push(`(min-height: ${config.minHeight}px)`);
  if (config.maxHeight) conditions.push(`(max-height: ${config.maxHeight}px)`);
  if (config.orientation) conditions.push(`(orientation: ${config.orientation})`);
  if (config.prefersColorScheme)
    conditions.push(`(prefers-color-scheme: ${config.prefersColorScheme})`);
  if (config.prefersReducedMotion) conditions.push("(prefers-reduced-motion: reduce)");
  if (config.devicePixelRatio)
    conditions.push(`(-webkit-min-device-pixel-ratio: ${config.devicePixelRatio})`);
  if (config.pointerType) conditions.push(`(pointer: ${config.pointerType})`);

  return conditions.join(" and ");
};

/**
 * React hook for handling media queries
 *
 * @param config - Media query configuration object or query string
 * @returns boolean - Returns true if the media query matches
 *
 * @example
 * // Basic usage - Mobile detection
 * const isMobile = useMediaQuery({ maxWidth: 768 });
 *
 * @example
 * // Using predefined breakpoints
 * const isDesktop = useMediaQuery(up('lg'));
 *
 * @example
 * // Complex query - Tablet in landscape mode
 * const isTabletLandscape = useMediaQuery({
 *   minWidth: 768,
 *   maxWidth: 1024,
 *   orientation: 'landscape'
 * });
 *
 * @example
 * // User preferences
 * const isDarkMode = useMediaQuery({ prefersColorScheme: 'dark' });
 * const prefersReducedMotion = useMediaQuery({ prefersReducedMotion: true });
 *
 * @example
 * // Device capabilities
 * const isTouchDevice = useMediaQuery({ pointerType: 'coarse' });
 * const isRetina = useMediaQuery({ devicePixelRatio: 2 });
 *
 * @example
 * // Range queries using helpers
 * const isTablet = useMediaQuery(between('sm', 'md'));
 *
 * @example
 * // Raw media query string
 * const isPortrait = useMediaQuery('(orientation: portrait)');
 *
 * @see {@link MediaQueryConfig} for all supported configuration options
 */
export const useMediaQuery = (config: MediaQueryConfig | string) => {
  const mediaQueryString = useMemo(() => buildMediaQuery(config), [config]);
  const [matches, setMatches] = useState<boolean>(() => {
    // 服务端渲染判断（避免 window 不存在报错）
    if (typeof window === "undefined") return false;
    const mediaQuery = window.matchMedia(mediaQueryString);
    return mediaQuery.matches;
  });

  // 将 config 转换为 mediaQuery 字符串

  useEffect(() => {
    // 监听变化
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    const mediaQuery = window.matchMedia(mediaQueryString);

    // 使用新旧两种 API 以确保最大兼容性
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      // 兼容旧版浏览器
      mediaQuery.addListener(handler);
    }

    // 清理函数
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        // 兼容旧版浏览器
        mediaQuery.removeListener(handler);
      }
    };
  }, [mediaQueryString]);

  return matches;
};

type Breakpoints = typeof breakpointsTokens;
type BreakpointsKeys = keyof Breakpoints;

export const up = (key: BreakpointsKeys) => ({
  minWidth: removePx(breakpointsTokens[key]),
});

export const down = (key: BreakpointsKeys) => ({
  maxWidth: removePx(breakpointsTokens[key]) - 0.05,
});

export const between = (start: BreakpointsKeys, end: BreakpointsKeys) => ({
  minWidth: removePx(breakpointsTokens[start]),
  maxWidth: removePx(breakpointsTokens[end]) - 0.05,
});
