module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@spotify'
    ],
    'rules': {
        'object-curly-spacing': [2, 'always'],
        'quotes': ['error', 'single'],
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'jest/expect-expect': 0,
        'jest/no-disabled-tests': 0,
        'no-useless-escape': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'no-console': 0
    },
};
