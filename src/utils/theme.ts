import color from "color";
import { type AddChannelToLeaf } from "@/theme/type";

/**
 * @example
 * const rgb = rgbAlpha("#000000", 0.24);
 * console.log(rgb); // "rgba(0, 0, 0, 0.24)"
 *
 * const rgb = rgbAlpha("var(--colors-palette-primary-main)", 0.24);
 * console.log(rgb); // "rgba(var(--colors-palette-primary-main) / 0.24)"
 *
 * const rgb = rgbAlpha("rgb(var(--colors-palette-primary-main))", 0.24);
 * console.log(rgb); // "rgba(rgb(var(--colors-palette-primary-main)) / 0.24)"
 *
 * const rgb = rgbAlpha([200, 250, 214], 0.24);
 * console.log(rgb); // "rgba(200, 250, 214, 0.24)"
 *
 * const rgb = rgbAlpha("200 250 214", 0.24);
 * console.log(rgb); // "rgba(200, 250, 214, 0.24)"
 */
export function rgbAlpha(colorVal: string | string[] | number[], alpha: number): string {
  // ensure alpha value is between 0-1
  const safeAlpha = Math.max(0, Math.min(1, alpha));

  // if color is CSS variable
  if (typeof colorVal === "string") {
    if (colorVal.startsWith("#")) {
      return color(colorVal).alpha(safeAlpha).toString();
    }
    if (colorVal.includes("var(")) {
      return `rgba(${colorVal} / ${safeAlpha})`;
    }
    if (colorVal.startsWith("--")) {
      return `rgba(var(${colorVal}) / ${safeAlpha})`;
    }

    // handle "200, 250, 214" or "200 250 214" format
    if (colorVal.includes(",") || colorVal.includes(" ")) {
      const rgb = colorVal
        .split(/[,\s]+/)
        .map((n) => n.trim())
        .filter(Boolean);
      return `rgba(${rgb.join(", ")}, ${safeAlpha})`;
    }
  }

  // handle array format [200, 250, 214]
  if (Array.isArray(colorVal)) {
    return `rgba(${colorVal.join(", ")}, ${safeAlpha})`;
  }

  throw new Error("Invalid color format");
}

/**
 * add color channels to the color tokens {@link themeTokens}
 * @param obj example: `{ palette: { primary: "#000000" } }`
 * @returns example: `{ palette: { primary: "#000000", primaryChannel: "0, 0, 0" } }`
 */
export const addColorChannels = <T extends Record<string, any>>(obj: T): AddChannelToLeaf<T> => {
  const result: Record<string, any> = {};

  // check if the object is a leaf object
  const isLeafObject = Object.values(obj).every((v) => v === null || typeof v === "string");

  if (isLeafObject) {
    // add channel to the leaf object
    for (const [key, value] of Object.entries(obj)) {
      result[key] = value;
      result[`${key}Channel`] = color(value).rgb().array().join(" ");
    }
  } else {
    // recursively process non-leaf objects
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        result[key] = addColorChannels(value);
      } else {
        result[key] = value;
      }
    }
  }

  return result as AddChannelToLeaf<T>;
};
