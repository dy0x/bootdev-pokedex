import { createInterface } from 'node:readline';

export function cleanInput(input: string): string[] {
    const transformInput: string[] = input.trim().toLowerCase().split(/\s+/);
    return transformInput;
}

export function startREPL() {
    const rl = createInterface({
        output: process.stdout,
        input: process.stdin,
        prompt: 'Pokedex > ',
    });
    rl.prompt();
    rl.on('line', (line) => {
        const cleanLine = cleanInput(line);
        if (cleanLine[0].length == 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${cleanLine[0]}`);

        rl.prompt();
    });
}
