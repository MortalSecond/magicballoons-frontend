import { readFileSync } from 'node:fs';

// The build fails when an id is missing from messages.en.xlf, but an entry with
// no <target> silently ships the Spanish text in the English site. This closes
// that gap.

function units(path: string): Map<string, string | null>
{
    const xml = readFileSync(path, 'utf-8');
    const result = new Map<string, string | null>();

    for (const match of xml.matchAll(/<trans-unit id="([^"]+)"[^>]*>([\s\S]*?)<\/trans-unit>/g))
    {
        const target = /<target>([\s\S]*?)<\/target>/.exec(match[2]);
        result.set(match[1], target ? target[1].trim() : null);
    }

    return result;
}

describe('English translations', () =>
{
    const source = units('src/locale/messages.xlf');
    const english = units('src/locale/messages.en.xlf');

    it('should translate every extracted string', () =>
    {
        const untranslated = [...source.keys()].filter(id => !english.get(id));

        expect(untranslated).toEqual([]);
    });

    it('should not keep translations for strings that no longer exist', () =>
    {
        const stale = [...english.keys()].filter(id => !source.has(id));

        expect(stale).toEqual([]);
    });
});
