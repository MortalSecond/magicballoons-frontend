import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';

@Component({
    selector: 'mb-home',
    imports: [Hero],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home
{
}
