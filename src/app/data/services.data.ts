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
        name: $localize`:@@services.flights.name:Vuelos en globo`,
        title: $localize`:@@services.flights.title:Vuela sobre Teotihuacán`,
        description: [
            $localize`:@@services.flights.description1:Despegamos al amanecer desde nuestro globopuerto y volamos sobre la zona arqueológica, con la Pirámide del Sol y la de la Luna bajo la canasta.`,
            $localize`:@@services.flights.description2:Cada vuelo termina con el brindis tradicional y el certificado de vuelo. Según el paquete, incluye desayuno buffet o desayuno en cueva.`
        ],
        highlights: [
            { icon: '/icons/shield-check.svg', label: $localize`:@@services.flights.highlight1:Empresa certificada por la AFAC` },
            { icon: '/icons/people.svg', label: $localize`:@@services.flights.highlight2:Vuelos compartidos y privados` },
            { icon: '/icons/van.svg', label: $localize`:@@services.flights.highlight3:Transporte desde CDMX` },
            { icon: '/icons/award.svg', label: $localize`:@@services.flights.highlight4:Certificado de vuelo` }
        ],
        gallery: [
            { src: '/media/hero-poster.webp', alt: $localize`:@@services.flights.alt1:Globos sobre el valle de Teotihuacán` },
            { src: '/media/couple-embrace.webp', alt: $localize`:@@services.flights.alt2:Pareja abrazada durante el vuelo` },
            { src: '/media/woman-pyramids.webp', alt: $localize`:@@services.flights.alt3:Pasajera observando las pirámides desde el globo` },
            { src: '/media/couple-dawn.webp', alt: $localize`:@@services.flights.alt4:Pareja frente a los globos al amanecer` },
            { src: '/media/cave.webp', alt: $localize`:@@services.flights.alt5:Desayuno en cueva` },
            { src: '/media/combi.webp', alt: $localize`:@@services.flights.alt6:Transporte de Magic Balloons desde CDMX` }
        ],
        phone: '525635362245',
        message: $localize`:@@services.flights.message:Hola, me interesa un vuelo en globo.`
    },
    // PLACEHOLDER: waiting on the client for this service's copy, photos and number.
    {
        id: 'service-two',
        slug: 'servicio-dos',
        name: $localize`:@@services.serviceTwo.name:Lorem ipsum`,
        title: $localize`:@@services.serviceTwo.title:Lorem ipsum dolor sit amet`,
        description: [
            $localize`:@@services.serviceTwo.description1:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            $localize`:@@services.serviceTwo.description2:Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        ],
        highlights: [
            { icon: '', label: $localize`:@@services.serviceTwo.highlight1:Lorem ipsum dolor` },
            { icon: '', label: $localize`:@@services.serviceTwo.highlight2:Consectetur adipiscing` },
            { icon: '', label: $localize`:@@services.serviceTwo.highlight3:Sed do eiusmod` }
        ],
        gallery: [
            { src: '/media/couple-dawn.webp', alt: $localize`:@@services.serviceTwo.alt1:Lorem ipsum` },
            { src: '/media/hero-poster.webp', alt: $localize`:@@services.serviceTwo.alt2:Lorem ipsum` },
            { src: '/media/couple-embrace.webp', alt: $localize`:@@services.serviceTwo.alt3:Lorem ipsum` },
            { src: '/media/combi.webp', alt: $localize`:@@services.serviceTwo.alt4:Lorem ipsum` },
            { src: '/media/woman-pyramids.webp', alt: $localize`:@@services.serviceTwo.alt5:Lorem ipsum` },
            { src: '/media/cave.webp', alt: $localize`:@@services.serviceTwo.alt6:Lorem ipsum` }
        ],
        phone: '525635362245',
        message: $localize`:@@services.serviceTwo.message:Hola, me interesa lorem ipsum.`
    },
    // PLACEHOLDER: waiting on the client for this service's copy, photos and number.
    {
        id: 'service-three',
        slug: 'servicio-tres',
        name: $localize`:@@services.serviceThree.name:Dolor sit amet`,
        title: $localize`:@@services.serviceThree.title:Dolor sit amet consectetur`,
        description: [
            $localize`:@@services.serviceThree.description1:Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            $localize`:@@services.serviceThree.description2:Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        ],
        highlights: [
            { icon: '', label: $localize`:@@services.serviceThree.highlight1:Duis aute irure` },
            { icon: '', label: $localize`:@@services.serviceThree.highlight2:Excepteur sint` },
            { icon: '', label: $localize`:@@services.serviceThree.highlight3:Occaecat cupidatat` }
        ],
        gallery: [
            { src: '/media/woman-pyramids.webp', alt: $localize`:@@services.serviceThree.alt1:Lorem ipsum` },
            { src: '/media/cave.webp', alt: $localize`:@@services.serviceThree.alt2:Lorem ipsum` },
            { src: '/media/couple-dawn.webp', alt: $localize`:@@services.serviceThree.alt3:Lorem ipsum` },
            { src: '/media/hero-poster.webp', alt: $localize`:@@services.serviceThree.alt4:Lorem ipsum` },
            { src: '/media/combi.webp', alt: $localize`:@@services.serviceThree.alt5:Lorem ipsum` },
            { src: '/media/couple-embrace.webp', alt: $localize`:@@services.serviceThree.alt6:Lorem ipsum` }
        ],
        phone: '525635362245',
        message: $localize`:@@services.serviceThree.message:Hola, me interesa dolor sit amet.`
    }
];


// === HELPERS ===

export function whatsappUrl(phone: string, message: string): string
{
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
