import { Component } from '@angular/core';
import { FAQ } from '../../../../data/faq.data';
import { CONTACT } from '../../../../data/contact.data';
import { whatsappUrl } from '../../../../data/services.data';

@Component({
    imports: [],
    selector: 'app-faq-section',
    styleUrl: './faq-section.css',
    templateUrl: './faq-section.html',
})
export class FaqSection
{
    protected readonly groups = FAQ;
    protected readonly askUrl = whatsappUrl(CONTACT.whatsapp, $localize`:@@faq.askMessage:Hola, tengo una pregunta sobre los vuelos.`);
}
