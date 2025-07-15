export interface TextData {
    id: number;
    title: string;
    text: string[];
}

export interface ListItem {
    label: string;
    value: string | string[];
    slot?: string;
}

export interface ListData {
    id: number;
    title: string;
    items: ListItem[];
}

// Required syntax for type guard
const chunkTypes = ['text', 'link', 'redact'] as const;
type ChunkType = (typeof chunkTypes)[number];

interface TextChunk {
    type: ChunkType;
    text: string;
    to?: string;
    length?: number;
}

function isChunkType(value: unknown): value is ChunkType {
    return chunkTypes.some((el) => value === el);
}

export function parseText(text: string): TextChunk[] {
    const matches = text.matchAll(/\{(.+?)}/g);
    const chunks: TextChunk[] = [];

    let lastIndex = 0;
    for (const match of matches) {
        chunks.push({ type: 'text', text: text.slice(lastIndex, match.index) });

        const enclosed = match[1].split('|');
        if (enclosed.length >= 2 && isChunkType(enclosed[0])) {
            if (enclosed[0] === 'link' && enclosed.length === 3) {
                chunks.push({ type: 'link', text: enclosed[1], to: enclosed[2] });
            } else if (enclosed[0] === 'redact') {
                chunks.push({
                    type: 'redact',
                    text: enclosed[1],
                    length: parseInt(enclosed[2]) || Math.trunc(enclosed[1].length / 2),
                });
            } else {
                chunks.push({ type: enclosed[0], text: enclosed[1] });
            }
        } else {
            chunks.push({ type: 'text', text: match[0] });
        }

        lastIndex = match.index + match[0].length;
    }
    chunks.push({ type: 'text', text: text.slice(lastIndex) });

    return chunks;
}
