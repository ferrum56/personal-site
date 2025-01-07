export interface CustomTokenPart {
    kind: 'text' | 'link';
    data: string;
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export function isExternalLink(link: string): boolean {
    return link.startsWith('http');
}

export function parseCustomToken(str: string): CustomTokenPart[] {
    const matches = str.matchAll(/<\|([^|]+)\|>/g);

    const parts: CustomTokenPart[] = [];
    let lastIndex = 0;
    for (const match of matches) {
        parts.push({ kind: 'text', data: str.slice(lastIndex, match.index) });
        parts.push({ kind: 'link', data: match[1] });
        lastIndex = match.index + match[0].length;
    }
    parts.push({ kind: 'text', data: str.slice(lastIndex) });

    return parts;
}
