module.exports = {
  hooks: {
    'pre-commit': 'webpack && lint-staged', // Catch build errors by running webpack before linting
  },
};
