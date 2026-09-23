// The other lines of business. Each service answers a different search and gets
// its own route, so `slug` is a URL segment and must not change once indexed.
// `phone` is digits only, in international form, for wa.me links.

export interface Service
{
    id: string;
    slug: string;
    name: string;
    tagline: string;
    phone: string;
    gallery: string[];
}

// Waiting on the client for copy, photos and one WhatsApp number per service.
export const SERVICES: Service[] = [];


// === HELPERS ===

export function whatsappUrl(phone: string, message: string): string
{
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
