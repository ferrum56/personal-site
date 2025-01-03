import { describe, expect, it } from 'vitest';

import { toQIcon } from '@/utils/icon-util';

describe('Icon Util', () => {
    it('should have correct behaviour: toQIcon', async () => {
        expect(toQIcon).to.be.a('function');
        expect(() => toQIcon('not icon')).to.throw(TypeError);
        expect(toQIcon({ icon: [24, 24, [], 'f000', 'f001'] }))
            .to.be.a('string')
            .and.equal('f001|0 0 24 24');
    });
});
