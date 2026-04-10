import { useTranslation } from "react-i18next";
import "dayjs/locale/zh-cn";
import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import type { Locale as AntdLocal } from "antd/es/locale";
import { LocalEnum } from "@/types/enum";

type Locale = keyof typeof LocalEnum;
type Language = {
  locale: keyof typeof LocalEnum;
  icon: string;
  label: string;
  antdLocale: AntdLocal;
};

export const LANGUAGE_MAP: Record<Locale, Language> = {
  [LocalEnum.en_US]: {
    locale: LocalEnum.en_US,
    icon: "flag-us",
    label: "English",
    antdLocale: en_US,
  },
  [LocalEnum.zh_CN]: {
    locale: LocalEnum.zh_CN,
    icon: "flag-cn",
    label: "Chinese",
    antdLocale: zh_CN,
  },
};

export default function useLocale() {
  const { t, i18n } = useTranslation();
  const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale;
  const language = LANGUAGE_MAP[locale];

  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
    dayjs.locale(locale);
  };

  return {
    t,
    locale,
    language,
    setLocale,
  };
}
