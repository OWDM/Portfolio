import en from './translations/en.json';
import ar from './translations/ar.json';

export const languages = {
  en: 'English',
  ar: 'العربية',
};

export const defaultLang = 'en';

export const translations = {
  en,
  ar,
} as const;

export type Language = keyof typeof translations;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (currentLang === defaultLang) {
    return path;
  }

  return path;
}

export function getRelativeLocaleUrl(lang: Language, path: string = ''): string {
  if (lang === defaultLang) {
    return `/${path}`;
  }
  return `/${lang}/${path}`;
}
