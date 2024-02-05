import { commands } from './commands.js';
import readline from 'readline';
import { printCurrentDir, printErrorMessage } from './messages/index.js';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

export const listenInput = () => {

    rl.on('line', (data) => {
        const input = data.toString('utf-8')
            .trim()
            .split(' ')
            .filter(i => i !== '');

        const prop = input.slice(1);

        const command = input[0];
        if (Object.keys(commands).includes(command)) {

            commands[command](...prop);

            printCurrentDir();

        } else {
            printErrorMessage();
            printCurrentDir();
        }
    });
}