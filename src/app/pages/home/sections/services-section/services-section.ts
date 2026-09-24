import { Component, signal } from '@angular/core';
import { SERVICES, ServiceImage, whatsappUrl } from '../../../../data/services.data';
import { ImageViewer } from '../../../../shared/components/image-viewer/image-viewer';
import { srcset } from '../../../../data/media';

@Component({
    imports: [ImageViewer],
    selector: 'app-services-section',
    styleUrl: './services-section.css',
    templateUrl: './services-section.html',
})
export class ServicesSection
{
    protected readonly services = SERVICES.map(service => ({
        ...service,
        url: whatsappUrl(service.phone, service.message),
        gallery: service.gallery.map(image => ({ ...image, srcset: srcset(image.src) }))
    }));

    // === STATE ===

    protected readonly active = signal(0);
    protected readonly expanded = signal<ServiceImage | null>(null);

    // === METHODS ===

    protected select(index: number): void
    {
        this.active.set(index);
    }

    protected step(by: number): void
    {
        const count = this.services.length;

        this.active.set((this.active() + by + count) % count);
    }

    protected expand(image: ServiceImage): void
    {
        this.expanded.set(image);
    }
}
