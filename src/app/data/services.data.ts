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
    // One image per slide: there are too few real photos to fill a grid
    // without repeating them across services.
    image: ServiceImage;
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
        image: { src: '/media/woman-pyramids.webp', alt: $localize`:@@services.flights.alt3:Pasajera observando las pirámides desde el globo` },
        phone: '525635362245',
        message: $localize`:@@services.flights.message:Hola, me interesa un vuelo en globo.`
    },
    // General on purpose: each event (Día de Muertos, Christmas...) is a one-off
    // with its own program and price, so dates and prices live on WhatsApp, not
    // here. An elevación is tethered; never call it a flight.
    // PLACEHOLDER images: waiting on real event photos without baked-in text.
    {
        id: 'events',
        slug: 'eventos-especiales',
        name: $localize`:@@services.events.name:Eventos especiales`,
        title: $localize`:@@services.events.title:El globopuerto, de noche`,
        description: [
            $localize`:@@services.events.description1:Varias veces al año, el llano donde despegan nuestros globos se convierte en escenario. En fechas como Día de Muertos o Navidad organizamos noches especiales con espectáculo prehispánico, danza, música en vivo y ceremonia de sahumación, a unos minutos de las pirámides.`,
            $localize`:@@services.events.description2:Muchas de estas noches incluyen camping: te quedas a dormir en el globopuerto y despiertas con los globos inflándose al amanecer. También hacemos elevaciones, en las que el globo sube amarrado al suelo, sin despegar, para que vivas la experiencia desde la canasta.`,
            $localize`:@@services.events.description3:Al reservar puedes rentar casas de campaña para 4 o 6 personas, cobijas y colchonetas, o traer las tuyas. En recepción hay café y pan de cortesía. Cada evento tiene su propio programa y precio: escríbenos por WhatsApp y te contamos del próximo.`
        ],
        highlights: [
            { icon: '', label: $localize`:@@services.events.highlight1:Espectáculo prehispánico` },
            { icon: '', label: $localize`:@@services.events.highlight2:Camping en el globopuerto` },
            { icon: '', label: $localize`:@@services.events.highlight3:Elevaciones en globo` },
            { icon: '', label: $localize`:@@services.events.highlight4:Eventos familiares` }
        ],
        // PLACEHOLDER image: waiting on real event photos without baked-in text.
        image: { src: '/media/couple-dawn.webp', alt: $localize`:@@services.events.alt1:Pareja frente a los globos al amanecer` },
        phone: '525635362245',
        message: $localize`:@@services.events.message:Hola, me interesa el próximo evento especial en el globopuerto.`
    },
    // A hook, not a price list: photos and video are sold separately and the
    // packages vary, so the details are left to sales.
    {
        id: 'photography',
        slug: 'fotografia-y-video',
        name: $localize`:@@services.photography.name:Fotografía y video`,
        title: $localize`:@@services.photography.title:Tu vuelo, en fotos y video`,
        description: [
            $localize`:@@services.photography.description1:Nuestros fotógrafos acompañan tu mañana con cámaras profesionales, desde las primeras fotos en el globopuerto hasta el retrato en la canasta, segundos antes de despegar. Hay accesorios como alas de ángel para quien quiera una foto distinta.`,
            $localize`:@@services.photography.description2:Desde el aire, nuestro dron graba el despegue y el vuelo sobre las pirámides. Puedes llevarte las fotos y los clips tal cual, o editados en un video de tu experiencia.`,
            $localize`:@@services.photography.description3:Antes de irte te entregamos fotos impresas al momento, para que te lleves el recuerdo en la mano. Y si celebras una pedida de mano, un aniversario o un cumpleaños, preparamos letreros y mantas para que quede en la foto.`
        ],
        highlights: [
            { icon: '', label: $localize`:@@services.photography.highlight1:Cámaras profesionales` },
            { icon: '', label: $localize`:@@services.photography.highlight2:Video con dron` },
            { icon: '', label: $localize`:@@services.photography.highlight3:Fotos impresas al momento` },
            { icon: '', label: $localize`:@@services.photography.highlight4:Fotos y video editados o en crudo` }
        ],
        image: { src: '/media/couple-embrace.webp', alt: $localize`:@@services.photography.alt:Pareja abrazada en la canasta del globo` },
        phone: '525635362245',
        message: $localize`:@@services.photography.message:Hola, me interesan las fotos y el video de mi vuelo.`
    }
];


// Defined in contact.data.ts; re-exported so existing imports keep working.
export { whatsappUrl } from './contact.data';
