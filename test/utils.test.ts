import { describe, expect, it } from 'vitest';

import { parseText } from '@/utils/content-util';
import { capitalize, fnv1a32, isExternalUrl } from '@/utils/string-util';

describe('utils::content-util', () => {
    it('parseText has correct behaviour', async () => {
        expect(parseText).to.be.a('function');
        expect(parseText('Hello, {link|world|/}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'link', text: 'world', to: '/' },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {link}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'text', text: '{link}' },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {link|world}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'link', text: 'world' },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {wrong|world}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'text', text: '{wrong|world}' },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {redact|world}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'redact', text: 'world', length: 2 },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {redact|worlds}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'redact', text: 'worlds', length: 3 },
                { type: 'text', text: '!' },
            ]);
        expect(parseText('Hello, {redact|2025|4}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', text: 'Hello, ' },
                { type: 'redact', text: '2025', length: 4 },
                { type: 'text', text: '!' },
            ]);
    });
});

describe('utils::string-util', () => {
    it('capitalize has correct behaviour', async () => {
        expect(capitalize).to.be.a('function');
        expect(capitalize('hello')).to.be.a('string').and.equal('Hello');
        expect(capitalize('Hello')).to.be.a('string').and.equal('Hello');
        expect(capitalize('')).to.be.a('string').and.equal('');
    });

    it('fnv1a32 correctly implements FNV-1a hash (32-bit, UTF-8)', async () => {
        expect(fnv1a32).to.be.a('function');
        expect(fnv1a32('')).to.be.a('number').and.equal(0x811c9dc5);
        expect(fnv1a32('hello')).to.be.a('number').and.equal(0x4f9f2cab);
        expect(fnv1a32('TypeScript')).to.be.a('number').and.equal(0x134d16e2);
    });

    it('isExternalUrl has correct behaviour', async () => {
        expect(isExternalUrl).to.be.a('function');
        expect(isExternalUrl('https://example.com')).to.be.true;
        expect(isExternalUrl('example.com')).to.be.false;
    });
});
