module.exports = {
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
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