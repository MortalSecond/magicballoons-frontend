import { POLICY } from './policy.data';

// Questions people ask before booking, grouped. Answers state what reception
// actually does; figures come from POLICY so they are never retyped.

export interface FaqItem
{
    id: string;
    question: string;
    answer: string;
}

export interface FaqGroup
{
    id: string;
    title: string;
    items: FaqItem[];
}

const P = POLICY;

// The weight example is two kilos over the threshold, derived so it can never
// disagree with the rate it illustrates.
const EXAMPLE_KG = Number(P.surchargeFromKg) + 2;
const EXAMPLE_COST = 2 * Number(P.surchargePerKg);

export const FAQ: FaqGroup[] = [
    {
        id: 'booking',
        title: $localize`:@@faq.group.booking:Reserva y pagos`,
        items: [
            {
                id: 'how-to-book',
                question: $localize`:@@faq.howToBook.question:¿Cómo reservo?`,
                answer: $localize`:@@faq.howToBook.answer:En línea con el botón Reservar, o por WhatsApp con uno de nuestros asesores.`
            },
            {
                id: 'deposit',
                question: $localize`:@@faq.deposit.question:¿Tengo que dejar un anticipo?`,
                answer: $localize`:@@faq.deposit.answer:Sí, $${P.depositPerPassenger}:deposit: MXN por pasajero al reservar. Planeamos cada vuelo la noche anterior según los pasajeros confirmados, y el anticipo aparta tu lugar en la canasta. El resto lo pagas el día del vuelo en recepción.`
            },
            {
                id: 'payment',
                question: $localize`:@@faq.payment.question:¿Cómo puedo pagar?`,
                answer: $localize`:@@faq.payment.answer:En recepción aceptamos efectivo, transferencia y tarjeta; la terminal cobra un ${P.cardFeePercent}:cardFee:% adicional. Al reservar también puedes pagar con PayPal, con un cargo de ${P.paypalFeePercent}:paypalFee:%. Aceptamos dólares a un tipo de cambio fijo de $${P.pesosPerDollar}:rate: MXN por dólar.`
            },
            {
                id: 'weight',
                question: $localize`:@@faq.weight.question:¿Hay un cargo por peso?`,
                answer: $localize`:@@faq.weight.answer:Sí. Por seguridad pesamos a cada pasajero en recepción, y a partir de ${P.surchargeFromKg}:fromKg: kg se cobran $${P.surchargePerKg}:perKg: MXN por cada kilo adicional. Por ejemplo, un pasajero de ${EXAMPLE_KG}:exampleKg: kg paga $${EXAMPLE_COST}:exampleCost: MXN extra.`
            },
            {
                id: 'children',
                question: $localize`:@@faq.children.question:¿Los niños pagan menos?`,
                answer: $localize`:@@faq.children.answer:No. Los niños ocupan su propio lugar en la canasta, en el transporte y en el desayuno. Pueden volar a partir de los ${P.minimumAge}:minimumAge: años; los más pequeños no suben al globo, pero sí disfrutan del resto de la experiencia.`
            }
        ]
    },
    {
        id: 'changes',
        title: $localize`:@@faq.group.changes:Cambios y cancelaciones`,
        items: [
            {
                id: 'reschedule',
                question: $localize`:@@faq.reschedule.question:¿Puedo cambiar la fecha?`,
                answer: $localize`:@@faq.reschedule.answer:Sí, sin costo, si nos avisas por WhatsApp con al menos 48 horas de anticipación. La nueva fecha debe ser dentro de los tres meses siguientes.`
            },
            {
                id: 'cancel',
                question: $localize`:@@faq.cancel.question:¿Y si necesito cancelar?`,
                answer: $localize`:@@faq.cancel.answer:Si cancelas entre 48 y 12 horas antes del vuelo, se cobra el 30% del total. Con menos de 12 horas de aviso, el anticipo no es reembolsable.`
            },
            {
                id: 'no-show',
                question: $localize`:@@faq.noShow.question:¿Qué pasa si alguien de mi grupo no llega?`,
                answer: $localize`:@@faq.noShow.answer:El día del vuelo solo pagan quienes vuelan: si reservaron cinco y llegan cuatro, pagan cuatro. El anticipo de quien no llegó no se reembolsa, porque su lugar ya estaba apartado en el plan de vuelo.`
            },
            {
                id: 'weather',
                question: $localize`:@@faq.weather.question:¿Y si el clima no permite volar?`,
                answer: $localize`:@@faq.weather.answer:El piloto decide cada mañana, siempre por seguridad. Si el viento, la lluvia o la neblina impiden volar, reprogramamos tu vuelo contigo sin ningún costo, y tu anticipo se queda apartando tu nueva fecha.`
            }
        ]
    },
    {
        id: 'flight-day',
        title: $localize`:@@faq.group.flightDay:El día del vuelo`,
        items: [
            {
                id: 'arrival',
                question: $localize`:@@faq.arrival.question:¿A qué hora debo llegar?`,
                answer: $localize`:@@faq.arrival.answer:A las ${P.arrivalTime}:arrivalTime: a.m. a nuestro globopuerto en Teotihuacán; te confirmamos la hora exacta la noche anterior. Hay estacionamiento amplio a unos pasos de recepción.`
            },
            {
                id: 'pickup',
                question: $localize`:@@faq.pickup.question:¿Pasan por mí?`,
                answer: $localize`:@@faq.pickup.answer:Si tu paquete incluye transporte, te recogemos en cualquier dirección dentro de la Ciudad de México. Tu chofer te llama la noche anterior o esa misma mañana para confirmar el punto de encuentro.`
            },
            {
                id: 'duration',
                question: $localize`:@@faq.duration.question:¿Cuánto dura el vuelo?`,
                answer: $localize`:@@faq.duration.answer:Alrededor de ${P.flightMinutes}:minutes: minutos en el aire. La ruta y el lugar de aterrizaje dependen del viento de ese día.`
            },
            {
                id: 'clothing',
                question: $localize`:@@faq.clothing.question:¿Qué ropa llevo?`,
                answer: $localize`:@@faq.clothing.answer:Ropa ligera y cómoda. Al amanecer hace fresco, pero junto al quemador hace mucho calor, así que un abrigo grueso solo estorba. Puedes llegar abrigado y dejar tu chamarra en nuestros casilleros gratuitos.`
            },
            {
                id: 'bags',
                question: $localize`:@@faq.bags.question:¿Qué puedo subir al globo?`,
                answer: $localize`:@@faq.bags.answer:Tu celular, una cámara y objetos pequeños. No se permiten mochilas ni bolsas, ni siquiera bolsos pequeños, porque pueden atorarse durante el vuelo. Todo lo demás se queda seguro en nuestros casilleros gratuitos.`
            },
            {
                id: 'photos',
                question: $localize`:@@faq.photos.question:¿Las fotos están incluidas?`,
                answer: $localize`:@@faq.photos.answer:Se venden por separado. Nuestros fotógrafos toman fotos y video con dron, y puedes elegir entre paquetes de $${P.photosFrom}:photosFrom: a $${P.photosTo}:photosTo: MXN, editados o sin editar.`
            },
            {
                id: 'celebrations',
                question: $localize`:@@faq.celebrations.question:¿Puedo celebrar algo especial?`,
                answer: $localize`:@@faq.celebrations.answer:¡Claro! Tenemos letreros y lonas para pedidas de mano, declaraciones de amor, aniversarios, cumpleaños y hasta para preguntar "¿quieres ser mi novia?". Escríbenos por WhatsApp para prepararlo.`
            }
        ]
    },
    {
        id: 'safety',
        title: $localize`:@@faq.group.safety:Seguridad`,
        items: [
            {
                id: 'is-it-safe',
                question: $localize`:@@faq.safe.question:¿Es seguro volar en globo?`,
                answer: $localize`:@@faq.safe.answer:Sí. Somos una empresa certificada por la AFAC, nuestros pilotos están certificados y cada vuelo se decide esa misma mañana según el clima. Solo te pedimos seguir en todo momento las indicaciones del piloto.`
            },
            {
                id: 'restrictions',
                question: $localize`:@@faq.restrictions.question:¿Quién no puede volar?`,
                answer: $localize`:@@faq.restrictions.answer:Por seguridad no pueden volar mujeres embarazadas, personas con enfermedades del corazón o cirugías recientes, con problemas de columna, usuarios de silla de ruedas, ni personas bajo los efectos del alcohol u otras sustancias. Si pesas más de ${P.weightWarningKg}:warningKg: kg, consúltanos antes de reservar: la altura exige mucho al corazón.`
            }
        ]
    }
];
