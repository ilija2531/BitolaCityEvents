"use client"


import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Lang, t as translate } from '../lib/i18n'

type LanguageContextValue = {
  language: Lang
  setLanguage: (l: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Lang>('EN')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('language') as Lang | null
      if (saved) setLanguageState(saved)
      else {
        const nav = (navigator.language || 'en').startsWith('mk') ? 'MK' : 'EN'
        setLanguageState(nav)
      }
    } catch (e) {
      // ignore in SSR or restricted env
    }
  }, [])

  const setLanguage = (l: Lang) => {
    setLanguageState(l)
    try { localStorage.setItem('language', l) } catch (e) {}
  }

  const value = useMemo(() => ({ language, setLanguage, t: (key: string) => translate(key, language) }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export default LanguageProvider
