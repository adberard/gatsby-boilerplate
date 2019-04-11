module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "react-hooks"],
  "extends": [
    'plugin:@typescript-eslint/recommended',
    "eslint:recommended",
    "airbnb-typescript",
    "gatsby-standard",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "env": {
    "browser": true
  },
  "settings": {
    // "import/resolver": {
    //   "typescript": {},
      // "alias": {
      // "map": [
      //   ["@src", "./src"],
      //   ["@components/*", "./src/components/*"]
      // ],
      // "extensions": [".js", ".css", ".scss", ".ts", ".tsx"],
      // }
    // }
  },
  "rules": {
    // rules to keep
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'react/prop-types': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'import/no-named-as-default': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',

    // Conflict when extending interface with WithStyle props
    '@typescript-eslint/no-empty-interface': 'off',

    // Only choose one to avoid duplicate warnings
    // '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',

    // "quotes": ["error", "backtick"],
    "@typescript-eslint/indent": ["error", 2],
// "import/no-extraneous-dependencies": ["error", {"packageDir": './plugins/'}],
// "import/no-extraneous-dependencies": 'off',


    // Rules to remove in the future for better code
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    "no-unused-expressions": ["error", {"allowTernary": true}],

    // js impor in ts bug
    'import/no-unresolved': 'off',
  }
}
