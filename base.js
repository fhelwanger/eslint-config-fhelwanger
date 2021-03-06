module.exports = {
  "extends": "eslint:recommended",

  "env": {
    "browser": true,
    "node": true
  },

  "parser": "babel-eslint",

  "rules": {
    /* Possible Errors */
    "no-console": 0,
    "no-constant-condition": 0,
    "valid-jsdoc": 2,

    /* Best Practices */
    "consistent-return": 2,
    "curly": 2,
    "dot-notation": 2,
    "eqeqeq": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-eval": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": [ 2, {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "radix": 2,
    "wrap-iife": 2,
    "yoda": [ 2, "never" ],

    /* Variables */
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-unused-vars": [ 2, { "args": "none" } ],

    /* Stylistic Issue */
    "array-bracket-spacing": [ 2, "always" ],
    "block-spacing": [ 2, "always" ],
    "brace-style": 2,
    "camelcase": 2,
    "comma-spacing": [ 2, { "before": false, "after": true } ],
    "comma-style": [ 2, "last" ],
    "computed-property-spacing": [ 2, "never" ],
    "consistent-this": [ 2, "self" ],
    "eol-last": 2,
    "indent": [ 2, 2, { "SwitchCase": 1 } ],
    "key-spacing": [ 2, { "beforeColon": false, "afterColon": true } ],
    "new-cap": 2,
    "new-parens": 2,
    "no-multiple-empty-lines": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [ 2, "always" ],
    "quotes": [ 2, "single", "avoid-escape" ],
    "semi-spacing": 2,
    "semi": 2,
    "keyword-spacing": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [ 2, { "anonymous": "always", "named": "never" } ],
    "space-in-parens": [ 2, "never" ],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2
  }
};
