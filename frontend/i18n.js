import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "./public/locales/ru.js";
import enTranslation from "./public/locales/en.js";

const resources = {
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
