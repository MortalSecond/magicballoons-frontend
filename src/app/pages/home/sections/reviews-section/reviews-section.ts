import { Component, LOCALE_ID, inject } from '@angular/core';
import { REVIEWS } from '../../../../data/reviews.data';
import { CONTACT } from '../../../../data/contact.data';
import { languageFor } from '../../../../data/site.data';

@Component({
    imports: [],
    selector: 'app-reviews-section',
    styleUrl: './reviews-section.css',
    templateUrl: './reviews-section.html',
})
export class ReviewsSection
{
    protected readonly contact = CONTACT;
    protected readonly reviews = REVIEWS[languageFor(inject(LOCALE_ID)).code] ?? REVIEWS['es'];

    // Five bubbles per review, filled up to its rating.
    protected readonly bubbles = [1, 2, 3, 4, 5];
}
