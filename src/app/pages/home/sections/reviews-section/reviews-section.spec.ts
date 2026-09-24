import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';
import { ReviewsSection } from './reviews-section';
import { REVIEWS } from '../../../../data/reviews.data';

describe('ReviewsSection', () =>
{
    async function renderAs(locale: string): Promise<HTMLElement>
    {
        await TestBed.configureTestingModule({
            imports: [ReviewsSection],
            providers: [{ provide: LOCALE_ID, useValue: locale }]
        }).compileComponents();

        const fixture = TestBed.createComponent(ReviewsSection);
        await fixture.whenStable();

        return fixture.nativeElement as HTMLElement;
    }

    function authors(compiled: HTMLElement): string[]
    {
        return [...compiled.querySelectorAll('.review__author')].map(author => author.textContent?.trim() ?? '');
    }

    // Reviews are never translated: each build quotes reviews in its own language.
    it('should show the Spanish reviews in the Spanish build', async () =>
    {
        expect(authors(await renderAs('es-MX'))).toEqual(REVIEWS['es'].map(review => review.author));
    });

    it('should show the English reviews in the English build', async () =>
    {
        expect(authors(await renderAs('en'))).toEqual(REVIEWS['en'].map(review => review.author));
    });

    it('should fill as many bubbles as the rating', async () =>
    {
        const compiled = await renderAs('es-MX');
        const first = compiled.querySelector('.review__bubbles');

        expect(first?.querySelectorAll('.bubble--filled').length).toBe(REVIEWS['es'][0].rating);
    });
});
