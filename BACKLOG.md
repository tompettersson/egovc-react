# EGovC Website - Backlog

> Erstellt: 02.01.2026 | Letzte Aktualisierung: 02.01.2026

## Projektstatus-Übersicht

| Seite | Route | Schema | Query | Sanity-Daten | Frontend-Anbindung | Status |
|-------|-------|--------|-------|--------------|-------------------|--------|
| Homepage | `/` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Verwaltung | `/verwaltung` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Gesundheitswesen | `/gesundheitswesen` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Kirche | `/kirche` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Karriere | `/karriere` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Team | `/team` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Whitepaper | `/whitepaper` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |
| Network | `/network` | ✅ | ✅ | ✅ | ✅ | **FERTIG** |

---

## Phase 1: Sektor-Seiten (Verwaltung, Gesundheit, Kirche) ✅ ABGESCHLOSSEN

### 1.1 Sanity-Dokumente anlegen ✅

- [x] **Verwaltung** Dokument in Sanity erstellen (`sectorPage`, slug: `verwaltung`)
- [x] **Gesundheitswesen** Dokument in Sanity erstellen (`sectorPage`, slug: `gesundheitswesen`)
- [x] **Kirche** Dokument in Sanity erstellen (`sectorPage`, slug: `kirche`)

> Script: `sanity/egovc/import-sector-pages.js`

### 1.2 Content migrieren (von `lib/data/pages.ts`) ✅

Für jede Sektor-Seite:
- [x] Hero-Daten (title, subtitle, backgroundImage)
- [x] Intro-Daten (title, subtitle, description)
- [x] Services-Sections (Array mit Items)
- [x] Network-Section (optional)

### 1.3 Frontend-Anbindung ✅

- [x] `app/verwaltung/page.tsx` → Sanity-Daten laden
- [x] `app/gesundheitswesen/page.tsx` → Sanity-Daten laden
- [x] `app/kirche/page.tsx` → Sanity-Daten laden

### 1.4 Bilder hochladen ✅

- [x] Verwaltung Hero-Bild (`verwaltung-hero.jpg`)
- [x] Gesundheitswesen Hero-Bild (`gesundheitswesen-hero.jpg`)
- [x] Kirche Hero-Bild (`kirche-hero.jpg`)

> Script: `sanity/egovc/batch-upload-images.js -- sectorHeroes`

---

## Phase 2: Karriere-Seite ✅ ABGESCHLOSSEN

### 2.1 Sanity-Dokument anlegen ✅

- [x] `careerPage` Dokument erstellen (Singleton)

> Script: `sanity/egovc/import-career-page.js`

### 2.2 Content migrieren (von `lib/data/karriere.ts`) ✅

- [x] Intro (title, paragraphs)
- [x] Benefits (5 Items mit title, description)
- [x] Expectations (title, description)
- [x] Job Openings (3 Stellenangebote mit Details)

### 2.3 Frontend-Anbindung ✅

- [x] `app/karriere/page.tsx` → Sanity-Daten laden

---

## Phase 3: Team-Seite ✅ ABGESCHLOSSEN

### 3.1 Sanity-Dokument anlegen ✅

- [x] `teamPage` Dokument erstellen (Singleton)

> Script: `sanity/egovc/import-team-page.js`

### 3.2 Content migrieren (von `lib/data/team.ts`) ✅

- [x] Intro (title, 3 paragraphs)
- [x] Members (3 Team-Mitglieder mit name, role)
- [x] Departments (5 Abteilungen mit title, description, email)
- [x] Values (intro + 7 Werte-Items)

### 3.3 Bilder hochladen ⏳ (Optional - Fallback zu lokalen Bildern)

- [ ] Team-Mitglieder Fotos (können später in Sanity Studio hochgeladen werden)
  - [ ] Adrian Sommer
  - [ ] Roland Lutz
  - [ ] Benjamin Bauer

### 3.4 Frontend-Anbindung ✅

- [x] `app/team/page.tsx` → Sanity-Daten laden (mit Fallback zu lokalen Bildern)

---

## Phase 4: Network-Seite ✅ ABGESCHLOSSEN

### 4.1 Sanity-Dokument anlegen ✅

- [x] `networkPage` Dokument erstellen (Singleton)

> Script: `sanity/egovc/import-network-page.js`

### 4.2 Content migrieren (von `lib/data/network.ts`) ✅

- [x] Hero (title, subtitle, description)
- [x] About (label, title, description)
- [x] Vision/Mission (title, description)
- [x] Solutions (label, title, description)
- [x] Topics (title + 18 Themenfelder)

### 4.3 Frontend-Anbindung ✅

- [x] `app/network/page.tsx` → Sanity-Daten laden

---

## Phase 5: Whitepaper-Seite ✅ ABGESCHLOSSEN

### 5.1 Sanity-Dokumente anlegen ✅

- [x] `whitepaperPage` Dokument erstellen (Singleton)
- [x] Alle `whitepaper` Dokumente erstellen (29 Einträge)

> Script: `sanity/egovc/import-whitepaper-page.js`

### 5.2 Content migrieren (von `lib/data/whitepaper.ts`) ✅

- [x] Hero (title, intro)
- [x] Form (title, note)
- [x] Whitepapers Array (29 Dokumente: 5 Podcasts, 13 Whitepapers, 11 OMNIA-Produkte)

### 5.3 Frontend-Anbindung ✅

- [x] `app/whitepaper/page.tsx` → Server Component mit Sanity-Daten
- [x] `app/whitepaper/WhitepaperClientContent.tsx` → Client Component für Interaktivität

---

## Technische Infrastruktur

### Bereits vorhanden ✅

- [x] Sanity-Schemas für alle Seiten-Typen
- [x] GROQ-Queries in `lib/sanity/queries.ts`
- [x] Sanity CLI Toolkit für Bild-Uploads
- [x] `urlFor()` Helper für Sanity-Bilder
- [x] Next.js Image Config für `cdn.sanity.io`

### Batch-Import Scripts ✅

- [x] `sanity/egovc/import-sector-pages.js` - Sektor-Seiten (Verwaltung, Gesundheit, Kirche)
- [x] `sanity/egovc/import-career-page.js` - Karriere-Daten
- [x] `sanity/egovc/import-team-page.js` - Team-Daten
- [x] `sanity/egovc/import-network-page.js` - Network-Daten
- [x] `sanity/egovc/import-whitepaper-page.js` - Whitepaper-Daten (29 Dokumente)

---

## Arbeitsweise (Pattern)

### Für jede Seite:

1. **Sanity-Dokument anlegen**
   ```bash
   # Option A: Via Sanity Studio (http://localhost:3333)
   # Option B: Via Script mit npx sanity exec
   ```

2. **Content importieren**
   ```typescript
   // In scripts/content/[page-name].ts
   export const pageContent = { ... }
   ```

3. **Frontend refactoren**
   ```typescript
   // Sanity-Daten fetchen
   const data = await sanityClient.fetch(pageQuery);

   // Fallback für leere Daten
   const pageData = data || fallbackData;
   ```

4. **Bilder hochladen**
   ```bash
   cd sanity/egovc
   npx sanity exec batch-upload-images.js --with-user-token -- [set-name]
   ```

5. **Testen**
   - Sanity Studio prüfen
   - Frontend prüfen
   - Console-Errors checken

---

## Prioritäten

| Priorität | Seiten | Begründung |
|-----------|--------|------------|
| **1 - Hoch** | Sektor-Seiten | Kernseiten, viele Besucher |
| **2 - Mittel** | Karriere, Team | Wichtig für Recruiting |
| **3 - Normal** | Network, Whitepaper | Spezialseiten |

---

## Geschätzte Aufwände

| Phase | Aufwand | Beschreibung |
|-------|---------|--------------|
| Phase 1 | ~2h | 3 Sektor-Seiten (ähnliche Struktur) |
| Phase 2 | ~1h | Karriere-Seite |
| Phase 3 | ~1.5h | Team-Seite (inkl. Bilder) |
| Phase 4 | ~1h | Network-Seite |
| Phase 5 | ~2h | Whitepaper (viele Einträge) |
| **Gesamt** | **~7.5h** | |

---

## Abgeschlossene Meilensteine ✅

1. ✅ Homepage komplett mit Sanity-Bildern
2. ✅ Sektor-Seiten (Verwaltung, Gesundheitswesen, Kirche)
3. ✅ Karriere-Seite
4. ✅ Team-Seite (mit Fallback für Bilder)
5. ✅ Network-Seite
6. ✅ Whitepaper-Seite (29 Dokumente)

---

## Projektstatus: ABGESCHLOSSEN 🎉

**Alle 8 Seiten sind vollständig mit Sanity CMS verbunden!**

### Optionale Folgeaufgaben

- [ ] Team-Mitglieder Fotos in Sanity Studio hochladen
- [ ] Production-Build und Deployment testen
- [ ] SEO-Metadaten in Sanity ergänzen
