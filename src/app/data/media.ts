import { MEDIA_WIDTHS } from './media.generated';

// Builds a srcset from the widths that actually exist for a photo, so the
// browser downloads the smallest copy that fills its slot. The largest width
// is the original file; the rest are photo-<width>.webp.
export function srcset(src: string): string
{
    const widths = MEDIA_WIDTHS[src];

    if (!widths)
        return '';

    const largest = widths[widths.length - 1];

    return widths
        .map(width => `${width === largest ? src : src.replace(/\.webp$/, `-${width}.webp`)} ${width}w`)
        .join(', ');
}
