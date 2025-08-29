import React from "react";
import { useLanguage, Language } from "./LanguageContext";

const languageNames: Record<Language, string> = {
  en: "English",
  ar: "Arabic",
  he: "Hebrew",
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label="Select language"
      className="px-3 py-2 mx-4 text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.entries(languageNames).map(([code, name]) => (
        <option
          key={code}
          value={code}
          className="text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100"
        >
          {name}
        </option>
      ))}
    </select>
  );
}
