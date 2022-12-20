module.exports = {
  ignorePatterns: ['vite.*.js'],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'html', 'import'],
  extends: ['prettier', 'plugin:storybook/recommended'],
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    //TODO: Remove (maybe)
    '@typescript-eslint/ban-types': 'off', //TODO: Remove (maybe)
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier'],
};
