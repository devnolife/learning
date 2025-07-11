'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRole } from '@/hooks/useRole'

type Theme = 'light' | 'dark' | 'auto'

interface ThemeContextType {
  theme: Theme
  effectiveTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { isAdmin } = useRole()
  const [theme, setTheme] = useState<Theme>('auto')
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default theme based on role
      const defaultTheme = isAdmin ? 'dark' : 'light'
      setTheme(defaultTheme)
    }
  }, [isAdmin])

  useEffect(() => {
    // Determine effective theme
    let newEffectiveTheme: 'light' | 'dark' = 'light'

    if (theme === 'auto') {
      // For admin users, default to dark; for regular users, default to light
      newEffectiveTheme = isAdmin ? 'dark' : 'light'

      // Also respect system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        newEffectiveTheme = 'dark'
      }
    } else {
      newEffectiveTheme = theme === 'dark' ? 'dark' : 'light'
    }

    setEffectiveTheme(newEffectiveTheme)

    // Update document class
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(newEffectiveTheme)

    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme, isAdmin])

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'auto'
      return 'light'
    })
  }

  const value = {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
