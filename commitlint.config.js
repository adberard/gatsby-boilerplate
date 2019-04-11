module.exports = {
  extends: [`@commitlint/config-conventional`],
  rules: {
    // Disable this rule so we can use it also for react components
    'scope-case': [0, `never`, [`lower-case`]],
  },
};
