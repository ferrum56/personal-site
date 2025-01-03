import { describe, expect, it } from 'vitest';

import { toQIcon } from '@/utils/icon-util';
import { isString, isExternalLink, parseCustomToken } from '@/utils/string-util';

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
    it('should have correct behaviour: isString', async () => {
        expect(isString).to.be.a('function');
        expect(isString('test')).to.be.true;
        expect(isString({ not: 'str' })).to.be.false;
    });

    it('should have correct behaviour: isExternalLink', async () => {
        expect(isExternalLink).to.be.a('function');
        expect(isExternalLink('https://example.com')).to.be.true;
        expect(isExternalLink('example.com')).to.be.false;
    });

    it('should have correct behaviour: parseCustomToken', async () => {
        expect(parseCustomToken).to.be.a('function');
        expect(parseCustomToken('Hello, <|world|>!'))
            .to.be.an('array')
            .and.deep.equal([
                { kind: 'text', data: 'Hello, ' },
                { kind: 'link', data: 'world' },
                { kind: 'text', data: '!' },
            ]);
    });
});
