import {
    add,
    cat,
    changeDirectory,
    copyFile,
    deleteFile,
    goUp,
    listFilesAndDirectories,
    renameFile,
} from "./operations/index.js";

export const commands = {

    ['.exit']: process.exit,
    ['ls']: listFilesAndDirectories,
    ['cd']: changeDirectory,
    ['up']: goUp,
    ['add']: add,
    ['rm']: deleteFile,
    ['cat']: cat,
    ['rn']: renameFile,
    ['cp']: copyFile,
}