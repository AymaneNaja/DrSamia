"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const languages = {
  en: {
    name: "English",
    flag: "🇬🇧",
    dir: "ltr",
  },
  fr: {
    name: "Français",
    flag: "🇫🇷",
    dir: "ltr",
  },
  ar: {
    name: "العربية",
    flag: "🇲🇦",
    dir: "rtl",
  },
}

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as "en" | "fr" | "ar")}
            className={`flex items-center gap-2 ${language === code ? "bg-accent" : ""}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className={language === "ar" && code === "ar" ? "font-arabic" : ""}>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

