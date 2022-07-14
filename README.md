# gatsby-remark-gfm-styled-notes

```markdown
> **Note**
> you can write GitHub Flavored Markdown styled notes 
```

```markdown
> **Warning**
> you can write GitHub Flavored Markdown styled notes 
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