import { TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { CONTACT } from '../../../data/contact.data';

describe('Navbar', () =>
{
    let compiled: HTMLElement;
    let fixture: ReturnType<typeof TestBed.createComponent<Navbar>>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [Navbar]
        }).compileComponents();

        fixture = TestBed.createComponent(Navbar);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should link to every section and to FareHarbor', () =>
    {
        const hrefs = [...compiled.querySelectorAll('.menu__link')].map(link => link.getAttribute('href'));

        expect(hrefs).toEqual(['#vuelos', '#servicios', '#experiencia', '#opiniones']);
        expect(compiled.querySelector('.navbar__cta')?.getAttribute('href')).toBe(CONTACT.booking);
    });

    it('should open and close the menu from the toggle', async () =>
    {
        const toggle = compiled.querySelector('.navbar__toggle') as HTMLButtonElement;

        toggle.click();
        await fixture.whenStable();
        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(compiled.querySelector('.navbar')?.classList.contains('navbar--open')).toBe(true);

        (compiled.querySelector('.menu__link') as HTMLAnchorElement).dispatchEvent(new MouseEvent('click', { cancelable: true }));
        await fixture.whenStable();
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
    });
});
