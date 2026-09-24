import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { PackagesSection } from './sections/packages-section/packages-section';
import { ServicesSection } from './sections/services-section/services-section';
import { JourneySection } from './sections/journey-section/journey-section';
import { ReviewsSection } from './sections/reviews-section/reviews-section';
import { Seo } from '../../shared/seo';

@Component({
    selector: 'app-home',
    imports: [HeroSection, PackagesSection, ServicesSection, JourneySection, ReviewsSection],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home
{
    constructor()
    {
        inject(Seo).apply($localize`:@@home.description:Vuela en globo aerostático sobre las pirámides de Teotihuacán. Vuelos compartidos y privados, desayuno, brindis y certificado de vuelo.`);
    }
}
