import { listenInput } from './listen-input.js';
import { changeWorkingDirToHomeDir } from './operations/index.js'
import { printGreeting, printCurrentDir, printExitMessage } from './messages/index.js'

changeWorkingDirToHomeDir();
printGreeting();
printCurrentDir();
listenInput();
printExitMessage();