import { rm } from 'fs/promises';
import { resolve } from 'path';
import { printFailedMessage } from '../messages/index.js';

export const deleteFile = async (filename) => {
    try {
        const filePaht = resolve(process.cwd(), filename);
        await rm(filePaht);
    } catch (error) {
        printFailedMessage();
    }
}