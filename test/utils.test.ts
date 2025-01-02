import { describe, expect, it } from 'vitest';

import { toQIcon } from '@/utils/icon-util';
import { capitalize } from '@/utils/string-util';

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
    it('should have correct behaviour: capitalize', async () => {
        expect(capitalize).to.be.a('function');
        expect(() => capitalize(123)).to.throw(TypeError);
        expect(capitalize('test')).to.be.a('string').and.equal('Test');
        expect(capitalize('TEST')).to.equal('Test');
        expect(capitalize('1test')).to.equal('1test');
    });
});
