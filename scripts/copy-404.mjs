// Cloudflare serves the nearest 404.html, with a 404 status, for any URL that
// does not exist. Angular prerenders the not-found page as 404/index.html in
// each language, so copy it to where Cloudflare looks. Runs after `ng build`.
import { copyFileSync, existsSync } from 'node:fs';

const browser = 'dist/magicballoons-frontend/browser';

for (const language of ['', 'en/'])
{
    const page = `${browser}/${language}404/index.html`;

    if (!existsSync(page))
        throw new Error(`Missing ${page}: is the '404' route still prerendered?`);

    copyFileSync(page, `${browser}/${language}404.html`);
    console.log(`copied ${page} -> ${browser}/${language}404.html`);
}
