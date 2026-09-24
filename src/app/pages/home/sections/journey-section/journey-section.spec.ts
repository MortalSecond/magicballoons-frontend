import { TestBed } from '@angular/core/testing';
import { JourneySection } from './journey-section';
import { JOURNEY } from '../../../../data/journey.data';

describe('JourneySection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [JourneySection]
        }).compileComponents();

        const fixture = TestBed.createComponent(JourneySection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should render every step in order', () =>
    {
        const titles = [...compiled.querySelectorAll('.step__title')].map(title => title.textContent?.trim());

        expect(titles).toEqual(JOURNEY.map(step => step.title));
    });

    it('should label each phase once', () =>
    {
        const phases = [...compiled.querySelectorAll('.step__phase')].map(phase => phase.textContent?.trim());

        expect(phases).toEqual([...new Set(JOURNEY.map(step => step.phase))]);
    });

    // The weigh-in is where people push back; the reason must stay visible.
    it('should mark the weigh-in as a safety step', () =>
    {
        const checkIn = compiled.querySelectorAll('.step')[JOURNEY.findIndex(step => step.id === 'check-in')];

        expect(checkIn.querySelector('.tag--safety')?.textContent?.trim()).toBe('Por tu seguridad');
    });
});
