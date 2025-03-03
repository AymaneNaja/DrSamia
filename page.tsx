"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react"
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext"
import { translations } from "./utils/translations"
import { LanguageSwitcher } from "./components/LanguageSwitcher"
import { ConsultationModal } from "./components/ConsultationModal"
import { FloatingComments } from "./components/FloatingComments"

function Page() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (href && href.startsWith("#")) {
        const targetId = href.substring(1)
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
          behavior: "smooth",
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className={`min-h-screen bg-white ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 blur-3xl animate-slow-spin opacity-70" />
        <div className="absolute -bottom-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 blur-3xl animate-reverse-slow-spin opacity-70" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
            Dr. Naja
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.about}
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.services}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.contact}
            </a>
            <ConsultationModal />
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 order-2 md:order-1">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" />
              <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                {t.hero.expertDermatologist}
              </span>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{t.hero.title}</h1>
              <p className="mt-6 text-gray-600 animate-fade-in-up max-w-xl text-lg">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ConsultationModal />
                <Button variant="outline" className="group">
                  {t.nav.about}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2 mb-8 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl animate-gradient" />
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 rounded-2xl backdrop-blur-sm" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1737926882909-6eroJT09i1TLOsyMYNTCC4cCBhYahx.png"
                    alt="Dr. Samia Naja"
                    className="object-cover object-center w-full h-full transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0">
                    <FloatingComments />
                  </div>
                </div>
                <blockquote className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-xl text-center transform hover:-translate-y-1 transition-all duration-300">
                  <p className="text-gray-600 italic text-sm">{t.hero.quote}</p>
                  <footer className="mt-2 font-medium text-blue-900">Dr. Samia Naja</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Successful Treatments",
                value: "1,200+",
                description: "Transforming skin health with expertise",
              },
              {
                label: "Patient Satisfaction",
                value: "99%",
                description: "Committed to exceptional care",
              },
              {
                label: "On-Time Consultations",
                value: "99%",
                description: "Respecting your time",
              },
              {
                label: "Skin Care Plans",
                value: "500+",
                description: "Personalized treatment solutions",
              },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <h3 className="text-gray-600 text-sm">{stat.label}</h3>
                <p className="mt-2 text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50/30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed animate-fade-in">{t.about.description}</p>
            <blockquote className="mt-6 border-l-4 border-blue-900 pl-4 italic text-gray-600">
              {t.about.quote}
            </blockquote>
            <div className="mt-6 grid gap-4">
              <div className="group hover:translate-x-2 transition-transform">
                <h3 className="font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  {t.about.location}
                </h3>
                <p className="text-gray-600">Casablanca, Morocco</p>
              </div>
              <div className="group hover:translate-x-2 transition-transform">
                <h3 className="font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  {t.about.education}
                </h3>
                <p className="text-gray-600">M.D. Université Cheikh Anta Diop de Dakar – Dakar, Senegal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">{t.services.description}</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Persistent Acne",
                description: "Recurring breakouts that don't respond to over-the-counter treatments",
              },
              {
                title: "Skin Changes",
                description: "Unusual moles, growths, or changes in existing skin marks",
              },
              {
                title: "Chronic Conditions",
                description: "Eczema, psoriasis, or other persistent skin conditions",
              },
              {
                title: "Aging Concerns",
                description: "Fine lines, wrinkles, and age-related skin changes",
              },
              {
                title: "Pigmentation Issues",
                description: "Dark spots, melasma, or uneven skin tone",
              },
              {
                title: "Scarring",
                description: "Acne scars, surgical scars, or other skin texture concerns",
              },
            ].map((condition) => (
              <Card
                key={condition.title}
                className="p-6 group hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-lg">{condition.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{condition.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 group-hover:text-blue-700">
                  {t.nav.services}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 animate-gradient" />
        <div className="max-w-3xl mx-auto relative text-center text-white">
          <h2 className="text-3xl font-bold">{t.cta.title}</h2>
          <p className="mt-4">{t.cta.description}</p>
          <ConsultationModal />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        <div className="max-w-3xl mx-auto relative">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-gray-600">{t.contact.description}</p>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-600">dr.samianaja@email.com</p>
                <p className="text-sm text-gray-600">+212 (0) 5 22 XX XX XX</p>
              </div>
            </div>
          </div>
          <form className="mt-8 grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder={t.contact.fullName} className="bg-white/80 backdrop-blur-sm" />
              <Input type="email" placeholder={t.contact.email} className="bg-white/80 backdrop-blur-sm" />
            </div>
            <Input placeholder={t.contact.phone} className="bg-white/80 backdrop-blur-sm" />
            <Input placeholder={t.contact.subject} className="bg-white/80 backdrop-blur-sm" />
            <Textarea placeholder={t.contact.message} className="min-h-[120px] bg-white/80 backdrop-blur-sm" />
            <div className="flex items-center gap-2">
              <Checkbox id="privacy" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                {t.contact.privacyPolicy}
              </label>
            </div>
            <Button className="w-full md:w-auto group">
              {t.contact.submit}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="text-xl font-semibold text-white">Dr. Samia Naja</div>
            <nav className="mt-4 flex justify-center gap-6 text-sm">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>
            <div className="mt-4 text-sm text-gray-400">{t.footer.copyright}</div>
            <div className="mt-2 text-sm text-gray-500">Developed by Aymane Naja</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function WrappedPage() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}

