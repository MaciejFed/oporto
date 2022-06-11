import type { CommandBuilder } from 'yargs';
import clear from 'clear';
import figlet from 'figlet';
import chalk from "chalk";

type Options = {
    testCommand: string;
    time: number | undefined;
};

export const command = 'test <testCommand>';
export const desc = 'Run test';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .options({
            time: { type: 'number', default: 5 },
        })
        .positional('testCommand', { type: 'string', demandOption: true });

export const handler = async (): Promise<void> => {
    clear();
    console.log(
        chalk.red(
            figlet.textSync('oporto', {horizontalLayout: 'full'})
        )
    );
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log("Starting test...")
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log("Done")
    clear();
    process.exit(0);
};
