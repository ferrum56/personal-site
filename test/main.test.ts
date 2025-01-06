import { describe, expect, it } from 'vitest';

describe('Config', () => {
    it('should have correct value: defineConfig.define', async () => {
        expect(__PROJECT_VERSION__).to.exist.and.to.be.a('string');
        const package_version = process.env.npm_package_version;
        if (package_version) {
            expect(__PROJECT_VERSION__).to.equal(package_version);
        }

        expect(__EO2024__).to.exist.and.to.be.a('string');
    });
});
