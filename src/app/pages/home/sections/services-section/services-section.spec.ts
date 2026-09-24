import { TestBed } from '@angular/core/testing';
import { ServicesSection } from './services-section';
import { SERVICES } from '../../../../data/services.data';

describe('ServicesSection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [ServicesSection]
        }).compileComponents();

        const fixture = TestBed.createComponent(ServicesSection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    // Crawlers only index what is in the prerendered HTML. If this fails, the
    // carousel stopped rendering the hidden slides.
    it('should render every service, not only the active one', () =>
    {
        const titles = [...compiled.querySelectorAll('.service__title')].map(title => title.textContent?.trim());

        expect(titles).toEqual(SERVICES.map(service => service.title));
    });

    it('should make only the active slide reachable', () =>
    {
        const slides = compiled.querySelectorAll('.service');

        expect(slides[0].hasAttribute('inert')).toBe(false);
        expect([...slides].slice(1).every(slide => slide.hasAttribute('inert'))).toBe(true);
    });

    it('should link each service to its own WhatsApp number', () =>
    {
        const links = [...compiled.querySelectorAll('.service__button')].map(link => link.getAttribute('href'));

        SERVICES.forEach((service, index) => expect(links[index]).toContain(`wa.me/${service.phone}`));
    });
});
