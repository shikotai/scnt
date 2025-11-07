export type Lang = "ru" | "en" | "kk";

export interface TranslationMap {
  [key: string]: string | TranslationMap | string[] | Record<string, any>;
}

export interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string | string[] | Record<string, any>;
}
