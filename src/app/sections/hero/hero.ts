import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../data/contact.data';

@Component({
    selector: 'mb-hero',
    templateUrl: './hero.html',
    styleUrl: './hero.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero
{
    protected readonly contact = CONTACT;
}
