module.exports = {
    coverageThreshold: {
        global: {
            branches: 10,
            functions: 10,
            lines: 10,
        },
    },
    testMatch: [
        '**/test/**/*.test.ts'
      ],
      setupFiles: [
        './test/initTest.ts'
      ]
};