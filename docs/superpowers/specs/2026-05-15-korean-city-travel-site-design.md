# Korean City Travel Site — Design Spec
**Date:** 2026-05-15
**Status:** Approved

---

## Overview

A full-screen, no-scroll travel showcase site for 12 Korean cities. Each city occupies one fixed viewport page. Users navigate between cities via a top navigation bar. All content is in English.

---

## Cities & Theme Colors

| City | English Name | Theme Color |
|------|-------------|-------------|
| 서울 | Seoul | `#E53935` |
| 인천 | Incheon | `#2979FF` |
| 강릉 | Gangneung | `#7CB342` |
| 대전 | Daejeon | `#FBC02D` |
| 전주 | Jeonju | `#EC5AAE` |
| 광주 | Gwangju | `#2E9E35` |
| 대구 | Daegu | `#7E57C2` |
| 경주 | Gyeongju | `#F39C34` |
| 부산 | Busan | `#2563EB` |
| 여수 | Yeosu | `#4FC3C7` |
| 제주 | Jeju | `#F4B400` |
| 독도 | Dokdo | `#3F51B5` |

---

## Architecture

**Framework:** Next.js 16, App Router, React 19, Tailwind CSS 4  
**Routing:** URL-based — `/cities/[city]` (e.g. `/cities/seoul`)  
**Root redirect:** `/` → `/cities/seoul`

### File Structure

```
frontend/
  app/
    layout.tsx                  ← root layout, overflow:hidden on html+body
    page.tsx                    ← redirect to /cities/seoul
    cities/
      [city]/
        page.tsx                ← dynamic city page
  components/
    NavBar.tsx                  ← 12-tab navigation + logo
    LandmarkCard.tsx            ← miniature image + hover tooltip
    CityIntroToggle.tsx         ← bottom-right slide-up panel
  lib/
    cities.ts                   ← all city data (names, colors, landmarks, descriptions)
  public/
    logo.png                    ← replace with actual logo
    cities/
      seoul/
        background.jpg          ← full-screen background photo
        landmarks/
          landmark-1.jpg        ← 5 landmark photos per city
          landmark-2.jpg
          landmark-3.jpg
          landmark-4.jpg
          landmark-5.jpg
      gyeongju/ ...             ← same structure for all 12 cities
```

---

## Layout Structure

Fixed full-viewport layout. Zero scrolling in any direction.

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO] │ SEOUL │INCHEON│GANGNEUNG│DAEJEON│ ... 12 tabs  │  NavBar (~64px)
├─────────────────────────────────────────────────────────┤
│                                                          │
│  S E O U L                                               │  City name (large)
│                                                          │
│  [Building L]     [Person PNG]     [Building R]          │  Photo layers
│                                                          │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  LANDMARKS                                               │
│  [○] [○] [○] [○] [○]                  [City Info ▲]     │  Bottom bar
└─────────────────────────────────────────────────────────┘
```

**No-scroll implementation:**
```css
html, body { overflow: hidden; height: 100%; }
```

**Photo layers (z-index order):**
1. `background.jpg` — `position: absolute`, `object-fit: cover`, fills entire viewport
2. Left building PNG — `position: absolute`, left side
3. Right building PNG — `position: absolute`, right side
4. Person PNG — `position: absolute`, center, background-removed PNG recommended
5. UI overlay (NavBar, landmarks, toggle) — topmost layer

---

## Components

### NavBar

- Logo slot (left, fixed ~80px width) — displays `/public/logo.png`, placeholder text if missing
- 12 city tabs spread across remaining width equally
- **Active tab:** filled with city theme color, white text
- **Inactive tabs:** transparent/semi-transparent background, muted text
- Navigation via Next.js `<Link>` — no page reload
- Font size scales down if tab text overflows

### LandmarkCard

5 cards displayed horizontally in the bottom bar.

**Default state:**
- ~80×80px rounded image
- City theme color border

**Hover state:**
- Image: `transform: scale(1.4)`, `transition: 200ms ease`
- Tooltip appears **above** the image
- Tooltip has tail (▲) at the **top** of the tooltip pointing upward
- Tooltip: fade in (`opacity: 0→1`) + slide up (`translateY(5px→0)`)
- Tooltip background: city theme color
- Tooltip content: landmark name (bold) + short description
- Hovered card sits on top via `z-index: 10`

**Tooltip structure:**
```
      ▲  ← tail at top of tooltip (CSS ::before triangle)
┌─────┴────────────────┐
│  Landmark Name       │
│  Short description   │
└──────────────────────┘
      [ image 80×80 ]
```

**Data shape (`lib/cities.ts`):**
```ts
type Landmark = {
  id: number
  name: string
  description: string
  image: string  // e.g. "/cities/seoul/landmarks/landmark-1.jpg"
}
```

Landmark content will be provided separately and added only to `lib/cities.ts` — no component changes needed.

### CityIntroToggle

- Positioned bottom-right
- Closed state: small button with city name + ▲ arrow
- Open state: panel slides up, shows 2–3 sentence city description
- Panel background: city theme color (semi-transparent)
- Toggle animation: `max-height` transition for smooth slide

---

## Data Model (`lib/cities.ts`)

```ts
type City = {
  id: string           // url slug, e.g. "seoul"
  name: string         // display name, e.g. "Seoul"
  color: string        // theme hex, e.g. "#E53935"
  description: string  // short intro for toggle panel
  landmarks: Landmark[]
}

const cities: City[] = [
  {
    id: "seoul",
    name: "Seoul",
    color: "#E53935",
    description: "Placeholder description for Seoul.",
    landmarks: [
      { id: 1, name: "Landmark 1", description: "Placeholder.", image: "/cities/seoul/landmarks/landmark-1.jpg" },
      // ... 4 more
    ]
  },
  // ... 11 more cities
]
```

---

## Photo Replacement Guide

| Asset | Path | Notes |
|-------|------|-------|
| Logo | `/public/logo.png` | Replaces placeholder text in NavBar |
| City background | `/public/cities/[city]/background.jpg` | Full-screen background scene |
| Person | `/public/cities/[city]/person.png` | PNG with background removed, centered overlay |
| Building left | `/public/cities/[city]/building-left.png` | Optional separate PNG, left side overlay |
| Building right | `/public/cities/[city]/building-right.png` | Optional separate PNG, right side overlay |
| Landmark photo | `/public/cities/[city]/landmarks/landmark-N.jpg` | N = 1 to 5 |

Just drop files into the correct path — no code changes needed.

---

## Constraints

- No scroll in any direction (`overflow: hidden` on html + body)
- All text in English
- 12 cities, 12 pages, all implemented with placeholder content
- Landmark content (names + descriptions) to be filled in later via `lib/cities.ts`
