import { Component } from '@angular/core';
import { CONTACT } from '../../../../data/contact.data';
import { POLICY } from '../../../../data/policy.data';
import { LocationMap, MapPoint } from './location-map/location-map';

@Component({
    imports: [LocationMap],
    selector: 'app-location-section',
    styleUrl: './location-section.css',
    templateUrl: './location-section.html',
})
export class LocationSection
{
    protected readonly balloonport = CONTACT.locations.balloonport;
    protected readonly office = CONTACT.locations.office;
    protected readonly arrivalTime = POLICY.arrivalTime;

    // Opens turn-by-turn directions in Google Maps, or the Maps app on a phone.
    protected readonly directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.balloonport.lat},${this.balloonport.lng}`;

    protected readonly points: MapPoint[] = [
        { lat: this.balloonport.lat, lng: this.balloonport.lng, label: this.balloonport.name, isPrimary: true },
        { lat: this.office.lat, lng: this.office.lng, label: this.office.name, isPrimary: false }
    ];
}
