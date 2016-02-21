module.exports = {
  "extends": "fhelwanger/base",

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "modules"
  },

  "env": {
    "es6": true
  },

  "parser": "babel-eslint",

  "rules": {
    "arrow-parens": [ 2, "as-needed" ],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": [ 2, {
      "before": false,
      "after": true
    }],
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "require-yield": 2
  }
};
