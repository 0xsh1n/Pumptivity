const colors = require('ansi-colors');

function getRandomColor(allColors) {
    const randomIndex = Math.floor(Math.random() * allColors.length);
    return allColors[randomIndex];
}

function main() {
    const allColors = [
        colors.red,
        colors.cyan,
        colors.cyanBright,
        colors.blueBright,
        colors.cyanBright,
        colors.magentaBright,
        colors.yellowBright
    ];

    const color = getRandomColor(allColors);

    const pattern =
        " _      __ ___ _          _   _   _ \n" +
        "/  | | (_   | / \\ |\\/|   |_) |_) /  \n" +
        "\\_ |_| __)  | \\_/ |  |   | \\ |   \\_ ";

    const lines = pattern.split("\n");

    const bracketColor = color.red('[');
    const secbracketColor = color.red(']');
    const exclamationColor = color('!');

  for (const line of lines) {
        console.log(color(line));
}
    console.log(`\n${bracketColor}${exclamationColor}${secbracketColor} Which presence would you like to start?\n\n${bracketColor}${colors.red('1')}${secbracketColor}\t${color.yellow('Playing Status')}\n${bracketColor}${colors.red('2')}${secbracketColor}\t${color.yellow('Listening Status')}\n${bracketColor}${colors.red('3')}${secbracketColor}\t${color.yellow('Streaming Status')}\n\n`);

}

main();


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('> ', (status) => {
    rl.close();

    if (status == 1) {
        console.clear();
        require('./presences/playing.js');
    } else if (status == 2) {
        console.clear();
        require('./presences/listening.js');
    } else if (status == 3) {
        console.clear();
        require('./presences/streaming.js');
    } else {
        console.log(`[${colors.red.bold('-')}] Invalid option, Select Options First!`);
        process.exit();
    }
});

