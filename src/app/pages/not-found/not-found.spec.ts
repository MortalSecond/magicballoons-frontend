import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/core';
import { NotFound } from './not-found';

describe('NotFound', () =>
{
    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [NotFound]
        }).compileComponents();

        const fixture = TestBed.createComponent(NotFound);
        await fixture.whenStable();
    });

    afterEach(() => document.head.querySelectorAll('meta[name="robots"], link[rel="canonical"]').forEach(element => element.remove()));

    // Every missing URL serves this page; none of them may enter the index.
    it('should keep itself out of search', () =>
    {
        const head = TestBed.inject(DOCUMENT).head;

        expect(head.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('noindex');
        expect(head.querySelector('link[rel="canonical"]')).toBeNull();
    });
});
