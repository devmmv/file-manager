import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { printFailedMessage } from '../messages/index.js';

export const copyFile = (fileName, newPath) => {

    try {
        const filePath = resolve(process.cwd(), fileName);
        const fileCopyPath = resolve(process.cwd(), newPath);
        console.log(fileCopyPath)
        const inputStream = createReadStream(filePath, 'utf-8');
        const outputStream = createWriteStream(fileCopyPath);

        pipeline(inputStream, outputStream, err => {
            if (err) printFailedMessage();
        })

    } catch (error) {
        printFailedMessage();
    }
}