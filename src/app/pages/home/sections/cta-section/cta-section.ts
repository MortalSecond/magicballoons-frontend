import { Component } from '@angular/core';
import { CONTACT } from '../../../../data/contact.data';
import { whatsappUrl } from '../../../../data/services.data';
import { srcset } from '../../../../data/media';

@Component({
    imports: [],
    selector: 'app-cta-section',
    styleUrl: './cta-section.css',
    templateUrl: './cta-section.html',
})
export class CtaSection
{
    protected readonly contact = CONTACT;
    protected readonly photoSrcset = srcset('/media/couple-embrace.webp');
    protected readonly whatsappUrl = whatsappUrl(CONTACT.whatsapp, $localize`:@@cta.whatsappMessage:Hola, quiero reservar un vuelo en globo.`);
}
