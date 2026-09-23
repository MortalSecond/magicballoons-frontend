import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../../../data/contact.data';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection
{
    protected readonly contact = CONTACT;
}
