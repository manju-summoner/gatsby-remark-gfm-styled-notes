# gatsby-remark-gfm-styled-notes

```md
> **Note**
> you can write GitHub Flavored Markdown styled notes 
```

```md
> **Warning**
> you can write GitHub Flavored Markdown styled nots 
```

## How to use
```js:gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          require.resolve("./plugins/gatsby-remark-gfm-styled-notes"),
      ],
    },
  },
],
```
or
```js:gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        require.resolve("./plugins/gatsby-remark-gfm-styled-notes"),
      ],
    },
  },
],
```