module.exports = {
  "extends": "fhelwanger/es6",

  "plugins": [
    "react"
  ],

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "jsx-quotes": [ 2, "prefer-double" ],
    "react/jsx-boolean-value": [ 2, "never" ],
    "react/jsx-closing-bracket-location": [ 2, "line-aligned" ],
    "react/jsx-curly-spacing": [ 2, "never", { "allowMultiline": true } ],
    "react/jsx-handler-names": [ 2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on",
    }],
    "react/jsx-indent-props": [ 2, 2 ],
    "react/jsx-indent": [ 2, 2 ],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": [ 2, { "ignoreCase": false } ],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": [ 2, { "pragma": "React" } ],
    "react/jsx-uses-vars": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": [ 2, "allow-in-func" ],
    "react/no-did-update-set-state": [ 2, "allow-in-func" ],
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": [ 2, "always" ],
    "react/prop-types": [ 2, { "ignore": [], customValidators: [] } ],
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      "order": [
        "lifecycle",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "/^on.+$/",
        "render",
        "/^render.+$/",
        "everything-else"
      ]
    }],
    "react/wrap-multilines": [ 2, {
      "declaration": true,
      "assignment": true,
      "return": true
    }]
  }
};
