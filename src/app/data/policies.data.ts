import { POLICY } from './policy.data';

// The written policies, restated from how reception actually operates. They
// replace the old WordPress page, which no longer matched practice. Figures
// come from POLICY so this page and the FAQ can never quote different numbers.

export interface PolicySection
{
    id: string;
    title: string;
    paragraphs: string[];
}

const P = POLICY;

export const POLICIES_UPDATED = $localize`:@@policies.updated:Última actualización: septiembre de 2026`;

export const POLICIES: PolicySection[] = [
    {
        id: 'booking',
        title: $localize`:@@policies.booking.title:Reservas y anticipo`,
        paragraphs: [
            $localize`:@@policies.booking.p1:Puedes reservar en línea o por WhatsApp con uno de nuestros asesores. Todos los precios están en pesos mexicanos (MXN).`,
            $localize`:@@policies.booking.p2:Al reservar se paga un anticipo de $${P.depositPerPassenger}:deposit: MXN por pasajero, que aparta tu lugar en el globo. Cada vuelo se planea la noche anterior según los pasajeros confirmados. El resto se paga el día del vuelo en recepción.`
        ]
    },
    {
        id: 'payment',
        title: $localize`:@@policies.payment.title:Formas de pago`,
        paragraphs: [
            $localize`:@@policies.payment.p1:En recepción aceptamos efectivo, transferencia bancaria y tarjeta de débito o crédito. Los pagos con tarjeta tienen un cargo adicional de ${P.cardFeePercent}:cardFee:% por el uso de la terminal.`,
            $localize`:@@policies.payment.p2:Al reservar también puedes pagar con PayPal, con un cargo adicional de ${P.paypalFeePercent}:paypalFee:%. Aceptamos dólares estadounidenses a un tipo de cambio fijo de $${P.pesosPerDollar}:rate: MXN por dólar.`
        ]
    },
    {
        id: 'weight',
        title: $localize`:@@policies.weight.title:Pesaje y cargo por peso`,
        paragraphs: [
            $localize`:@@policies.weight.p1:Todos los pasajeros se pesan en recepción antes de volar. Es obligatorio: el piloto distribuye a los pasajeros en la canasta según su peso para mantener el globo equilibrado.`,
            $localize`:@@policies.weight.p2:A partir de ${P.surchargeFromKg}:fromKg: kg se cobra un cargo de $${P.surchargePerKg}:perKg: MXN por cada kilo adicional. Si pesas más de ${P.weightWarningKg}:warningKg: kg, consúltanos antes de reservar.`
        ]
    },
    {
        id: 'children',
        title: $localize`:@@policies.children.title:Niños`,
        paragraphs: [
            $localize`:@@policies.children.p1:Los niños pagan la tarifa completa, ya que ocupan su propio lugar en la canasta, en el transporte y en el desayuno. La edad mínima para volar es de ${P.minimumAge}:minimumAge: años; los menores de esa edad no suben al globo, pero sí disfrutan del resto de la experiencia.`
        ]
    },
    {
        id: 'changes',
        title: $localize`:@@policies.changes.title:Cambios, cancelaciones e inasistencias`,
        paragraphs: [
            $localize`:@@policies.changes.p1:Puedes cambiar la fecha de tu vuelo sin costo si nos avisas por WhatsApp con al menos 48 horas de anticipación. La nueva fecha debe ser dentro de los tres meses siguientes.`,
            $localize`:@@policies.changes.p2:Las cancelaciones hechas entre 48 y 12 horas antes del vuelo tienen un cargo del 30% del total. Con menos de 12 horas de aviso, el anticipo no es reembolsable.`,
            $localize`:@@policies.changes.p3:El día del vuelo solo pagan los pasajeros que vuelan. El anticipo de un pasajero que no se presenta no es reembolsable, ya que su lugar estaba apartado en el plan de vuelo.`
        ]
    },
    {
        id: 'weather',
        title: $localize`:@@policies.weather.title:Clima y seguridad operacional`,
        paragraphs: [
            $localize`:@@policies.weather.p1:La decisión de volar la toman el piloto y la dirección operativa cada mañana, siempre con la seguridad como prioridad. Si otras empresas deciden volar y nosotros no, prevalece nuestro criterio de seguridad.`,
            $localize`:@@policies.weather.p2:Si el viento, la lluvia, una tormenta eléctrica o la neblina impiden volar, reprogramamos tu vuelo sin costo y tu anticipo se conserva para la nueva fecha.`,
            $localize`:@@policies.weather.p3:El vuelo dura alrededor de ${P.flightMinutes}:minutes: minutos. La ruta y el lugar de aterrizaje dependen del viento y de las zonas seguras disponibles, a criterio del piloto.`
        ]
    },
    {
        id: 'health',
        title: $localize`:@@policies.health.title:Restricciones de salud`,
        paragraphs: [
            $localize`:@@policies.health.p1:Por seguridad no pueden volar mujeres embarazadas, personas con enfermedades del corazón o cirugías recientes, personas con problemas de columna, usuarios de silla de ruedas, ni personas bajo los efectos del alcohol u otras sustancias.`
        ]
    },
    {
        id: 'belongings',
        title: $localize`:@@policies.belongings.title:Pertenencias`,
        paragraphs: [
            $localize`:@@policies.belongings.p1:Solo se permite subir al globo tu celular, una cámara y objetos pequeños. No se permiten mochilas ni bolsas de ningún tamaño, ni armas de ningún tipo. Contamos con casilleros gratuitos para todo lo demás.`
        ]
    },
    {
        id: 'media',
        title: $localize`:@@policies.media.title:Fotografía y video`,
        paragraphs: [
            $localize`:@@policies.media.p1:Durante la experiencia, nuestros fotógrafos y drones pueden captar fotos y video. Al participar, autorizas el uso de estas imágenes con fines promocionales de Magic Balloons, siempre con respeto a tu dignidad y privacidad.`,
            $localize`:@@policies.media.p2:Las fotos y videos se venden por separado y no forman parte de los paquetes de vuelo.`
        ]
    },
    {
        id: 'privacy',
        title: $localize`:@@policies.privacy.title:Privacidad`,
        paragraphs: [
            $localize`:@@policies.privacy.p1:Recabamos los datos necesarios para operar tu vuelo con seguridad, como tu nombre, teléfono, correo, edad y peso. Los usamos para gestionar tu reserva, planear el vuelo y cumplir con la normativa aplicable.`,
            $localize`:@@policies.privacy.p2:No compartimos tus datos con terceros, salvo por mandato legal. Puedes solicitar que los eliminemos escribiéndonos por WhatsApp.`
        ]
    }
];
