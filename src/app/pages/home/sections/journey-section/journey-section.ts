import { Component } from '@angular/core';
import { JOURNEY } from '../../../../data/journey.data';

@Component({
    imports: [],
    selector: 'app-journey-section',
    styleUrl: './journey-section.css',
    templateUrl: './journey-section.html',
})
export class JourneySection
{
    // A phase label only shows on the first step of its phase.
    protected readonly steps = JOURNEY.map((step, index) => ({
        ...step,
        number: String(index + 1).padStart(2, '0'),
        startsPhase: index === 0 || JOURNEY[index - 1].phase !== step.phase
    }));
}
