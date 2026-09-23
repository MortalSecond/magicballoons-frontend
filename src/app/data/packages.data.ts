// Flight packages. Prices must match FareHarbor: the customer pays what
// FareHarbor charges, not what this file says. `bookingId` is the FareHarbor
// item and `flowId` the booking flow, both from the embed links.

export interface FlightPackage
{
    id: string;
    name: string;
    tagline: string;
    price: number;
    priceUnit: string;
    includes: string[];
    image: string;
    imageAlt: string;
    bookingId: string;
    isPrivate: boolean;
}

export const FLOW_ID = '922034';

export const PACKAGES: FlightPackage[] = [
    {
        id: 'esencial',
        name: 'Esencial',
        tagline: 'Vuelo compartido',
        price: 2499,
        priceUnit: 'por persona',
        includes: [
            'Vuelo compartido (aprox. 45 min)',
            'Brindis con vino espumoso',
            'Coffee break',
            'Explicación de la obsidiana y de Teotihuacán',
            'Degustación de vinos y licores',
            'Desayuno buffet',
            'Certificado de vuelo'
        ],
        image: '/media/couple-dawn.webp',
        imageAlt: 'Pareja frente a los globos durante el amanecer',
        bookingId: '448577',
        isPrivate: false
    },
    {
        id: 'experiencia',
        name: 'Experiencia',
        tagline: 'Con transporte desde CDMX',
        price: 2899,
        priceUnit: 'por persona',
        includes: [
            'Vuelo compartido (aprox. 45 min)',
            'Transporte redondo desde CDMX',
            'Entrada a la zona arqueológica',
            'Brindis con vino espumoso',
            'Coffee break',
            'Explicación de la obsidiana y de Teotihuacán',
            'Degustación de vinos y licores',
            'Desayuno buffet',
            'Certificado de vuelo'
        ],
        image: '/media/woman-pyramids.webp',
        imageAlt: 'Pasajera observando las pirámides desde el globo',
        bookingId: '448570',
        isPrivate: false
    },
    {
        id: 'premium',
        name: 'Premium',
        tagline: 'Con desayuno en cueva',
        price: 3200,
        priceUnit: 'por persona',
        includes: [
            'Vuelo compartido (aprox. 45 min)',
            'Transporte redondo desde CDMX',
            'Entrada a la zona arqueológica',
            'Desayuno en cueva',
            'Brindis con vino espumoso',
            'Coffee break',
            'Explicación de la obsidiana y de Teotihuacán',
            'Degustación de vinos y licores',
            'Certificado de vuelo'
        ],
        image: '/media/hero-poster.webp',
        imageAlt: 'Globos de Magic Balloons sobre el valle de Teotihuacán',
        bookingId: '734628',
        isPrivate: false
    },
    {
        id: 'exclusivo',
        name: 'Exclusivo',
        tagline: 'Vuelo privado para dos',
        price: 8990,
        priceUnit: 'por pareja',
        includes: [
            'Vuelo privado',
            'Brindis con vino espumoso',
            'Coffee break',
            'Explicación de la obsidiana y de Teotihuacán',
            'Degustación de vinos y licores',
            'Desayuno buffet',
            'Certificado de vuelo'
        ],
        image: '/media/couple-embrace.webp',
        imageAlt: 'Pareja abrazada durante un vuelo privado',
        bookingId: '448587',
        isPrivate: true
    }
];


// === HELPERS ===

export function bookingUrl(item: FlightPackage): string
{
    return `https://fareharbor.com/embeds/book/magicballoonsmexico/items/${item.bookingId}`
        + `/?full-items=yes&flow=${FLOW_ID}&language=es`;
}
