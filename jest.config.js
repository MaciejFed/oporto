module.exports = {
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
        },
    },
    testMatch: [
        '**/src/**/*.spec.ts',
        '**/test/**/*.test.ts'
    ],
    setupFilesAfterEnv: [
        './test/init-test.ts'
    ],
    collectCoverageFrom: [
        'src/**/{!(file|cli|test|stat|event-listener),}.ts'
    ]
}
