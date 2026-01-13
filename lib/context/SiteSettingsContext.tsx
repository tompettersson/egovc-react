'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { SiteSettings, LegalPagesData } from '@/lib/types';

interface SiteSettingsContextType {
  settings: SiteSettings | null;
  legalPages: LegalPagesData | null;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: null,
  legalPages: null,
});

export function SiteSettingsProvider({
  children,
  settings,
  legalPages,
}: {
  children: ReactNode;
  settings: SiteSettings | null;
  legalPages: LegalPagesData | null;
}) {
  return (
    <SiteSettingsContext.Provider value={{ settings, legalPages }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
