import { ChangeDetectionStrategy, Component, LOCALE_ID, inject } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { PackagesSection } from './sections/packages-section/packages-section';
import { ServicesSection } from './sections/services-section/services-section';
import { JourneySection } from './sections/journey-section/journey-section';
import { ReviewsSection } from './sections/reviews-section/reviews-section';
import { FaqSection } from './sections/faq-section/faq-section';
import { LocationSection } from './sections/location-section/location-section';
import { CtaSection } from './sections/cta-section/cta-section';
import { Seo } from '../../shared/seo';
import { businessData } from '../../data/structured-data';
import { SITE_URL, languageFor } from '../../data/site.data';

@Component({
    selector: 'app-home',
    imports: [HeroSection, PackagesSection, ServicesSection, JourneySection, ReviewsSection, FaqSection, LocationSection, CtaSection],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home
{
    constructor()
    {
        const seo = inject(Seo);
        const description = $localize`:@@home.description:Vuela en globo aerostático sobre las pirámides de Teotihuacán. Vuelos compartidos y privados, desayuno, brindis y certificado de vuelo.`;

        seo.apply({
            // Page titles are defined here rather than on the route, so each is written once.
            title: $localize`:@@home.pageTitle:Magic Balloons | Vuelos en globo sobre Teotihuacán`,
            description
        });
        seo.structuredData('business', businessData(description, SITE_URL + languageFor(inject(LOCALE_ID)).path));
    }
}
