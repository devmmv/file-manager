import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { printFailedMessage } from '../messages/index.js';

export const compress = (fileToCompress, archive) => {
    try {
        const filePath = resolve(process.cwd(), fileToCompress);
        const archivePath = resolve(process.cwd(), archive);

        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(archivePath);

        const brotli = createBrotliCompress();

        pipeline(
            readStream,
            brotli,
            writeStream,
            (err) => {
                if (err) {
                    printFailedMessage();
                }
            }
        );
    } catch (error) {
        printFailedMessage();
    }
}

export const decompress = (archive, destFile) => {
    try {
        const filePath = resolve(process.cwd(), destFile);
        const archivePath = resolve(process.cwd(), archive);

        const readStream = createReadStream(archivePath);
        const writeStream = createWriteStream(filePath);

        const brotli = createBrotliDecompress();

        pipeline(
            readStream,
            brotli,
            writeStream,
            err => {
                if (err) {
                    printFailedMessage();
                }
            }
        );
    } catch (error) {
        printFailedMessage();
    }
}