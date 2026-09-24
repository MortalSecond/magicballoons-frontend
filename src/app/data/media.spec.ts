import { srcset } from './media';
import { MEDIA_WIDTHS } from './media.generated';

describe('srcset', () =>
{
    it('should list every generated width, with the original as the largest', () =>
    {
        const widths = MEDIA_WIDTHS['/media/hero-poster.webp'];
        const largest = widths[widths.length - 1];

        expect(srcset('/media/hero-poster.webp')).toBe(
            widths.map(width => `${width === largest ? '/media/hero-poster.webp' : `/media/hero-poster-${width}.webp`} ${width}w`).join(', ')
        );
    });

    // A photo added without rerunning the script falls back to a plain src.
    it('should return nothing for a photo the script has not seen', () =>
    {
        expect(srcset('/media/unknown.webp')).toBe('');
    });
});
