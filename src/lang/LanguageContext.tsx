import React, { createContext, useContext, useState } from "react";
import { translations, type Lang } from "./translations";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LangContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("ru");

  const t = (path: string): any => {
  const parts = path.split(".");
  let cur: any = translations[lang];

  for (const p of parts) {
    cur = cur?.[p];
    if (cur === undefined) break;
  }

  if (cur === undefined) {
    let fallback: any = translations["ru"];
    for (const p of parts) {
      fallback = fallback?.[p];
      if (fallback === undefined) break;
    }
    cur = fallback;
  }

  // ✅ allow returning arrays or objects directly (for lists)
  if (Array.isArray(cur) || typeof cur === "object") {
    return cur;
  }

  // ✅ otherwise just return string fallback
  return typeof cur === "string" ? cur : path;
  };


  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};

export {};
