module.exports = {
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 40,
            lines: 40,
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
