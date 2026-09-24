import { TestBed } from '@angular/core/testing';
import { FaqSection } from './faq-section';
import { FAQ } from '../../../../data/faq.data';
import { POLICY } from '../../../../data/policy.data';

describe('FaqSection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [FaqSection]
        }).compileComponents();

        const fixture = TestBed.createComponent(FaqSection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    // Collapsed answers must still be in the HTML, or crawlers never see them.
    it('should render every answer while collapsed', () =>
    {
        const all = FAQ.flatMap(group => group.items);
        const answers = [...compiled.querySelectorAll('details.question')];

        expect(answers.length).toBe(all.length);
        expect(answers.every(details => !details.hasAttribute('open'))).toBe(true);
        expect(answers.map(details => details.querySelector('.question__answer')?.textContent?.trim()))
            .toEqual(all.map(item => item.answer));
    });

    it('should quote the figures from the policy', () =>
    {
        const text = compiled.textContent ?? '';

        expect(text).toContain(`$${POLICY.depositPerPassenger} MXN`);
        expect(text).toContain(`$${POLICY.surchargePerKg} MXN`);
        expect(text).toContain(`$${2 * Number(POLICY.surchargePerKg)} MXN`);
    });
});
