module.exports = {
  root: true,
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['babel', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^ignore' }],
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'linebreak-style': ['error', 'unix'],
    'babel/new-cap': 1,
    'babel/camelcase': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 1,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
    'babel/valid-typeof': 1,
    semi: ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
  },
};
