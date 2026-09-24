import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/core';
import { Policies } from './policies';
import { POLICIES } from '../../data/policies.data';
import { POLICY } from '../../data/policy.data';
import { SITE_URL } from '../../data/site.data';

describe('Policies', () =>
{
    let compiled: HTMLElement;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [Policies]
        }).compileComponents();

        const fixture = TestBed.createComponent(Policies);
        await fixture.whenStable();
        compiled = fixture.nativeElement as HTMLElement;
    });

    afterEach(() => document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach(link => link.remove()));

    it('should render every section with an anchor the index links to', () =>
    {
        const ids = [...compiled.querySelectorAll('section.policy')].map(section => section.id);
        const targets = [...compiled.querySelectorAll('.index__link')].map(link => link.getAttribute('href')?.split('#')[1]);

        expect(ids).toEqual(POLICIES.map(section => section.id));
        expect(targets).toEqual(ids);
    });

    // The FAQ quotes the same figures; both must read them from POLICY.
    it('should quote the deposit from the policy figures', () =>
    {
        expect(compiled.textContent).toContain(`$${POLICY.depositPerPassenger} MXN`);
    });

    it('should declare its own canonical URL', () =>
    {
        const canonical = TestBed.inject(DOCUMENT).head.querySelector('link[rel="canonical"]')?.getAttribute('href');

        expect(canonical?.startsWith(SITE_URL)).toBe(true);
        expect(canonical?.endsWith('/politicas/')).toBe(true);
    });
});
