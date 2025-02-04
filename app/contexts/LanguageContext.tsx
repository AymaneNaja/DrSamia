"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"
import type { Language } from "../utils/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  const setLanguageSafe = (lang: Language) => {
    if (["en", "fr", "ar"].includes(lang)) {
      setLanguage(lang)
    } else {
      console.error(`Invalid language: ${lang}`)
      setLanguage("en") // Fallback to English
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageSafe }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

