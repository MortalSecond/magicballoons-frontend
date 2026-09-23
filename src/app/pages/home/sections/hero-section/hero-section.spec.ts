import { TestBed } from '@angular/core/testing';
import { HeroSection } from './hero-section';
import { CONTACT } from '../../../../data/contact.data';

describe('HeroSection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [HeroSection]
        }).compileComponents();

        const fixture = TestBed.createComponent(HeroSection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    // The h1 is what search engines read as the page's topic.
    it('should render the title as the only h1', () =>
    {
        const headings = compiled.querySelectorAll('h1');

        expect(headings.length).toBe(1);
        expect(headings[0].textContent?.replace(/\s+/g, ' ').trim()).toBe('La magia de volar');
    });

    it('should link the main button to FareHarbor', () =>
    {
        const booking = compiled.querySelector('.hero__buttons .button');

        expect(booking?.getAttribute('href')).toBe(CONTACT.booking);
    });
});
