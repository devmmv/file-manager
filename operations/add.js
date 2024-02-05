import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { printFailedMessage } from '../messages/index.js';


export const add = async (filename) => {

    try {
        const currDir = process.cwd();
        const filePath = resolve(currDir, filename);

        await writeFile(filePath, '', { flag: 'wx' }, err => {
            if (err) printFailedMessage();
        });

    } catch (error) {
        printFailedMessage();
    }
}