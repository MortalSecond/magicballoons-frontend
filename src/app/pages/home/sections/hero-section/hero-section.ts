import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CONTACT } from '../../../../data/contact.data';
import { srcset } from '../../../../data/media';

// The video is an enhancement over the poster, never a replacement: phones,
// reduced motion and data saver keep the still, which also keeps the MBs off
// the connections where they hurt most.
const VIDEO_QUERY = '(min-width: 769px) and (prefers-reduced-motion: no-preference)';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection
{
    // === STATE ===

    protected readonly contact = CONTACT;
    protected readonly posterSrcset = srcset('/media/hero-poster.webp');

    // Empty until the page has loaded, so the video is not in the prerendered
    // HTML and never competes with the poster for the LCP.
    protected readonly videoSrc = signal('');
    protected readonly videoPlaying = signal(false);

    constructor()
    {
        afterNextRender(() =>
        {
            const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
            if (saveData || !window.matchMedia(VIDEO_QUERY).matches)
                return;

            const start = () => this.videoSrc.set(this.pickVideo());

            if (document.readyState === 'complete')
                start();
            else
                window.addEventListener('load', start, { once: true });
        });
    }

    // === HELPERS ===

    // Device pixels, not CSS pixels: a 1440px retina laptop needs the 1920 file.
    private pickVideo(): string
    {
        return window.innerWidth * window.devicePixelRatio > 1400 ? '/media/hero-1920.mp4' : '/media/hero-1280.mp4';
    }
}
