import { open } from 'fs/promises';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { printFailedMessage } from '../messages/index.js';

export const getHash = async (file) => {
    try {
        const filePath = resolve(process.cwd(), file);
        let fileData = '';
        const hash = createHash('sha256');
        const fileHandle = await open(filePath, 'r');
        const fileStream = fileHandle.createReadStream();

        fileStream.on('data', (chunk) => {
            fileData += chunk;
        })

        fileStream.on('end', () => {
            if (fileData) {
                console.log(hash.update(fileData).digest('hex'));
            };
            fileHandle.close();
        })

    } catch (error) {
        printFailedMessage();
    }
}