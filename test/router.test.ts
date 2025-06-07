import { describe, expect, it } from 'vitest';

import { routes } from '@/router/routes';

describe('router::routes', () => {
    it('routes has correct value', async () => {
        expect(routes).to.exist.and.to.be.an('array');
        expect(routes).to.have.nested.property('[0].path', '/');
    });
});
