export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function fnv1a32(str: string): number {
    const encoder = new TextEncoder();
    const encoded = encoder.encode(str);

    let hash = 0x811c9dc5;
    for (const char of encoded) {
        hash ^= char;
        hash = Math.imul(hash, 0x1000193);
    }
    return hash >>> 0;
}

export function isExternalUrl(url: string): boolean {
    return url.startsWith('http');
}
