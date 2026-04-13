module.exports = {
    coverageThreshold: {
        global: {
            branches: 30,
            functions: 30,
            lines: 30,
        },
    },
    testMatch: [
        '**/src/**/*.spec.ts',
        '**/src/test/**/*.test.ts'
    ],
    setupFilesAfterEnv: [
        './src/test/init-test.ts'
        ],

    collectCoverageFrom: [
        'src/**/{!(file|cli|test|stat|event-listener|init-test|base-mocks),}.ts'
    ],
    testTimeout: 600000,
}
