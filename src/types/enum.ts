export const enum BasicStatus {
  DISABLE = 0,
  ENABLE = 1,
}

export const enum ResultStatus {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}

export const enum StorageEnum {
  UserInfo = "userInfo",
  UserToken = "userToken",
  Settings = "settings",
  I18N = "i18nextLng",
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export const enum ThemeLayout {
  Vertical = "vertical",
  Horizontal = "horizontal",
  Mini = "mini",
}

export enum ThemeColorPresets {
  Default = "default",
  Cyan = "cyan",
  Purple = "purple",
  Blue = "blue",
  Orange = "orange",
  Red = "red",
}

export const enum LocalEnum {
  en_US = "en_US",
  zh_CN = "zh_CN",
}

export const enum MultiTabOperation {
  FULLSCREEN = "fullscreen",
  REFRESH = "refresh",
  CLOSE = "close",
  CLOSEOTHERS = "closeOthers",
  CLOSEALL = "closeAll",
  CLOSELEFT = "closeLeft",
  CLOSERIGHT = "closeRight",
}

export const enum PermissionType {
  GROUP = 0,
  CATALOGUE = 1,
  MENU = 2,
  COMPONENT = 3,
}

export const enum HtmlDataAttribute {
  ColorPalette = "data-color-palette",
  ThemeMode = "data-theme-mode",
}
