# eslint-config-fhelwanger

[eslint-config](http://eslint.org/docs/developer-guide/shareable-configs) for
my projects and for anyone else who would like to use it :wink:

## Usage

It uses eslint 2.x.

```bs
npm install --save-dev eslint eslint-config-fhelwanger eslint-plugin-react babel-eslint
```

Then, extend `fhelwanger` in your `.eslintrc`:

```json
{
    "extends": "fhelwanger"
}
```

It'll export all the ES6 + React rules.
If you want just ES6 or ES5, you can extend `"fhelwanger/es6"` or `"fhelwanger/base"`.
In these cases, there is no need to install `eslint-plugin-react`.

## Thanks

* [eslint](http://eslint.org/) for its amazing linting.
* [eslint-config-rackt](https://github.com/rackt/eslint-config-rackt) for providing me a starting point on how to create my own.
* [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) - it's awesome.

## License

MIT
