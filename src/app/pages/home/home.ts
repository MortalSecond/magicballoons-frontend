import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { PackagesSection } from './sections/packages-section/packages-section';
import { ServicesSection } from './sections/services-section/services-section';

@Component({
    selector: 'app-home',
    imports: [HeroSection, PackagesSection, ServicesSection],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home
{
}
