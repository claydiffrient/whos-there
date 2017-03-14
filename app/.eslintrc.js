module.exports = {
    extends: "airbnb",
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true
      }],
      'comma-dangle': ["error", "only-multiline"],
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    }
};
