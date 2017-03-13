module.exports = {
    extends: "airbnb",
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true
      }],
      'comma-dangle': ["error", "only-multiline"]
    }
};
