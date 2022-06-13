import { sleep } from '../src/utils/utils';

describe('cli', () => {
    let originalArgv: string[];

    beforeEach(() => {
        jest.resetModules();

        originalArgv = process.argv;
    });

    afterEach(() => {
        jest.resetAllMocks();

        process.argv = originalArgv;
    });

    // it('should start a program', async () => {
    //     const consoleSpy = jest.spyOn(console, 'log');
    //
    //     await runCommand('test', 'start');
    //
    //     await sleep(4000);
    //
    //     expect(consoleSpy).toHaveBeenCalled();
    // });
});

/**
 * Programmatically set arguments and execute the CLI script
 *
 * @param {...string} args - positional and option arguments for the command to run
 */
async function runCommand(...args: string[]) {
    process.argv = [
        'node', // Not used but a value is required at this index in the array
        './../src/cli', // Not used but a value is required at this index in the array
        ...args,
    ];

    try {
        return require('./../build/src/cli');
    } catch (e) {
        console.log(e);
    }
}
