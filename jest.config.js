module.exports = {
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
        },
    },
    testMatch: [
      '**/test/**/*.test.ts'
    ],
    setupFilesAfterEnv: [
      './test/initTest.ts'
    ],
    collectCoverageFrom: [
      'src/**/{!(file|cli|test|stat|eventListener),}.ts'
    ]
}