module.exports = {
  extends: [
    'eslint:recommended',
    'google'
  ],
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'no-console': 'warn',
    'require-jsdoc': 0,
    'max-len': [
      'error',
      120
    ]
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
};
