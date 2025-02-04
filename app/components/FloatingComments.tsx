"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useLanguage } from "../contexts/LanguageContext"
import { Star, Shield, Heart, Award } from "lucide-react"

interface Comment {
  id: number
  text: {
    en: string
    fr: string
    ar: string
  }
  position: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  mobilePosition: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  delay: number
  icon: React.ReactNode
}

const comments: Comment[] = [
  {
    id: 1,
    text: {
      en: "Expert Dermatologist",
      fr: "Dermatologue Expert",
      ar: "طبيبة جلدية متخصصة",
    },
    position: { bottom: "5%", left: "5%" },
    mobilePosition: { bottom: "5%", left: "5%" },
    delay: 0,
    icon: <Star className="w-4 h-4 mr-1" />,
  },
  {
    id: 2,
    text: {
      en: "Advanced Skincare",
      fr: "Soins Avancés",
      ar: "عناية متقدمة بالبشرة",
    },
    position: { bottom: "25%", right: "5%" },
    mobilePosition: { top: "5%", right: "5%" },
    delay: 500,
    icon: <Shield className="w-4 h-4 mr-1" />,
  },
  {
    id: 3,
    text: {
      en: "Personalized Treatment",
      fr: "Traitement Personnalisé",
      ar: "علاج مخصص",
    },
    position: { top: "25%", left: "5%" },
    mobilePosition: { bottom: "25%", left: "5%" },
    delay: 1000,
    icon: <Heart className="w-4 h-4 mr-1" />,
  },
  {
    id: 4,
    text: {
      en: "Years of Experience",
      fr: "Années d'Expérience",
      ar: "سنوات من الخبرة",
    },
    position: { top: "5%", left: "5%" },
    mobilePosition: { top: "5%", left: "5%" },
    delay: 1500,
    icon: <Award className="w-4 h-4 mr-1" />,
  },
]

export function FloatingComments() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      {comments.map((comment) => (
        <Badge
          key={comment.id}
          variant="secondary"
          className={cn(
            "absolute whitespace-nowrap backdrop-blur-sm bg-white/90 shadow-lg transition-all duration-1000 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0",
            "animate-float flex items-center",
            "text-xs px-2 py-1 md:text-sm md:px-3 md:py-2",
            "max-w-[45%] md:max-w-[40%] overflow-hidden text-ellipsis",
          )}
          style={{
            ...(isMobile ? comment.mobilePosition : comment.position),
            animationDelay: `${comment.delay}ms`,
          }}
        >
          {comment.icon}
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {comment.text[language as keyof typeof comment.text]}
          </span>
        </Badge>
      ))}
    </>
  )
}

