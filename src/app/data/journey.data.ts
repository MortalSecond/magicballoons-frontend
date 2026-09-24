// A flight day from booking to drop-off, in order. `phase` groups the steps on
// the timeline; a label only shows where the phase changes.

export type JourneyTagKind = 'condition' | 'safety';

export interface JourneyTag
{
    kind: JourneyTagKind;
    label: string;
}

export interface JourneyStep
{
    id: string;
    phase: string;
    title: string;
    text: string;
    tags: JourneyTag[];
}

const WITH_TRANSPORT: JourneyTag = { kind: 'condition', label: 'Con transporte' };
const DEPENDS_ON_PACKAGE: JourneyTag = { kind: 'condition', label: 'Según tu paquete' };
const FOR_SAFETY: JourneyTag = { kind: 'safety', label: 'Por tu seguridad' };

export const JOURNEY: JourneyStep[] = [
    {
        id: 'booking',
        phase: 'Antes del vuelo',
        title: 'Reserva tu fecha',
        text: 'Elige tu paquete y el día que quieres volar. Los vuelos son al amanecer, entre las 4:00 y las 8:00: por norma de la AFAC, ningún globo puede estar en el aire después de las 9:00.',
        tags: []
    },
    {
        id: 'pickup',
        phase: 'Antes del vuelo',
        title: 'Pasamos por ti',
        text: 'El día del vuelo, uno de nuestros choferes te recoge en tu hotel o en el punto que elijas y te lleva a nuestro globopuerto.',
        tags: [WITH_TRANSPORT]
    },
    {
        id: 'check-in',
        phase: 'En el globopuerto',
        title: 'Registro y pesaje',
        text: 'En recepción te registras y te pesamos. Es obligatorio: el piloto acomoda a los pasajeros en la canasta según su peso para mantener el globo equilibrado.',
        tags: [FOR_SAFETY]
    },
    {
        id: 'coffee',
        phase: 'En el globopuerto',
        title: 'Coffee break',
        text: 'Mientras se infla tu globo, esperas en el área de coffee break con café, té y pan.',
        tags: []
    },
    {
        id: 'photos',
        phase: 'En el globopuerto',
        title: 'Sesión de fotos',
        text: 'Nuestros fotógrafos te toman fotos en distintas poses y con accesorios, siempre que tú quieras.',
        tags: []
    },
    {
        id: 'flight',
        phase: 'En el aire',
        title: 'Despegue al amanecer',
        text: 'Despegas y vuelas sobre Teotihuacán mientras sale el sol. La ruta la decide el viento de ese día: el piloto siempre busca la mejor vista, y por eso cada vuelo es distinto.',
        tags: []
    },
    {
        id: 'toast',
        phase: 'En el aire',
        title: 'Aterrizaje y brindis',
        text: 'Al aterrizar brindamos como en los primeros vuelos en globo en Francia, cuando los aeronautas celebraban con champaña junto al pueblo donde bajaban.',
        tags: []
    },
    {
        id: 'return',
        phase: 'De regreso',
        title: 'Regreso al globopuerto',
        text: 'Volvemos al globopuerto. Si tu paquete lo incluye, hacemos una parada en la zona arqueológica.',
        tags: [DEPENDS_ON_PACKAGE]
    },
    {
        id: 'certificate',
        phase: 'De regreso',
        title: 'Tu certificado de vuelo',
        text: 'En recepción recibes tu certificado. Puedes comer algo más y llevarte un recuerdo de nuestra tienda.',
        tags: []
    },
    {
        id: 'drop-off',
        phase: 'De regreso',
        title: 'Te llevamos de vuelta',
        text: 'Tu chofer te lleva de regreso a tu hotel o a tu punto de partida.',
        tags: [WITH_TRANSPORT]
    }
];
