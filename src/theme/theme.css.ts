import { HtmlDataAttribute, ThemeColorPresets, ThemeMode } from "@/types/enum";
import {
  createGlobalTheme,
  createThemeContract,
  assignVars,
  globalStyle,
} from "@vanilla-extract/css";
import { addColorChannels } from "@/utils/theme";
import { baseThemeTokens } from "./tokens/base";
import { darkColorTokens, lightColorTokens, presetsColors } from "./tokens/color";
import { darkShadowTokens, lightShadowTokens } from "./tokens/shadow";
import { typographyTokens } from "./tokens/typography";
import { themeTokens } from "./type";

const getThemeTokens = (theme: ThemeMode) => {
  const themeTokens = theme === ThemeMode.Dark ? darkColorTokens : lightColorTokens;
  return {
    colors: addColorChannels(themeTokens),
    typography: typographyTokens,
    shadows: theme === ThemeMode.Light ? lightShadowTokens : darkShadowTokens,
    ...baseThemeTokens,
  };
};

export const themeVar = createThemeContract({
  ...themeTokens,
  colors: addColorChannels(themeTokens.colors),
});

for (const themeMode of Object.values(ThemeMode)) {
  createGlobalTheme(
    `:root[${HtmlDataAttribute.ThemeMode}=${themeMode}]`,
    themeVar,
    getThemeTokens(themeMode),
  );
}

for (const preset of Object.values(ThemeColorPresets)) {
  globalStyle(`:root[${HtmlDataAttribute.ColorPalette}=${preset}]`, {
    vars: assignVars(themeVar.colors.palette.primary, {
      ...addColorChannels(presetsColors[preset]),
    }),
  });
}
