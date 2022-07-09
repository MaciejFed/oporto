module.exports = {
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
    testMatch: [
      '**/test/**/*.test.ts'
    ],
    setupFilesAfterEnv: [
      './test/initTest.ts'
    ],
    collectCoverageFrom: [
      'src/**/{!(file|cli|test|eventListener),}.ts'
    ]
}