"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown, FiGlobe } from "react-icons/fi";
import ContactDialog from "./dialogs/ContactDialog";
import { useDictionary } from "@/lib/context/DictionaryContext";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const sectorsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const sectorsButtonRef = useRef<HTMLButtonElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);

  const { dictionary: dict, locale } = useDictionary();
  const pathname = usePathname();

  // Get path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';

  const sectors = [
    { name: dict.pillars.verwaltung.title, href: `/${locale}/verwaltung/` },
    { name: dict.pillars.gesundheitswesen.title, href: `/${locale}/gesundheitswesen/` },
    { name: dict.pillars.kirche.title, href: `/${locale}/kirche/` },
  ];

  const navItems = [
    { name: dict.nav.blog, href: `/${locale}/blog/` },
    { name: dict.nav.career, href: `/${locale}/karriere/` },
    { name: dict.nav.training, href: "https://www.govguru24.de/", external: true },
    { name: dict.nav.network, href: `/${locale}/network/` },
    { name: dict.nav.hub, href: "https://hub.egovc.de", external: true },
    { name: dict.nav.whitepaper, href: `/${locale}/whitepaper/` },
    { name: dict.nav.team, href: `/${locale}/team/` },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectorsRef.current && !sectorsRef.current.contains(event.target as Node)) {
        setSectorsOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (sectorsOpen) {
          setSectorsOpen(false);
          sectorsButtonRef.current?.focus();
        }
        if (langMenuOpen) {
          setLangMenuOpen(false);
          langButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [sectorsOpen, langMenuOpen, mobileMenuOpen]);

  // Handle keyboard navigation in dropdown
  const handleDropdownKeyDown = useCallback((
    event: React.KeyboardEvent,
    items: { name: string; href: string }[],
    isOpen: boolean,
    setOpen: (open: boolean) => void
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!isOpen);
    } else if (event.key === 'ArrowDown' && isOpen) {
      event.preventDefault();
      const firstItem = event.currentTarget.parentElement?.querySelector('a');
      (firstItem as HTMLElement)?.focus();
    }
  }, []);

  // Handle keyboard navigation within dropdown menu
  const handleMenuItemKeyDown = (
    event: React.KeyboardEvent,
    index: number,
    totalItems: number,
    setOpen: (open: boolean) => void,
    buttonRef: React.RefObject<HTMLButtonElement | null>
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % totalItems;
      const siblings = event.currentTarget.parentElement?.querySelectorAll('a');
      (siblings?.[nextIndex] as HTMLElement)?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = index === 0 ? totalItems - 1 : index - 1;
      const siblings = event.currentTarget.parentElement?.querySelectorAll('a');
      (siblings?.[prevIndex] as HTMLElement)?.focus();
    } else if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  const mobileMenuLabel = mobileMenuOpen
    ? (locale === 'de' ? 'Menü schließen' : 'Close menu')
    : (locale === 'de' ? 'Menü öffnen' : 'Open menu');

  const contactLabel = locale === 'de' ? 'Kontakt öffnen' : 'Open contact';

  return (
    <header className="bg-white text-[var(--egovc-dark)] border-b border-gray-200">
      <nav className="container mx-auto px-4 lg:px-8" aria-label={locale === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}/`} className="flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded">
            <img
              src="/images/logo.svg"
              alt="EGovC Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Sektoren Dropdown */}
            <div className="relative" ref={sectorsRef}>
              <button
                ref={sectorsButtonRef}
                className="flex items-center gap-1 text-[var(--egovc-dark)] hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                onClick={() => setSectorsOpen(!sectorsOpen)}
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
                onKeyDown={(e) => handleDropdownKeyDown(e, sectors, sectorsOpen, setSectorsOpen)}
                aria-expanded={sectorsOpen}
                aria-haspopup="menu"
                aria-controls="sectors-menu"
                id="sectors-button"
              >
                {dict.nav.sectors}
                <FiChevronDown
                  className={`transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {sectorsOpen && (
                <>
                  {/* Invisible bridge between button and dropdown */}
                  <div
                    className="absolute top-full left-0 w-full h-2"
                    onMouseEnter={() => setSectorsOpen(true)}
                  />
                  <div
                    id="sectors-menu"
                    role="menu"
                    aria-labelledby="sectors-button"
                    className="absolute top-full left-0 mt-2 bg-white text-[var(--egovc-dark)] rounded shadow-lg py-2 min-w-[200px] z-50 border border-gray-200"
                    onMouseEnter={() => setSectorsOpen(true)}
                    onMouseLeave={() => setSectorsOpen(false)}
                  >
                    {sectors.map((sector, index) => (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors focus:bg-gray-100 focus:outline-none"
                        onKeyDown={(e) => handleMenuItemKeyDown(e, index, sectors.length, setSectorsOpen, sectorsButtonRef)}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-[var(--egovc-dark)] hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                {...(item.external && { 'aria-label': `${item.name} (${locale === 'de' ? 'öffnet in neuem Tab' : 'opens in new tab'})` })}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                ref={langButtonRef}
                className="flex items-center gap-1 text-[var(--egovc-dark)] hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                onMouseEnter={() => setLangMenuOpen(true)}
                onMouseLeave={() => setLangMenuOpen(false)}
                onKeyDown={(e) => handleDropdownKeyDown(e, locales.map(l => ({ name: l, href: '' })), langMenuOpen, setLangMenuOpen)}
                aria-expanded={langMenuOpen}
                aria-haspopup="menu"
                aria-controls="language-menu"
                aria-label={locale === 'de' ? `Sprache wählen: aktuell ${localeNames[locale]}` : `Select language: currently ${localeNames[locale]}`}
                id="language-button"
              >
                <FiGlobe className="w-4 h-4" aria-hidden="true" />
                {locale.toUpperCase()}
                <FiChevronDown
                  className={`transition-transform ${langMenuOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {langMenuOpen && (
                <>
                  <div
                    className="absolute top-full left-0 w-full h-2"
                    onMouseEnter={() => setLangMenuOpen(true)}
                  />
                  <div
                    id="language-menu"
                    role="menu"
                    aria-labelledby="language-button"
                    className="absolute top-full left-0 mt-2 bg-white text-[var(--egovc-dark)] rounded shadow-lg py-2 min-w-[120px] z-50 border border-gray-200"
                    onMouseEnter={() => setLangMenuOpen(true)}
                    onMouseLeave={() => setLangMenuOpen(false)}
                  >
                    {locales.map((l, index) => (
                      <Link
                        key={l}
                        href={`/${l}${pathWithoutLocale}`}
                        role="menuitem"
                        tabIndex={0}
                        lang={l}
                        hrefLang={l}
                        aria-current={l === locale ? 'true' : undefined}
                        className={`block px-4 py-2 hover:bg-gray-100 transition-colors focus:bg-gray-100 focus:outline-none ${
                          l === locale ? "font-bold text-[var(--egovc-pink)]" : ""
                        }`}
                        onKeyDown={(e) => handleMenuItemKeyDown(e, index, locales.length, setLangMenuOpen, langButtonRef)}
                      >
                        {localeNames[l]}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Q2 Icon */}
          <div className="hidden lg:block">
            <ContactDialog>
              <button
                className="w-12 h-12 bg-[var(--egovc-pink)] flex items-center justify-center rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2"
                aria-label={contactLabel}
              >
                <img
                  src="/images/q2-icon.svg"
                  alt=""
                  className="w-5 h-5 brightness-0 invert"
                  aria-hidden="true"
                />
              </button>
            </ContactDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[var(--egovc-dark)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuLabel}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <HiX size={24} aria-hidden="true" /> : <HiMenu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4" role="navigation" aria-label={locale === 'de' ? 'Mobile Navigation' : 'Mobile navigation'}>
            <div className="flex flex-col gap-4 pt-4">
              {/* Sektoren */}
              <div>
                <button
                  className="flex items-center gap-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                  onClick={() => setSectorsOpen(!sectorsOpen)}
                  aria-expanded={sectorsOpen}
                  aria-controls="mobile-sectors-menu"
                >
                  {dict.nav.sectors}
                  <FiChevronDown
                    className={`transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {sectorsOpen && (
                  <div id="mobile-sectors-menu" className="pl-4 mt-2 flex flex-col gap-2" role="menu">
                    {sectors.map((sector) => (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        role="menuitem"
                        className="hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-[var(--egovc-dark)] hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 rounded px-1 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                  {...(item.external && { 'aria-label': `${item.name} (${locale === 'de' ? 'öffnet in neuem Tab' : 'opens in new tab'})` })}
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Switcher (Mobile) */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-gray-500">
                  <FiGlobe className="w-4 h-4" aria-hidden="true" />
                  <span id="mobile-lang-label">{locale === 'de' ? 'Sprache' : 'Language'}</span>
                </div>
                <div className="flex gap-4" role="group" aria-labelledby="mobile-lang-label">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={`/${l}${pathWithoutLocale}`}
                      lang={l}
                      hrefLang={l}
                      aria-current={l === locale ? 'page' : undefined}
                      className={`px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 ${
                        l === locale
                          ? "bg-[var(--egovc-pink)] text-white"
                          : "bg-gray-100 text-[var(--egovc-dark)] hover:bg-gray-200"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
