module.exports = {
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
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