// import { getStringItem } from "@/utils/storage";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { LocalEnum } from "@/types/enum";
import en_US from "./lang/en_US";
import zh_CN from "./lang/zh_CN";

// const defaultLang = getStringItem(StorageEnum.I18N) || (LocalEnum.en_US as string);
const defaultLang = LocalEnum.zh_CN as string;

document.documentElement.lang = defaultLang;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: defaultLang,
    fallbackLng: LocalEnum.en_US,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en_US: { translation: en_US },
      zh_CN: { translation: zh_CN },
    },
  });

export const { t } = i18n;
export default i18n;
