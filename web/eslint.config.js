import tseslint from 'typescript-eslint';

export default tseslint.config({
    files: [
        'src/**/*.js',
        'src/**/*.ts',
        'test/**/*.ts',
    ],
    plugins: {
        '@typescript-eslint': tseslint.plugin,
        //'eslint-plugin-tsdoc': ...,
    },
    languageOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: tseslint.parser,
        globals: {}
    },
    rules: {
        'semi': [ 'error', 'always' ],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' } ],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'indent': [ 'error', 4, { 'SwitchCase': 1 }],
        'key-spacing': 'warn',
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 } ],
        'no-multi-spaces': 'error',
        'no-throw-literal': 'error',
        //'tsdoc/syntax': 'warn',
    },
});

// Original: .eslintrc.json
/*
{
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jest": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
      "eslint-plugin-tsdoc"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "protobuf":"readonly",
        "CryptoJS":"readonly",
        "JSZip":"readonly",
        "OAuth":"readonly",
        "jsPDF":"readonly",
        "HakuNeko": "readonly",
        "Engine": "readonly",
        "EventListener": "readonly",
        "Connector": "readonly",
        "ClipboardConnector": "readonly",
        "EXIF": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "error",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
        "comma-spacing": "warn",
        "comma-style": "warn",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "key-spacing": "warn",
        "no-trailing-spaces": "error",
        "no-multiple-empty-lines": ["error", {"max": 1, "maxBOF": 0, "maxEOF": 0}],
        "no-multi-spaces": "error",
        "no-throw-literal": "error",
        "tsdoc/syntax": "warn"
    }
}
*/