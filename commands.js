import {
    changeDirectory,
    listFilesAndDirectories,
} from "./operations/index.js";

export const commands = {

    ['.exit']: process.exit,
    ['ls']: listFilesAndDirectories,
    ['cd']: changeDirectory
}