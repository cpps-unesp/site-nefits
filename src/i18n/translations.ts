import pt from './locales/pt.json';
import en from './locales/en.json';

export const translations = { pt, en };
export const defaultLang = 'pt';

export function useTranslations(lang: string) {
  return function t(path: string) {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) ?? path;
  };
}