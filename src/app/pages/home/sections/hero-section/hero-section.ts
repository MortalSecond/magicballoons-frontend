import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../../../data/contact.data';
import { srcset } from '../../../../data/media';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection
{
    protected readonly contact = CONTACT;
    protected readonly posterSrcset = srcset('/media/hero-poster.webp');
}
