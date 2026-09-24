import { TestBed } from '@angular/core/testing';
import { CtaSection } from './cta-section';
import { CONTACT } from '../../../../data/contact.data';

describe('CtaSection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [CtaSection]
        }).compileComponents();

        const fixture = TestBed.createComponent(CtaSection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should offer both ways to book', () =>
    {
        const hrefs = [...compiled.querySelectorAll('.cta__buttons a')].map(link => link.getAttribute('href'));

        expect(hrefs[0]).toBe(CONTACT.booking);
        expect(hrefs[1]).toContain(`wa.me/${CONTACT.whatsapp}`);
    });
});
