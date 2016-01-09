module.exports = {
  "extends": "eslint:recommended",
  
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  
  "parser": "babel-eslint",
  
  "rules": {
    /* Possible Errors */
    "no-unexpected-multiline": 2,
    "valid-jsdoc": 2,
    
    /* Best Practices */
    "consistent-return": 2,
    "curly": 2,
    "dot-location": [ 2, "object" ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-empty-label": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    
    /* Variables */
    "no-catch-shadow": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
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
    "jsx-quotes": [ 2, "prefer-double" ],
    "key-spacing": [ 2, { "beforeColon": false, "afterColon": true } ],
    "new-cap": 2,
    "new-parens": 2,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [ 2, "always" ],
    "one-var": [ 2, "never" ],
    "quotes": [ 2, "single", "avoid-escape" ],
    "semi-spacing": 2,
    "semi": 2,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [ 2, { "anonymous": "always", "named": "never" } ],
    "space-before-keywords": 2,
    "space-in-parens": [ 2, "never" ],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    
    /* ES6 */
    "arrow-body-style": [ 2, "as-needed" ],
    "arrow-parens": [ 2, "as-needed" ],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": [ 2, {
      "before": false, 
      "after": true
    }],
    "no-arrow-condition": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-reflect": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2
  }
};
