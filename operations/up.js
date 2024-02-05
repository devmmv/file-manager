import { printFailedMessage } from "../messages/index.js";

export const goUp = (prop) => {
    if (!prop) {

        process.chdir('..');
    } else {
        printFailedMessage();
    }
} 