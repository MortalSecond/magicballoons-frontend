// Every outward-facing link and number in one place.

// Translated like any other string, so each language build sends visitors to
// FareHarbor's checkout in that language. Unused while FareHarbor is down.
export const FAREHARBOR_LANGUAGE = $localize`:@@site.fareharborLanguage:es`;

const WHATSAPP = '525635362245';

export const CONTACT = {
    phone: '+52 56 3536 2245',
    phoneHref: 'tel:+525635362245',
    whatsapp: WHATSAPP,
    // TEMPORARY (2026-10): FareHarbor's account went dark, so every "Reservar"
    // goes to sales on WhatsApp. To restore, put this line back:
    // booking: `https://fareharbor.com/embeds/book/magicballoonsmexico/?full-items=yes&language=${FAREHARBOR_LANGUAGE}`,
    booking: whatsappUrl(WHATSAPP, $localize`:@@contact.bookingMessage:Hola, quiero reservar un vuelo en globo.`),
    reviews: 'https://www.tripadvisor.com.mx/Attraction_Review-g14989463-d26454966-Reviews-Magic_Balloons_Mexico.html',
    // From the booking box on the TripAdvisor page. The page header counts
    // differently (155), so quote these two together or not at all.
    rating: {
        score: '4.9',
        count: 337
    },
    // Guests only ever go to the balloonport; the office is administration.
    // Maps links use the place's CID, which survives renames and URL changes.
    locations: {
        balloonport: {
            name: $localize`:@@location.balloonport:Globopuerto`,
            hours: '4:00 - 9:00',
            lat: 19.6923836,
            lng: -98.8212231,
            maps: 'https://maps.google.com/?cid=5011907918767075665'
        },
        office: {
            name: $localize`:@@location.office:Oficina`,
            hours: '9:00 - 15:00',
            lat: 19.6906755,
            lng: -98.8253779,
            maps: 'https://maps.google.com/?cid=18096572574940490965'
        }
    },
    social: {
        facebook: 'https://www.facebook.com/magicballoonsmexico',
        instagram: 'https://www.instagram.com/magicballoonsmexico',
        tiktok: 'https://www.tiktok.com/@magicballoonsmexico',
        youtube: 'https://www.youtube.com/@MagicBallonsMexico'
    }
} as const;


// === HELPERS ===

export function whatsappUrl(phone: string, message: string): string
{
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
