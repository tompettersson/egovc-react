import { de, type Dictionary } from './de';
import { en } from './en';
import type { Locale } from '../config';

const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.de;
}

export type { Dictionary };
