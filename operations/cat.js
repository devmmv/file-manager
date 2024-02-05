import { open } from 'fs/promises';
import { resolve } from 'path';
import { printFailedMessage } from '../messages/index.js';

export const cat = async (filename) => {

    try {
        const currDir = process.cwd();
        const filePath = resolve(currDir, filename);
        const fileHandler = await open(filePath, 'r');

        const fileStream = fileHandler.createReadStream();
        let fileContent = '';
        fileStream.on('data', (chunk) => {
            fileContent += chunk.toString();
        }).on('end', () => {
            console.log(fileContent);
            fileHandler.close();
        });

    } catch (error) {
        printFailedMessage();
    }
}