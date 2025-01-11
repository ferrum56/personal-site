import { describe, expect, it } from 'vitest';

import { toQIcon } from '@/utils/icon-util';
import { isString, isExternalLink, parseRichText } from '@/utils/string-util';

describe('Icon Util', () => {
    it('should have correct behaviour: toQIcon', async () => {
        expect(toQIcon).to.be.a('function');
        expect(() => toQIcon('not icon')).to.throw(TypeError);
        expect(toQIcon({ icon: [24, 24, [], 'f000', 'f001'] }))
            .to.be.a('string')
            .and.equal('f001|0 0 24 24');
    });
});

describe('String Util', () => {
    it('should have correct behaviour: isExternalLink', async () => {
        expect(isExternalLink).to.be.a('function');
        expect(isExternalLink('https://example.com')).to.be.true;
        expect(isExternalLink('example.com')).to.be.false;
    });

    it('should have correct behaviour: parseRichText', async () => {
        expect(parseRichText).to.be.a('function');
        expect(parseRichText('Hello, {link:world}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', data: 'Hello, ' },
                { type: 'link', data: 'world' },
                { type: 'text', data: '!' },
            ]);
        expect(parseRichText('Hello, {wrong:world}!'))
            .to.be.an('array')
            .and.deep.equal([
                { type: 'text', data: 'Hello, ' },
                { type: 'text', data: '{wrong:world}' },
                { type: 'text', data: '!' },
            ]);
    });
});
