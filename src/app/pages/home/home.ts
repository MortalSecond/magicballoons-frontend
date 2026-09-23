import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { PackagesSection } from './sections/packages-section/packages-section';

@Component({
    selector: 'app-home',
    imports: [HeroSection, PackagesSection],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home
{
}
