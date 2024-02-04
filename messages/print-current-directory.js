export const printCurrentDir = () => {
    setTimeout(() => {
        console.log(
            `You are currently in \x1b[33m ${process.cwd()}\x1b[0m`
        );
    }, 200)
}