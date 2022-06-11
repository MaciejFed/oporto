describe("cli", () => {
    let originalArgv: string[];

    beforeEach(() => {
        jest.resetModules();

        originalArgv = process.argv;
    });

    afterEach(() => {
        jest.resetAllMocks();

        process.argv = originalArgv;
    });

    it("should run install command", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await runCommand("test", "start");

        expect(consoleSpy).toHaveBeenCalled();
    });
});

/**
 * Programmatically set arguments and execute the CLI script
 *
 * @param {...string} args - positional and option arguments for the command to run
 */
async function runCommand(...args: string[]) {
    process.argv = [
        "node", // Not used but a value is required at this index in the array
        "./../src/cli", // Not used but a value is required at this index in the array
        ...args,
    ];

    try {
        return require("./../build/src/cli");
    } catch (e) {
        console.log(e);
    }
}
