"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export function ConsultationModal() {
  const [date, setDate] = useState<Date>()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="animate-shimmer bg-[linear-gradient(110deg,#1e3a8a,45%,#4f46e5,55%,#1e3a8a)] bg-[length:200%_100%] transition-colors">
          {t.nav.consultation}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.consultation.title}</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input placeholder={t.contact.fullName} />
          </div>
          <div className="grid gap-2">
            <Input type="email" placeholder={t.contact.email} />
          </div>
          <div className="grid gap-2">
            <Input placeholder={t.contact.phone} />
          </div>
          <div className="grid gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : t.consultation.selectDate}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Textarea placeholder={t.consultation.reason} />
          </div>
          <Button type="submit">{t.consultation.submit}</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

