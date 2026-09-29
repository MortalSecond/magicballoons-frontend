import { FAREHARBOR_LANGUAGE } from './contact.data';

// Flight packages. Prices must match FareHarbor: the customer pays what
// FareHarbor charges, not what this file says. `bookingId` is the FareHarbor
// item and `flowId` the booking flow, both from the embed links.

export interface FlightPackage
{
    id: string;
    name: string;
    tagline: string;
    // The card's pitch in plain language; `includes` stays as the checklist.
    description: string;
    price: number;
    priceUnit: string;
    includes: string[];
    image: string;
    imageAlt: string;
    bookingId: string;
    isPrivate: boolean;
}

export const FLOW_ID = '922034';

// Lines shared by several packages, so each is written and translated once.
const INCLUDES = {
    sharedFlight: $localize`:@@includes.sharedFlight:Vuelo compartido (aprox. 45 min)`,
    privateFlight: $localize`:@@includes.privateFlight:Vuelo privado`,
    transport: $localize`:@@includes.transport:Transporte redondo desde CDMX`,
    archaeologicalZone: $localize`:@@includes.archaeologicalZone:Entrada a la zona arqueológica`,
    toast: $localize`:@@includes.toast:Brindis con vino espumoso`,
    coffeeBreak: $localize`:@@includes.coffeeBreak:Coffee break`,
    obsidian: $localize`:@@includes.obsidian:Explicación de la obsidiana y de Teotihuacán`,
    tasting: $localize`:@@includes.tasting:Degustación de vinos y licores`,
    buffet: $localize`:@@includes.buffet:Desayuno buffet`,
    cave: $localize`:@@includes.cave:Desayuno en cueva`,
    certificate: $localize`:@@includes.certificate:Certificado de vuelo`
};

const PER_PERSON = $localize`:@@packages.perPerson:por persona`;
const PER_COUPLE = $localize`:@@packages.perCouple:por pareja`;

export const PACKAGES: FlightPackage[] = [
    {
        id: 'esencial',
        name: $localize`:@@packages.esencial.name:Esencial`,
        tagline: $localize`:@@packages.esencial.tagline:Vuelo compartido`,
        description: $localize`:@@packages.esencial.description:Vuela al amanecer en un vuelo compartido de unos 45 minutos sobre la Pirámide del Sol y la de la Luna. Al aterrizar brindamos con vino espumoso, recibes tu certificado de vuelo y cerramos la mañana con desayuno buffet, degustación de vinos y licores y una charla sobre la obsidiana y la historia de Teotihuacán.`,
        price: 2499,
        priceUnit: PER_PERSON,
        includes: [
            INCLUDES.sharedFlight,
            INCLUDES.toast,
            INCLUDES.coffeeBreak,
            INCLUDES.obsidian,
            INCLUDES.tasting,
            INCLUDES.buffet,
            INCLUDES.certificate
        ],
        image: '/media/couple-dawn.webp',
        imageAlt: $localize`:@@packages.esencial.imageAlt:Pareja frente a los globos durante el amanecer`,
        bookingId: '448577',
        isPrivate: false
    },
    {
        id: 'experiencia',
        name: $localize`:@@packages.experiencia.name:Experiencia`,
        tagline: $localize`:@@packages.experiencia.tagline:Con transporte desde CDMX`,
        description: $localize`:@@packages.experiencia.description:Todo lo del vuelo Esencial, sin preocuparte por cómo llegar: te recogemos en la Ciudad de México y te llevamos de regreso. Después del vuelo y el desayuno buffet, entras a la zona arqueológica para recorrer a pie las pirámides que viste desde el cielo.`,
        price: 2899,
        priceUnit: PER_PERSON,
        includes: [
            INCLUDES.sharedFlight,
            INCLUDES.transport,
            INCLUDES.archaeologicalZone,
            INCLUDES.toast,
            INCLUDES.coffeeBreak,
            INCLUDES.obsidian,
            INCLUDES.tasting,
            INCLUDES.buffet,
            INCLUDES.certificate
        ],
        image: '/media/woman-pyramids.webp',
        imageAlt: $localize`:@@packages.experiencia.imageAlt:Pasajera observando las pirámides desde el globo`,
        bookingId: '448570',
        isPrivate: false
    },
    {
        id: 'premium',
        name: $localize`:@@packages.premium.name:Premium`,
        tagline: $localize`:@@packages.premium.tagline:Con desayuno en cueva`,
        description: $localize`:@@packages.premium.description:Vuelo compartido con transporte redondo desde CDMX y entrada a la zona arqueológica, y en lugar del buffet, un desayuno dentro de una cueva. El brindis, la degustación de vinos y licores y tu certificado de vuelo también van incluidos.`,
        price: 3200,
        priceUnit: PER_PERSON,
        includes: [
            INCLUDES.sharedFlight,
            INCLUDES.transport,
            INCLUDES.archaeologicalZone,
            INCLUDES.cave,
            INCLUDES.toast,
            INCLUDES.coffeeBreak,
            INCLUDES.obsidian,
            INCLUDES.tasting,
            INCLUDES.certificate
        ],
        image: '/media/hero-poster.webp',
        imageAlt: $localize`:@@packages.premium.imageAlt:Globos de Magic Balloons sobre el valle de Teotihuacán`,
        bookingId: '734628',
        isPrivate: false
    },
    {
        id: 'exclusivo',
        name: $localize`:@@packages.exclusivo.name:Exclusivo`,
        tagline: $localize`:@@packages.exclusivo.tagline:Vuelo privado para dos`,
        description: $localize`:@@packages.exclusivo.description:Una canasta solo para ustedes dos y el piloto, perfecta para una pedida de mano o un aniversario. Vuelo privado al amanecer, brindis con vino espumoso, certificado de vuelo y desayuno buffet con degustación de vinos y licores.`,
        price: 8990,
        priceUnit: PER_COUPLE,
        includes: [
            INCLUDES.privateFlight,
            INCLUDES.toast,
            INCLUDES.coffeeBreak,
            INCLUDES.obsidian,
            INCLUDES.tasting,
            INCLUDES.buffet,
            INCLUDES.certificate
        ],
        image: '/media/couple-embrace.webp',
        imageAlt: $localize`:@@packages.exclusivo.imageAlt:Pareja abrazada durante un vuelo privado`,
        bookingId: '448587',
        isPrivate: true
    }
];


// === HELPERS ===

export function bookingUrl(item: FlightPackage): string
{
    return `https://fareharbor.com/embeds/book/magicballoonsmexico/items/${item.bookingId}`
        + `/?full-items=yes&flow=${FLOW_ID}&language=${FAREHARBOR_LANGUAGE}`;
}
