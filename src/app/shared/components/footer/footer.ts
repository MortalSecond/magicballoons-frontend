import { Component, LOCALE_ID, inject } from '@angular/core';
import { CONTACT } from '../../../data/contact.data';
import { LANGUAGES, SECTION_LINKS, languageFor } from '../../../data/site.data';
import { whatsappUrl } from '../../../data/services.data';

@Component({
    imports: [],
    selector: 'app-footer',
    styleUrl: './footer.css',
    templateUrl: './footer.html',
})
export class Footer
{
    protected readonly contact = CONTACT;
    protected readonly whatsappUrl = whatsappUrl(CONTACT.whatsapp, $localize`:@@footer.whatsappMessage:Hola, quiero información sobre los vuelos en globo.`);

    // The navbar's sections plus the one it has no room for.
    protected readonly links = [...SECTION_LINKS, { href: '#ubicacion', label: $localize`:@@footer.location:Cómo llegar` }];

    protected readonly social = [
        { href: CONTACT.social.facebook, label: 'Facebook' },
        { href: CONTACT.social.instagram, label: 'Instagram' },
        { href: CONTACT.social.tiktok, label: 'TikTok' },
        { href: CONTACT.social.youtube, label: 'YouTube' }
    ];

    private readonly current = languageFor(inject(LOCALE_ID));
    protected readonly languages = LANGUAGES.map(language => ({ ...language, isCurrent: language === this.current }));

    // Fixed when the page is prerendered, so it updates with the next deploy.
    protected readonly year = new Date().getFullYear();
}
