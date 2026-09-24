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

const WITH_TRANSPORT: JourneyTag = { kind: 'condition', label: $localize`:@@journey.tag.transport:Con transporte` };
const DEPENDS_ON_PACKAGE: JourneyTag = { kind: 'condition', label: $localize`:@@journey.tag.package:Según tu paquete` };
const FOR_SAFETY: JourneyTag = { kind: 'safety', label: $localize`:@@journey.tag.safety:Por tu seguridad` };

// Phases repeat on every step, so each is translated once.
const PHASES = {
    before: $localize`:@@journey.phase.before:Antes del vuelo`,
    balloonport: $localize`:@@journey.phase.balloonport:En el globopuerto`,
    air: $localize`:@@journey.phase.air:En el aire`,
    return: $localize`:@@journey.phase.return:De regreso`
};

export const JOURNEY: JourneyStep[] = [
    {
        id: 'booking',
        phase: PHASES.before,
        title: $localize`:@@journey.booking.title:Reserva tu fecha`,
        text: $localize`:@@journey.booking.text:Elige tu paquete y el día que quieres volar. Los vuelos son al amanecer, entre las 4:00 y las 8:00: por norma de la AFAC, ningún globo puede estar en el aire después de las 9:00.`,
        tags: []
    },
    {
        id: 'pickup',
        phase: PHASES.before,
        title: $localize`:@@journey.pickup.title:Pasamos por ti`,
        text: $localize`:@@journey.pickup.text:El día del vuelo, uno de nuestros choferes te recoge en tu hotel o en el punto que elijas y te lleva a nuestro globopuerto.`,
        tags: [WITH_TRANSPORT]
    },
    {
        id: 'check-in',
        phase: PHASES.balloonport,
        title: $localize`:@@journey.checkIn.title:Registro y pesaje`,
        text: $localize`:@@journey.checkIn.text:En recepción te registras y te pesamos. Es obligatorio: el piloto acomoda a los pasajeros en la canasta según su peso para mantener el globo equilibrado.`,
        tags: [FOR_SAFETY]
    },
    {
        id: 'coffee',
        phase: PHASES.balloonport,
        title: $localize`:@@journey.coffee.title:Coffee break`,
        text: $localize`:@@journey.coffee.text:Mientras se infla tu globo, esperas en el área de coffee break con café, té y pan.`,
        tags: []
    },
    {
        id: 'photos',
        phase: PHASES.balloonport,
        title: $localize`:@@journey.photos.title:Sesión de fotos`,
        text: $localize`:@@journey.photos.text:Nuestros fotógrafos te toman fotos en distintas poses y con accesorios, siempre que tú quieras.`,
        tags: []
    },
    {
        id: 'flight',
        phase: PHASES.air,
        title: $localize`:@@journey.flight.title:Despegue al amanecer`,
        text: $localize`:@@journey.flight.text:Despegas y vuelas sobre Teotihuacán mientras sale el sol. La ruta la decide el viento de ese día: el piloto siempre busca la mejor vista, y por eso cada vuelo es distinto.`,
        tags: []
    },
    {
        id: 'toast',
        phase: PHASES.air,
        title: $localize`:@@journey.toast.title:Aterrizaje y brindis`,
        text: $localize`:@@journey.toast.text:Al aterrizar brindamos como en los primeros vuelos en globo en Francia, cuando los aeronautas celebraban con champaña junto al pueblo donde bajaban.`,
        tags: []
    },
    {
        id: 'return',
        phase: PHASES.return,
        title: $localize`:@@journey.return.title:Regreso al globopuerto`,
        text: $localize`:@@journey.return.text:Volvemos al globopuerto. Si tu paquete lo incluye, hacemos una parada en la zona arqueológica.`,
        tags: [DEPENDS_ON_PACKAGE]
    },
    {
        id: 'certificate',
        phase: PHASES.return,
        title: $localize`:@@journey.certificate.title:Tu certificado de vuelo`,
        text: $localize`:@@journey.certificate.text:En recepción recibes tu certificado. Puedes comer algo más y llevarte un recuerdo de nuestra tienda.`,
        tags: []
    },
    {
        id: 'drop-off',
        phase: PHASES.return,
        title: $localize`:@@journey.dropOff.title:Te llevamos de vuelta`,
        text: $localize`:@@journey.dropOff.text:Tu chofer te lleva de regreso a tu hotel o a tu punto de partida.`,
        tags: [WITH_TRANSPORT]
    }
];
