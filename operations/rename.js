import { rename } from 'fs/promises';
import { resolve } from 'path';
import { printFailedMessage } from '../messages/index.js';

export const renameFile = async (oldFile, newFile) => {
    try {
        const oldPath = resolve(process.cwd(), oldFile);
        const newPath = resolve(process.cwd(), newFile);

        await rename(oldPath, newPath);

    } catch (error) {
        printFailedMessage();
    }
}