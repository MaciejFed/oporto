module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    "rules": {
        "object-curly-spacing": [2, "always"],
        "quotes": ["error", "single"],
        "@typescript-eslint/no-empty-function": 0,
        '@typescript-eslint/ban-ts-comment': 0
    },
};
