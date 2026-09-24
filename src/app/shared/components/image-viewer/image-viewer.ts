import { Component, ElementRef, afterRenderEffect, input, output, viewChild } from '@angular/core';

export interface ViewerImage
{
    src: string;
    alt: string;
}

// Full-screen view of one image. The parent owns which image is shown: set
// `image` to open, and clear it when `closed` fires (click, Esc or the button).
@Component({
    imports: [],
    selector: 'app-image-viewer',
    styleUrl: './image-viewer.css',
    templateUrl: './image-viewer.html',
})
export class ImageViewer
{
    // === INPUTS ===

    readonly image = input<ViewerImage | null>(null);

    // === OUTPUTS ===

    readonly closed = output<void>();

    // === STATE ===

    private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    constructor()
    {
        // showModal only exists in a browser, and prerendering has no dialog to open.
        afterRenderEffect(() =>
        {
            const dialog = this.dialog().nativeElement;

            if (this.image() && !dialog.open)
                dialog.showModal();
            else if (!this.image() && dialog.open)
                dialog.close();
        });
    }
}
