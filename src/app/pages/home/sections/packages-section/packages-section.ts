import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PACKAGES, bookingUrl } from '../../../../data/packages.data';

@Component({
    imports: [DecimalPipe],
    selector: 'app-packages-section',
    styleUrl: './packages-section.css',
    templateUrl: './packages-section.html',
})
export class PackagesSection
{
    // Resolved once, so the template doesn't rebuild URLs on every check.
    protected readonly packages = PACKAGES.map(item => ({ ...item, url: bookingUrl(item) }));
}
