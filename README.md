### Create Next.JS app command

`$ yarn create next-app`

### Type your project name

`nextjs-reactstrap`

### Add Bootstrap and Reactstrap to the project

`$ yarn add bootstrap reactstrap @zeit/next-sass node-sass autoprefixer cssnano @fortawesome/fontawesome-free imagehover.css`

Why I use autoprefixer and cssnano?

> As default NextJS has a builtin CSS-in-JS, Styled JSX and CSS support with autoprefixer, since we are using node-sass with custom scss, we need to add some other tools for css autoprefixing and minified the css.

### Our project tree directory
```
.
├── README.md
├── assets
│   └── scss
│       ├── base
│       │   ├── base.scss
│       │   ├── path.scss
│       │   ├── placeholder.scss
│       │   └── utility.scss
│       ├── components
│       │   ├── _component.scss
│       │   └── cards.scss
│       ├── main.scss
│       ├── themes
│       │   └── theme.scss
│       └── vendors
│           ├── _variables.scss
│           └── vendor.scss
├── components
│   ├── footer.jsx
│   ├── head.jsx
│   ├── nav.jsx
│   ├── navLeft.jsx
│   └── navbar
│       └── navbar.jsx
├── constants
│   ├── cards.jsx
│   ├── slides.jsx
│   └── vars.jsx
├── layout
│   ├── ErrorLayout.jsx
│   └── MainLayout.jsx
├── next.config.js
├── package.json
├── pages
│   ├── _app.jsx
│   ├── _error.jsx
│   ├── card
│   │   ├── employees.jsx
│   │   └── posts.jsx
│   ├── carousel
│   │   └── carousels.jsx
│   ├── dashboard.jsx
│   ├── documentation.jsx
│   ├── form
│   │   ├── buttons.jsx
│   │   └── forms.jsx
│   ├── index.jsx
│   ├── table
│   │   └── tables.jsx
│   └── typography.jsx
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── menu768x768px1.jpg
│   │   ├── menu768x768px2.jpg
│   │   ├── menu768x768px3.jpg
│   │   ├── menu768x768px4.jpg
│   │   ├── menu768x768px5.jpg
│   │   ├── menu768x768px6.jpg
│   │   ├── profile10.jpg
│   │   ├── profile11.jpg
│   │   ├── profile2.jpg
│   │   ├── profile5.jpg
│   │   ├── profile6.jpg
│   │   ├── profile9.jpg
│   │   └── trianglify-lowres.png
│   ├── logo.svg
│   └── webfonts
│       ├── fa-brands-400.eot
│       ├── fa-brands-400.svg
│       ├── fa-brands-400.ttf
│       ├── fa-brands-400.woff
│       ├── fa-brands-400.woff2
│       ├── fa-regular-400.eot
│       ├── fa-regular-400.svg
│       ├── fa-regular-400.ttf
│       ├── fa-regular-400.woff
│       ├── fa-regular-400.woff2
│       ├── fa-solid-900.eot
│       ├── fa-solid-900.svg
│       ├── fa-solid-900.ttf
│       ├── fa-solid-900.woff
│       └── fa-solid-900.woff2
└── yarn.lock

18 directories, 67 files
```

### Add next.config.js in your project root and add NextJS withSass config

```
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  }
});
```

### Add postcss.config.js in your project root and add PostCSS config

```
module.exports = {
  plugins: [
    // PostCSS Config
    require("cssnano")({
      cascade: false,
      minified: true,
      discardComments: {
        removeAll: true
      }
    }),
    require("autoprefixer")({
      flexbox: "no-2009",
      stage: 3,
      overrideBrowserslist: [
        "last 3 version",
        "Chrome >= 35",
        "Firefox >= 38",
        "Edge >= 10",
        "Explorer >= 10",
        "ie >= 10",
        "iOS >= 8",
        "Safari >= 8",
        "Android 2.3",
        "Android >= 4",
        "Opera >= 12"
      ]
    })
  ]
};
```

### Start project development

`$ yarn dev`

#### Add boostrap CSS to \_app.js and restart nextjs

`import 'bootstrap/dist/css/bootstrap.min.css';`

#### Or add Custom SCSS to import boostrap to \_app.js and restart nextjs

`import 'node_modules/bootstrap/scss/bootstrap.scss';`

`import 'assets/scss/main.scss';`
