import { describe, expect, expectTypeOf, it } from 'vitest';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { toQIcon } from '@/utils/icon-util';

describe('Icon Util', () => {
    it('should have correct behaviour: toQIcon', async () => {
        expectTypeOf(toQIcon).parameter(0).toMatchTypeOf<IconDefinition>();
        expectTypeOf(toQIcon).returns.toEqualTypeOf<string>();
        expect(toQIcon({ icon: [24, 24, [], 'f000', 'f001'] })).toBe('f001|0 0 24 24');
        expect(toQIcon({ icon: [24, 24, [], 'f000'] })).toBe('undefined|0 0 24 24'); // No check
    });
});
