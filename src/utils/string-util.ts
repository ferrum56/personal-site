import { type RichTextPart, isRichTextPartType } from '@/content/types';

/**
 * Checks if a URL is an external link, i.e. it starts with `http`.
 * @param url - The full URL.
 */
export function isExternalLink(url: string): boolean {
    return url.startsWith('http');
}

/**
 * Parses a rich text string into an array of plain text and processed rich text parts.
 * @param text - The raw rich text string to parse.
 */
export function parseRichText(text: string): RichTextPart[] {
    const matches = text.matchAll(/\{(.+?)}/g);
    const parts: RichTextPart[] = [];

    let lastIndex = 0;
    for (const match of matches) {
        parts.push({ type: 'text', data: text.slice(lastIndex, match.index) });

        const placeholder = match[1].split(':');
        if (isRichTextPartType(placeholder[0])) {
            parts.push({ type: placeholder[0], data: placeholder[1] });
        } else {
            parts.push({ type: 'text', data: match[0] });
        }

        lastIndex = match.index + match[0].length;
    }
    parts.push({ type: 'text', data: text.slice(lastIndex) });

    return parts;
}
