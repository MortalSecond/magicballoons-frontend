import { TestBed } from '@angular/core/testing';
import { ImageViewer } from './image-viewer';

describe('ImageViewer', () =>
{
    it('should render nothing inside the dialog without an image', async () =>
    {
        await TestBed.configureTestingModule({
            imports: [ImageViewer]
        }).compileComponents();

        const fixture = TestBed.createComponent(ImageViewer);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;

        expect(compiled.querySelector('dialog')).not.toBeNull();
        expect(compiled.querySelector('.viewer__image')).toBeNull();
    });

    it('should show the given image', async () =>
    {
        await TestBed.configureTestingModule({
            imports: [ImageViewer]
        }).compileComponents();

        const fixture = TestBed.createComponent(ImageViewer);
        fixture.componentRef.setInput('image', { src: '/media/combi.webp', alt: 'Combi' });
        await fixture.whenStable();
        const image = (fixture.nativeElement as HTMLElement).querySelector('.viewer__image');

        expect(image?.getAttribute('src')).toBe('/media/combi.webp');
        expect(image?.getAttribute('alt')).toBe('Combi');
    });
});
