module.exports = {
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
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