// The public origin and the language builds. Search engines need absolute URLs
// for canonical and hreflang, so this must be the live domain.

export const SITE_URL = 'https://magicballoonsmexico.com';

export interface Language
{
    // Matches the start of Angular's LOCALE_ID for that build ('es-MX', 'en').
    code: string;
    hreflang: string;
    path: string;
    label: string;
}

// Section anchors, shared by the navbar and the footer. Fragments resolve
// against <base href>, so they stay inside the current language.
export const SECTION_LINKS = [
    { href: '#vuelos', label: $localize`:@@navbar.flights:Vuelos` },
    { href: '#servicios', label: $localize`:@@navbar.services:Servicios` },
    { href: '#experiencia', label: $localize`:@@navbar.journey:Tu día` },
    { href: '#opiniones', label: $localize`:@@navbar.reviews:Opiniones` },
    { href: '#preguntas', label: $localize`:@@navbar.faq:Preguntas` }
];

// Spanish is the source and lives at the root; see i18n in angular.json.
export const LANGUAGES: Language[] = [
    { code: 'es', hreflang: 'es-MX', path: '/', label: 'ES' },
    { code: 'en', hreflang: 'en', path: '/en/', label: 'EN' }
];


// === HELPERS ===

export function languageFor(localeId: string): Language
{
    return LANGUAGES.find(language => localeId.startsWith(language.code)) ?? LANGUAGES[0];
}
