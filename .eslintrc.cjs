const prettierConfig = require('./.prettierrc.cjs');

module.exports = {
  env: {
    browser: true,
    es2016: true,
    amd: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Set: 'readonly',
  },
  overrides: [
    {
      files: '**/*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'alloy',
        'prettier',
      ],
      rules: {
        'prettier/prettier': [
          'error', prettierConfig,
        ],
      },
    },
    {
      files: '**/*.js',
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        project: [
          './tsconfig.json',
        ],
      },
      plugins: ['prettier'],
      extends: [
        'eslint:recommended',
        'prettier',
      ],
      rules: {
        'prettier/prettier': [
          'error', prettierConfig,
        ],
        'no-param-reassign': 'off',
        'no-useless-constructor': 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'no-fallthrough': ['error', { 'commentPattern': 'no-break' }],
      },
    },
  ],
};
