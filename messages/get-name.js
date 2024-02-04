const argvs = process.argv.slice(2);

export const username = argvs.filter(

    arg => arg.startsWith("--username=")

).join().substring(11) || 'Friend';