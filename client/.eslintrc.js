module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, "tab"],
    'no-tabs': 0,
    'comma-dangle': [0, "never"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
