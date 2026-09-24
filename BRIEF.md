# BRIEF.md

The state of the Magic Balloons México website: what it is, how it is built,
the rules learned while building it, and what is still open. Read this before
touching anything. Last updated 2026-09-24.

---

## 1. What this is

The public marketing site for **Magic Balloons México**, a hot air balloon
operator in Teotihuacán. It replaces an agency-built WordPress site that the
client took down. Its job is to rank in search, sell the flights, and hand
visitors to one of two booking paths:

- **FareHarbor** (online checkout), through every "Reservar" button.
- **WhatsApp** with a salesperson.

There is no backend. The site never takes payments or personal data; FareHarbor
does. `magicballoons-backend` exists as a sibling folder for a possible future
API and is intentionally empty.

**People.** Moss is the sole developer (freelance, Spanish native, English
second language) and owns the code. He reviews every diff and commits and
pushes himself. Spanish copy is his to edit; English copy is written by Claude.
Business facts come from Moss, who also built the client's internal CRM, so he
knows how reception actually operates.

---

## 2. Stack

| Piece | Choice |
|---|---|
| Framework | Angular 22.2: standalone, zoneless, OnPush by default, signals |
| Rendering | Static prerendering (`outputMode: "static"`), 4 pages today |
| i18n | `@angular/localize`: Spanish (`es-MX`) at `/`, English at `/en/` |
| Styles | Vanilla CSS, BEM, no framework, no token system |
| Map | Leaflet 1.9.4 + OpenStreetMap tiles |
| Fonts | Anton + Montserrat, self-hosted via `@fontsource` (Latin subset) |
| Tests | Vitest through `ng test` |
| Media tooling | Python + ImageMagick 7 (`magick`) |
| Hosting | Vercel for previews now; Cloudflare Pages is the target (section 9) |

Add new packages with `--save-exact` (Leaflet and the fonts are pinned). A caret
once pulled `@angular/localize` 22.2.0 against a 22.1.7 compiler and broke the
install. Angular's own packages keep the carets `ng update` writes; update them
together with `ng update`, never one at a time.

---

## 3. Commands

```bash
npm start                                   # dev server, Spanish, port 4200
npx ng serve -c en                          # dev server, English
npx ng build                                # both languages, prerendered, into dist/
npx ng test --watch=false                   # all specs
npx ng extract-i18n                         # refresh src/locale/messages.xlf
python scripts/merge-translations.py x.json # add English for new strings
python scripts/responsive-images.py         # after adding or replacing a photo
```

`ng serve` builds one language at a time, so the ES | EN switch links to a page
that 404s in development. Only `ng build` produces both.

---

## 4. Layout

```
src/
  index.html                  head basics only; SEO tags are written by Seo
  styles.css                  fonts, colours, reset, shared classes, shared @keyframes
  locale/
    messages.xlf              GENERATED Spanish source. Never edit.
    messages.en.xlf           English. Edit freely; merges keep your edits.
    translations.spec.ts      fails on untranslated or stale English
  app/
    app.html                  navbar + router-outlet + footer
    app.routes.ts             '' (home), 'politicas'
    data/                     every piece of content and every figure
      contact.data.ts         phones, links, rating, both locations
      policy.data.ts          operational figures (deposit, fees, weights...)
      packages.data.ts        the four packages, FareHarbor ids
      services.data.ts        services carousel (two are lorem placeholders)
      journey.data.ts         the ten-step flight day
      reviews.data.ts         TripAdvisor quotes, per language, never translated
      faq.data.ts             FAQ, 18 questions in 4 groups
      policies.data.ts        the policies page text
      site.data.ts            SITE_URL, languages, SECTION_LINKS
      structured-data.ts      schema.org LocalBusiness JSON-LD
      media.ts + media.generated.ts   srcset helper + generated width manifest
    shared/
      seo.ts                  title, description, canonical, hreflang, OG, JSON-LD
      components/             navbar, footer, image-viewer
    pages/
      home/                   the one-page site, sections in sections/
      policies/               /politicas/
public/
  media/                      photos (+ generated -480/-800/-1200 copies), og-cover.jpg
  icons/                      black single-colour SVGs, recoloured with a CSS filter
  robots.txt  sitemap.xml  _redirects
  favicon.svg favicon.ico apple-touch-icon.png   from the logo; the ICO's 16/32px use a tighter crop
scripts/                      responsive-images.py, merge-translations.py
```

Outside the repo, in `MagicBalloonsAngular/`: `source-media/` holds the raw
originals (drone video, photos, logo PNG), `tools/trace-logo.py` vectorised the
logo, and `_discard/` is junk to delete.

**Home, top to bottom:** hero (`#inicio`), packages (`#vuelos`), services
carousel (`#servicios`), flight-day timeline (`#experiencia`), reviews
(`#opiniones`), FAQ (`#preguntas`), location with map (`#ubicacion`), closing
call to action (`#reservar`), footer.

---

## 5. Code style

This project deliberately differs from other projects' style guides. In
particular: **no design-token system.** Earlier attempts added one and it was
removed; do not reintroduce it.

**CSS**
- Classic BEM, named after the immediate wrapper (`.package__price`, `.title__line`).
- `:root` holds only fonts, colours and the SVG recolour filter (`--toWhite`).
  Every size is written literally where it is used.
- `rem` at the browser's 16px. No `62.5%` trick, no modern-normalize.
- Properties grouped with blank lines: layout, then typography, then the box.
- K&R braces with no space before `{` (`.hero{`).
- Responsive rules at the bottom of each file under a
  `MOBILE RESPONSIVE ADDITIONS` banner.
- Buttons with text use `--redDark`: the brand `--red` fails contrast behind
  white text. `--red` is for dots, lines and accents.

**TypeScript and templates**
- Allman braces; no braces on a single-statement `if`.
- `// === INPUTS ===`, `STATE`, `METHODS`, `HELPERS` banners.
- Create components with `ng generate component`. Selector prefix `app-`.
- Comments explain why, briefly. No em dashes or guillemets in comments.
- English in code, Spanish in the UI.
- One definition, many callers: figures in `POLICY`, links in `SECTION_LINKS`,
  image widths in the generated manifest. Never retype a number or a list.

---

## 6. Rules learned the hard way

Each of these broke something or nearly did.

- **Shared `@keyframes` live in `styles.css`.** Angular renames keyframes
  declared in a component stylesheet, so a component's copy cannot be reused
  and a name hidden in a custom property silently finds nothing.
- **A "rise from behind a clip" needs two elements:** a wrapper with
  `overflow: hidden` and an inner element that animates. One element alone just
  moves.
- **Never render carousel slides with `@if`.** Only rendered slides reach the
  prerendered HTML, and hidden ones must be indexable. Hide with CSS plus
  `inert`. A spec enforces this.
- **Keep `&ngsp;` between the hero title's lines.** Angular strips the
  whitespace, and crawlers would read "La magiade volar". A spec checks it.
- **`window` only exists in `afterNextRender`,** never in a constructor:
  prerendering has no window.
- **Leaflet** is imported dynamically inside `afterNextRender`, wrapped in
  `@defer (on viewport)`, uses `ViewEncapsulation.None` with every selector
  prefixed `.location-map`, and needs `isolation: isolate` or its layers paint
  over the fixed navbar.
- **Spanish text is edited in the `.ts` and `.html` sources, never in
  `messages.xlf`.** That file is regenerated and overwrites hand edits. This
  already happened once.
- **Every translatable string has a fixed `@@id`,** so editing Spanish never
  disconnects its English.
- **An entry with an empty English target silently ships Spanish** on the
  English page. The build does not catch it; `translations.spec.ts` does. A
  missing id does fail the build (`i18nMissingTranslation: "error"`).
- **Merge English, never regenerate the file,** or hand edits are lost. Use
  `scripts/merge-translations.py`.
- **Reviews are quoted, never translated.** Each build shows reviews written in
  its own language.
- **Links to home sections are relative (`#vuelos`),** so they resolve against
  `<base href>` and stay in the current language.
- **Non-root pages use a trailing slash** (`/politicas/`): static hosts serve
  `politicas/index.html` there and redirect the slashless form, and a
  canonical URL must not redirect.
- **Rerun `scripts/responsive-images.py`** after adding a photo, or it gets no
  `srcset` (it still works, at full size).
- **The browser preview pane freezes when hidden:** scroll-driven animations,
  transitions and smooth scrolling stop advancing. Take a screenshot to force
  frames, and measure computed styles instead of trusting a blank frame.

---

## 7. Business facts

Operations are the source of truth, not the old written policies, which were
out of date. All figures below live in `policy.data.ts` or `contact.data.ts`.

- **Booking:** FareHarbor online, or WhatsApp with a salesperson.
- **Deposit:** $500 MXN per passenger at booking, for every package. The rest
  is paid at reception on flight day.
- **Payment at reception:** cash, transfer, card (+5%, the terminal's fee).
  PayPal at booking only (+6.5%). US dollars at a fixed 16 MXN per dollar.
- **Weight:** everyone is weighed at reception (safety: basket balance).
  $35 MXN per kilo over 100 kg. No 140 kg rule. Over 200 kg: warn about heart
  strain at altitude, no hard maximum.
- **Children:** full price. Minimum age to fly is 4; younger children skip the
  flight but get the rest of the package.
- **No-shows:** only people who fly pay on the day; a no-show loses their deposit.
- **Changes:** free with 48 h notice, within 3 months. 30% charge between 48 and
  12 h. Under 12 h, the deposit is lost. (Kept from the old policy.)
- **Weather:** the pilot decides each morning; rescheduled at no cost, deposit
  carries over.
- **The day:** staff from 4:00, passengers arrive 5:15, flights about 45 min,
  nothing airborne after 9:00 (AFAC). Route depends on the wind.
- **On board:** phone, camera, small items only. No bags of any size. Free lockers.
- **Photos and drone video:** sold separately, $500 to $3,000 MXN.
- **Celebrations:** signs and banners for proposals, anniversaries, birthdays.
- **Facturas (CFDI):** not issued. Deliberately left off the site.
- **Places:** Globopuerto 19.6923836, -98.8212231 (every flight leaves from
  here; no street address, it is down a dirt road on a plain). Office
  19.6906755, -98.8253779, Monday to Sunday 9:00 to 15:00. On Google Maps the
  office is listed as "Teotihuacán Sin Fronteras".
- **Rating:** 4.9 from 337 reviews on TripAdvisor, quoted as a pair. Never
  marked up as `aggregateRating`: Google only accepts self-collected reviews.
- **WhatsApp numbers** are `52` plus ten digits, no `1` after 52.

**Content provenance.** `couple-embrace.webp` is a real, unedited iPhone photo.
`couple-dawn.webp`, `woman-pyramids.webp` and the van and cave cutouts passed
through ChatGPT image editing (OpenAI C2PA metadata). The old site's
testimonial faces were AI-generated. Prefer real photos anywhere that implies
"this happened here".

---

## 8. SEO

- Every page calls `Seo.apply({ title, description, path })` once. It writes the
  title, description, canonical, `hreflang` for both languages plus
  `x-default`, Open Graph (with `og-cover.jpg`, 1200×630) and Twitter tags.
  Page titles live there, not on routes.
- Home adds `LocalBusiness` + `TouristAttraction` JSON-LD built from the data
  files (coordinates, phone, price range, the four packages as offers).
- `sitemap.xml` is hand-written: add a pair for every new route. It repeats the
  domain from `SITE_URL`.
- `_redirects` maps the old WordPress policies URL to `/politicas/`. It only
  works on Cloudflare Pages.

**Performance (Lighthouse, mobile, 2026-09-24).** Accessibility 100, best
practices 100, SEO 100. Real throttled load: performance 98, LCP 0.9 s.
Lighthouse's default simulated mode, which PageSpeed Insights also uses, gives
about 79 with compression (LCP 4.9 s), limited by the HTML to CSS to font
chain. Animations were tested and ruled out as a cause. Preloading the Anton
font is the known next step if the simulated number matters.

---

## 9. Deployment and domain

- **Registrar:** GoDaddy, in Magic's account. `magicballoonsmexico.com`
  expires 2027-09-19.
- **Today** the nameservers are GoDaddy's and the domain serves a parking page
  (a redirect to `/lander`, status 200 everywhere). Search rankings drain while
  that lasts. Deploying is the most valuable SEO step left.
- **Plan:** a Cloudflare account owned by Magic (company email), Moss invited
  as administrator. Cloudflare Pages connected to GitHub through the Cloudflare
  GitHub App with access to **this repository only**. Build `npx ng build`,
  output `dist/magicballoons-frontend/browser`.
- **Domain:** add the site in Cloudflare, then in GoDaddy disable Domain
  Protection and switch the nameservers to Cloudflare's two. Add
  `magicballoonsmexico.com` and `www` as custom domains on the Pages project.
- `magicballoons.com`, printed on their old flyers, belongs to someone else and
  is parked for sale on Sedo.

---

## 10. Open items

**Waiting on the client**
- Copy, photos and a WhatsApp number for the two lorem services.
- Real photos to replace the ChatGPT-edited ones.
- A legally complete privacy notice (*aviso de privacidad*, LFPDPPP) from their
  lawyer; the current section is a summary.
- Confirm: the AFAC 9:00 rule as worded, the "+10,000 pasajeros" claim, the
  history told at the toast, and publishing the fixed dollar rate.
- The Cloudflare account and the nameserver change.

**Ready to build**
- A route per service (`/servicios/<slug>`); the data already has slugs. Needs
  a `sitemap.xml` entry and `Seo.apply` with its path.
- Reviews and packages revealed one card after another as the section enters
  the screen (time-based, triggered by an IntersectionObserver), replacing the
  barely visible scroll-linked rise.
- Hero video: 3 or 4 short drone clips joined into one silent MP4, poster
  first, no video on mobile.
- Optional: preload the Anton font (needs fixed file names).
- GA4 / Google Tag Manager, with FareHarbor's own conversion tracking, once the
  ads agency asks. Their Google Business Profile matters more than any of it.
