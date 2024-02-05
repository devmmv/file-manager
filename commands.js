import {
    add,
    changeDirectory,
    deleteFile,
    goUp,
    listFilesAndDirectories,
} from "./operations/index.js";

export const commands = {

    ['.exit']: process.exit,
    ['ls']: listFilesAndDirectories,
    ['cd']: changeDirectory,
    ['up']: goUp,
    ['add']: add,
    ['rm']: deleteFile,
}