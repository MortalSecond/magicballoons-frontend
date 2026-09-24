import { Component, DestroyRef, ElementRef, ViewEncapsulation, afterNextRender, inject, input, viewChild } from '@angular/core';
import type { Map as LeafletMap } from 'leaflet';

export interface MapPoint
{
    lat: number;
    lng: number;
    label: string;
    isPrimary: boolean;
}

// OpenStreetMap through Leaflet. Leaflet needs a real window, so it is imported
// only after the first browser render; prerendering outputs the empty container.
// Unencapsulated because Leaflet builds its own DOM, which never carries
// Angular's scoping attributes; every selector is prefixed with .location-map.
@Component({
    imports: [],
    selector: 'app-location-map',
    styleUrl: './location-map.css',
    templateUrl: './location-map.html',
    encapsulation: ViewEncapsulation.None
})
export class LocationMap
{
    // === INPUTS ===

    readonly points = input.required<MapPoint[]>();

    // === STATE ===

    private readonly container = viewChild.required<ElementRef<HTMLElement>>('map');
    private map: LeafletMap | null = null;
    private isDestroyed = false;

    constructor()
    {
        inject(DestroyRef).onDestroy(() =>
        {
            this.isDestroyed = true;
            this.map?.remove();
        });

        afterNextRender(() => this.create());
    }

    // === METHODS ===

    private async create(): Promise<void>
    {
        const module = await import('leaflet');
        // Leaflet ships as CommonJS, so the namespace may arrive under default.
        const L = ('default' in module ? module.default : module) as typeof module;

        if (this.isDestroyed)
            return;

        const map = L.map(this.container().nativeElement, { scrollWheelZoom: false });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        for (const point of this.points())
        {
            const icon = L.divIcon({
                className: point.isPrimary ? 'location-map__marker location-map__marker--primary' : 'location-map__marker',
                iconSize: [20, 20]
            });

            L.marker([point.lat, point.lng], { icon, title: point.label, alt: point.label })
                .bindTooltip(point.label, { permanent: true, direction: 'top', offset: [0, -12], className: 'location-map__label' })
                .addTo(map);
        }

        map.fitBounds(this.points().map(point => [point.lat, point.lng] as [number, number]), { padding: [70, 70] });
        this.map = map;
    }
}
