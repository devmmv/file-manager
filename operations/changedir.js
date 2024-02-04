import { homedir } from 'os';
import { sep } from 'path';
import { printErrorMessage } from './messages/index.js';

export const changeDirectory = (newDir = homedir()) => {
    const prevDir = process.cwd().split(sep).at(-1);
    if (newDir, newDir !== prevDir) {
        try {
            process.chdir(newDir);

        } catch (error) {
            if (error.code === 'ENOENT') {
                printErrorMessage()
            }
        }
    }
}

export const changeWorkingDirToHomeDir = () => {
    process.chdir(homedir());
}