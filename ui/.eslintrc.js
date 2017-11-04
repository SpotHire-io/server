module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'jest', 'flowtype'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
