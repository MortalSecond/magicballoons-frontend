// The lines of business shown in the services carousel. Each service answers a
// different search and will get its own route, so `slug` is a URL segment and
// must not change once indexed. `phone` is digits only, in international form,
// for wa.me links: each line of business has its own WhatsApp number.

export interface ServiceImage
{
    src: string;
    alt: string;
}

export interface ServiceHighlight
{
    // Path to a black single-colour SVG in /icons, or '' for a plain marker.
    icon: string;
    label: string;
}

export interface Service
{
    id: string;
    slug: string;
    name: string;
    title: string;
    description: string[];
    highlights: ServiceHighlight[];
    gallery: ServiceImage[];
    phone: string;
    message: string;
}

export const SERVICES: Service[] = [
    {
        id: 'flights',
        slug: 'vuelos-en-globo',
        name: 'Vuelos en globo',
        title: 'Vuela sobre Teotihuacán',
        description: [
            'Despegamos al amanecer desde nuestro globopuerto y volamos sobre la zona arqueológica, con la Pirámide del Sol y la de la Luna bajo la canasta.',
            'Cada vuelo termina con el brindis tradicional y el certificado de vuelo. Según el paquete, incluye desayuno buffet o desayuno en cueva.'
        ],
        highlights: [
            { icon: '/icons/shield-check.svg', label: 'Empresa certificada por la AFAC' },
            { icon: '/icons/people.svg', label: 'Vuelos compartidos y privados' },
            { icon: '/icons/van.svg', label: 'Transporte desde CDMX' },
            { icon: '/icons/award.svg', label: 'Certificado de vuelo' }
        ],
        gallery: [
            { src: '/media/hero-poster.webp', alt: 'Globos sobre el valle de Teotihuacán' },
            { src: '/media/couple-embrace.webp', alt: 'Pareja abrazada durante el vuelo' },
            { src: '/media/woman-pyramids.webp', alt: 'Pasajera observando las pirámides desde el globo' },
            { src: '/media/couple-dawn.webp', alt: 'Pareja frente a los globos al amanecer' },
            { src: '/media/cave.webp', alt: 'Desayuno en cueva' },
            { src: '/media/combi.webp', alt: 'Transporte de Magic Balloons desde CDMX' }
        ],
        phone: '525635362245',
        message: 'Hola, me interesa un vuelo en globo.'
    },
    // PLACEHOLDER: waiting on the client for this service's copy, photos and number.
    {
        id: 'service-two',
        slug: 'servicio-dos',
        name: 'Lorem ipsum',
        title: 'Lorem ipsum dolor sit amet',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        highlights: [
            { icon: '', label: 'Lorem ipsum dolor' },
            { icon: '', label: 'Consectetur adipiscing' },
            { icon: '', label: 'Sed do eiusmod' }
        ],
        gallery: [
            { src: '/media/couple-dawn.webp', alt: 'Lorem ipsum' },
            { src: '/media/hero-poster.webp', alt: 'Lorem ipsum' },
            { src: '/media/couple-embrace.webp', alt: 'Lorem ipsum' },
            { src: '/media/combi.webp', alt: 'Lorem ipsum' },
            { src: '/media/woman-pyramids.webp', alt: 'Lorem ipsum' },
            { src: '/media/cave.webp', alt: 'Lorem ipsum' }
        ],
        phone: '525635362245',
        message: 'Hola, me interesa lorem ipsum.'
    },
    // PLACEHOLDER: waiting on the client for this service's copy, photos and number.
    {
        id: 'service-three',
        slug: 'servicio-tres',
        name: 'Dolor sit amet',
        title: 'Dolor sit amet consectetur',
        description: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        highlights: [
            { icon: '', label: 'Duis aute irure' },
            { icon: '', label: 'Excepteur sint' },
            { icon: '', label: 'Occaecat cupidatat' }
        ],
        gallery: [
            { src: '/media/woman-pyramids.webp', alt: 'Lorem ipsum' },
            { src: '/media/cave.webp', alt: 'Lorem ipsum' },
            { src: '/media/couple-dawn.webp', alt: 'Lorem ipsum' },
            { src: '/media/hero-poster.webp', alt: 'Lorem ipsum' },
            { src: '/media/combi.webp', alt: 'Lorem ipsum' },
            { src: '/media/couple-embrace.webp', alt: 'Lorem ipsum' }
        ],
        phone: '525635362245',
        message: 'Hola, me interesa dolor sit amet.'
    }
];


// === HELPERS ===

export function whatsappUrl(phone: string, message: string): string
{
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
