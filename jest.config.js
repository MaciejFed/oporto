module.exports = {
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
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
};