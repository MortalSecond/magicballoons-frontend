import { TestBed } from '@angular/core/testing';
import { LocationMap } from './location-map';

describe('LocationMap', () =>
{
    it('should render the container Leaflet draws into', async () =>
    {
        await TestBed.configureTestingModule({
            imports: [LocationMap]
        }).compileComponents();

        const fixture = TestBed.createComponent(LocationMap);
        fixture.componentRef.setInput('points', [{ lat: 19.69, lng: -98.82, label: 'Globopuerto', isPrimary: true }]);
        await fixture.whenStable();

        expect((fixture.nativeElement as HTMLElement).querySelector('.location-map')).not.toBeNull();
    });
});
