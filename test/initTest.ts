// @ts-nocheck
global.process.stdin.setRawMode = (mode: boolean) => undefined;

process.stdin.setRawMode = () => {};

jest.spyOn(console, 'log').mockImplementation(() => {});