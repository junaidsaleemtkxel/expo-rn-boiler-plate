import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import enUs from "@/localization/translation/enUS.json";
import sp from "@/localization/translation/sp.json";

// Set the key-value pairs for the different languages you want to support.
const translations = {
  enUS: enUs,
  sp: sp,
};

// Initialize i18n with the translations
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? "enUS";

// Enable fallback when a translation is missing
i18n.enableFallback = true;

export default i18n;
