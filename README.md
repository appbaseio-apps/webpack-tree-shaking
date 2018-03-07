# ReactiveSearch Webpack Tree Shaking Example

This setup uses [babel-plugin-direct-import](https://github.com/umidbekkarimov/babel-plugin-direct-import) so your final bundle includes only whats necessary. This is a good option if your project isn't setup with tree shaking. Your `.babelrc` should look like this:

```js
{
    "presets": [
        "react"
    ],
    "plugins": [
        [
          "direct-import",
          [
            "@appbaseio/reactivesearch",
            {
              "name": "@appbaseio/reactivesearch",
              "indexFile": "@appbaseio/reactivesearch/lib/index.es.js"
            }
          ]
        ]
    ]
}
```

For more details check out the [docs](https://opensource.appbase.io/reactive-manual/advanced/guides.html#minimizing-bundle-size).
