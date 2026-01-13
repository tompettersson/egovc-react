'use client'

/**
 * SkipToContent - Accessibility Component
 *
 * Provides a skip link for keyboard users to bypass navigation
 * Required for WCAG 2.1 AA compliance (Success Criterion 2.4.1)
 * Important for BITV 2.0 compliance in Germany
 */

import { useDictionary } from '@/lib/context/DictionaryContext'

export default function SkipToContent() {
  const { locale } = useDictionary()

  const text = locale === 'de'
    ? 'Zum Hauptinhalt springen'
    : 'Skip to main content'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
        focus:bg-[var(--egovc-pink)] focus:text-white
        focus:px-4 focus:py-2 focus:rounded-md
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--egovc-pink)]
        focus:shadow-lg
        transition-all duration-200
        font-medium text-sm
      "
    >
      {text}
    </a>
  )
}
