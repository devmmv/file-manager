import { readdir } from 'fs/promises';
import { printFailedMessage } from '../messages/index.js';

export const listFilesAndDirectories = async (prop) => {
    if (prop) {
        printFailedMessage();
        return;
    }
    const listDir = [];
    const listFiles = [];
    try {
        const files = await readdir(process.cwd(), { withFileTypes: true });
        for (const file of files) {
            if (file.isDirectory()) {
                listDir.push({
                    Name: file.name,
                    Type: 'directory'
                });
            }
            if (file.isFile()) {
                listFiles.push({
                    Name: file.name,
                    Type: 'file'
                });
            }
        }
    } catch (err) {
        console.error(err);
    }
    listDir.sort(function (a, b) {
        if (a.Name < b.Name) {
            return -1;
        }
        if (a.Name > b.Name) {
            return 1;
        }
        return 0;
    });
    sortByName(listDir);
    sortByName(listFiles);
    console.table([...listDir, ...listFiles]);
}

function sortByName(obj) {
    obj.sort(function (a, b) {
        if (a.Name < b.Name) {
            return -1;
        }
        if (a.Name > b.Name) {
            return 1;
        }
        return 0;
    });
}