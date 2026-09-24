import { TestBed } from '@angular/core/testing';
import { LocationSection } from './location-section';
import { CONTACT } from '../../../../data/contact.data';

describe('LocationSection', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [LocationSection]
        }).compileComponents();

        const fixture = TestBed.createComponent(LocationSection);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should link both places to Google Maps', () =>
    {
        const hrefs = [...compiled.querySelectorAll('a')].map(link => link.getAttribute('href'));

        expect(hrefs).toContain(CONTACT.locations.balloonport.maps);
        expect(hrefs).toContain(CONTACT.locations.office.maps);
    });

    it('should give directions to the balloonport, where every flight leaves from', () =>
    {
        const { lat, lng } = CONTACT.locations.balloonport;

        expect(compiled.querySelector('.place--primary .button')?.getAttribute('href')).toContain(`destination=${lat},${lng}`);
    });
});
