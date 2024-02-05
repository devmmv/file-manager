import os from 'os';
import { printErrorMessage } from '../messages/index.js';

export const runOsCommands = (prop) => {
    switch (prop) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case '--cpus':
            console.log((os.cpus()));
            break;
        case '--homedir':
            console.log((os.homedir()));
            break;
        case '--username':
            console.log((os.userInfo().username));
            break;
        case '--architecture':
            console.log((os.arch()));
            break;
        default: printErrorMessage();
    }
}