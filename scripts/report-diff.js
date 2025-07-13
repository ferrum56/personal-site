import fs from 'node:fs';

function formatRow(branch, size) {
    return `| ${branch} | ${size.raw} kB | ${size.gzip} kB | ${size.brotli} kB |\n`;
}

function formatDiffRow(prev, curr) {
    const formatDiff = (method) => {
        const diff = curr[method] - prev[method];
        const sign = diff > 0 ? '+' : (diff < 0 ? '-' : '');
        return `${sign}${Math.abs(diff)} kB`;
    };

    return `| diff | ${formatDiff('raw')} | ${formatDiff('gzip')} | ${formatDiff('brotli')} |\n`;
}

const prevSizePath = process.argv[2];
const currSizePath = process.argv[3];
const currentBranch = process.argv[4];

const prevSize = JSON.parse(fs.readFileSync(prevSizePath, 'utf8'));
const currSize = JSON.parse(fs.readFileSync(currSizePath, 'utf8'));

let comment = '### Size Report\n\n'
comment += 'Roughly estimates the production build bundle size differences.\n\n';
comment += '| Branch | Raw | Gzip | Brotli |\n';
comment += '| --- | --- | --- | --- |\n';
comment += formatRow('master', prevSize);
comment += formatRow(currentBranch, currSize);
comment += formatDiffRow(prevSize, currSize);
comment += '\n*This is an auto-generated report.*\n';

process.stdout.write(comment);
