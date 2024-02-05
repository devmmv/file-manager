import {
    add,
    cat,
    changeDirectory,
    compress,
    copyFile,
    decompress,
    deleteFile,
    getHash,
    goUp,
    listFilesAndDirectories,
    moveFile,
    renameFile,
    runOsCommands,
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
    ['mv']: moveFile,
    ['os']: runOsCommands,
    ['hash']: getHash,
    ['compress']: compress,
    ['decompress']: decompress
}