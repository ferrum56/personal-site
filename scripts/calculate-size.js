import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

async function getBundleSize() {
    const extensions = new Set(['.js', '.css', '.json', '.svg']);

    let rawSize = 0;
    let gzipSize = 0;
    let brotliSize = 0;

    const walkSync = async (dir) => {
        for (const file of fs.readdirSync(dir)) {
            const filePath = path.join(dir, file);
            const fileStats = fs.statSync(filePath);

            if (fileStats.isFile()) {
                if (extensions.has(path.extname(file).toLowerCase())) {
                    const rawContent = fs.readFileSync(filePath);
                    rawSize += fileStats.size;
                    gzipSize += zlib.gzipSync(rawContent).length;
                    brotliSize += zlib.brotliCompressSync(rawContent).length;
                }
            } else if (fileStats.isDirectory()) {
                await walkSync(filePath);
            }
        }
    };

    await walkSync('./dist');
    return {
        raw: Math.round(rawSize / 1024),
        gzip: Math.round(gzipSize / 1024),
        brotli: Math.round(brotliSize / 1024),
    };
}

(async () => {
    const outputFile = process.argv[2];
    const bundleSize = await getBundleSize();
    fs.writeFileSync(outputFile, JSON.stringify(bundleSize, null, 2));
    console.log('Bundle size written to', outputFile);
})();
