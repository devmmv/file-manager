import { username } from "./get-name.js";
import { EOL } from 'os';

export const printExitMessage = () => {

    process.on('exit', () => {
        console.log(
            `${EOL}Thank you for using File Manager, ${username}, goodbye!`
        )
    });

    process.on("SIGINT", () => {
        process.exit();
    });
}