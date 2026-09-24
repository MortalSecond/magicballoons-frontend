import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';
import { CONTACT } from '../../../data/contact.data';
import { SECTION_LINKS } from '../../../data/site.data';

describe('Footer', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [Footer]
        }).compileComponents();

        const fixture = TestBed.createComponent(Footer);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    function hrefs(): (string | null)[]
    {
        return [...compiled.querySelectorAll('a')].map(link => link.getAttribute('href'));
    }

    it('should link every navbar section, plus the location', () =>
    {
        for (const link of SECTION_LINKS)
            expect(hrefs()).toContain(link.href);

        expect(hrefs()).toContain('#ubicacion');
    });

    it('should link every social profile and the phone', () =>
    {
        for (const url of Object.values(CONTACT.social))
            expect(hrefs()).toContain(url);

        expect(hrefs()).toContain(CONTACT.phoneHref);
    });
});
