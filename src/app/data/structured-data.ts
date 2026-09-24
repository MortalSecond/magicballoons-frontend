import { CONTACT } from './contact.data';
import { PACKAGES, bookingUrl } from './packages.data';
import { SITE_URL } from './site.data';

// schema.org description of the business for search engines, built from the
// same data the page renders so prices and coordinates cannot drift.
// Deliberately no aggregateRating: Google only accepts ratings a business
// collects itself, and ours come from TripAdvisor.

export function businessData(description: string, pageUrl: string): object
{
    const prices = PACKAGES.map(item => item.price);
    const place = CONTACT.locations.balloonport;

    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'TouristAttraction'],
        '@id': `${SITE_URL}/#business`,
        name: 'Magic Balloons México',
        description,
        url: pageUrl,
        logo: `${SITE_URL}/icons/magicballoons-logo.svg`,
        image: `${SITE_URL}/media/og-cover.jpg`,
        telephone: CONTACT.phone,
        priceRange: `$${Math.min(...prices)} - $${Math.max(...prices)} MXN`,
        currenciesAccepted: 'MXN, USD',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'San Martín de las Pirámides',
            addressRegion: 'Estado de México',
            addressCountry: 'MX'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: place.lat,
            longitude: place.lng
        },
        hasMap: place.maps,
        sameAs: Object.values(CONTACT.social),
        makesOffer: PACKAGES.map(item => ({
            '@type': 'Offer',
            name: item.name,
            description: item.tagline,
            price: item.price,
            priceCurrency: 'MXN',
            url: bookingUrl(item)
        }))
    };
}
