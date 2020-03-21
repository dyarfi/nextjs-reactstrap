### Create Next.JS app command

`$ yarn create next-app`

### Type your project name

`nextjs-reactstrap`

### Add Bootstrap and Reactstrap to the project

`$ yarn add redux react-redux next-redux-wrapper prop-types bootstrap reactstrap @zeit/next-sass node-sass cssnano @fortawesome/fontawesome-free`

Add dev dependencies
`$ yarn add --dev redux-devtools-extension prettier`

> Adding chrome redux dev tool for debugging and pretier for code formatting

### Our project tree directory

```
.
├── README.md
├── assets
│   └── scss
│       ├── base
│       │   ├── base.scss
│       │   ├── functions.scss
│       │   ├── path.scss
│       │   ├── placeholder.scss
│       │   └── utility.scss
│       ├── components
│       │   ├── _component.scss
│       │   └── card.scss
│       ├── main.scss
│       ├── themes
│       │   └── theme.scss
│       └── vendors
│           ├── _variables.scss
│           └── vendor.scss
├── components
│   ├── card
│   │   ├── EmployeeCard.jsx
│   │   ├── EmployeeVCard.jsx
│   │   ├── MenuCard.jsx
│   │   ├── PostCard.jsx
│   │   ├── ProfileCard.jsx
│   │   └── index.js
│   └── container
│       ├── HomeContainer.jsx
│       ├── HomePage.jsx
│       ├── card
│       │   ├── EmployeeContainer.jsx
│       │   ├── EmployeePage.jsx
│       │   ├── PostsContainer.jsx
│       │   └── PostsPage.jsx
│       ├── carousel
│       │   ├── CarouselsContainer.jsx
│       │   └── CarouselsPage.jsx
│       ├── dashboard
│       │   ├── DashboardContainer.jsx
│       │   └── DashboardPage.jsx
│       ├── form
│       │   ├── ButtonsContainer.jsx
│       │   ├── ButtonsPage.jsx
│       │   ├── FormsContainer.jsx
│       │   └── FormsPage.jsx
│       ├── page
│       │   ├── DocumentationContainer.jsx
│       │   ├── DocumentationPage.jsx
│       │   ├── LoginContainer.jsx
│       │   ├── LoginPage.jsx
│       │   ├── ProfileContainer.jsx
│       │   ├── ProfilePage.jsx
│       │   ├── SettingContainer.jsx
│       │   ├── SettingPage.jsx
│       │   ├── TypographyContainer.jsx
│       │   └── TypographyPage.jsx
│       └── table
│           ├── TableContainer.jsx
│           └── TablePage.jsx
├── constants
│   ├── cards.js
│   ├── menus.js
│   ├── slides.js
│   └── vars.js
├── layout
│   ├── ErrorLayout.jsx
│   ├── Loader.jsx
│   ├── MainLayout.jsx
│   ├── SingleLayout.jsx
│   ├── foot
│   │   └── Footer.jsx
│   ├── head
│   │   └── HeadDefault.jsx
│   └── nav
│       ├── NavBar.jsx
│       └── NavLeft.jsx
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
│   ├── dashboard
│   │   └── dashboard.jsx
│   ├── form
│   │   ├── buttons.jsx
│   │   └── forms.jsx
│   ├── index.jsx
│   ├── page
│   │   ├── documentation.jsx
│   │   ├── login.jsx
│   │   ├── profile.jsx
│   │   ├── setting.jsx
│   │   └── typography.jsx
│   └── table
│       └── tables.jsx
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
│   │   ├── trianglify-lowres.png
│   │   ├── unsplash-stil-336188-768x648px.jpg
│   │   └── unsplash-stil-336188.jpg
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
├── store
│   ├── actionTypes.js
│   ├── defaultStates.js
│   ├── errorTypes.js
│   ├── index.js
│   ├── redux
│   │   ├── index.js
│   │   └── layout.js
│   └── statusTypes.js
└── yarn.lock

32 directories, 114 files
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
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
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

### package.json file

```
{
    "name": "nextjs-reactstrap",
    "description": "NextJS with Reactstrap Dashboard",
    "keywords": [
      "NextJS",
      "ReactJS",
      "Reactstrap"
    ],
    "homepage": "https://github.com/dyarfi/nextjs-reactstrap",
    "version": "0.1.0",
    "private": false,
    "license": "Unlicense",
    "author": {
      "name": "Defrian Yarfi",
      "email": "defrian.yarfi@gmail.com",
      "url": "https://dyarfi.github.io/"
    },
    "contributors": [
      "defrian <dyarfi20@gmail.com> (https://dyarfi.github.io/)"
    ],
    "scripts": {
      "dev": "next dev -p 3001",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "@fortawesome/fontawesome-free": "^5.12.1",
      "@zeit/next-sass": "^1.0.1",
      "bootstrap": "^4.4.1",
      "cssnano": "^4.1.10",
      "next": "9.2.1",
      "next-redux-wrapper": "^5.0.0",
      "node-sass": "^4.13.1",
      "prop-types": "^15.7.2",
      "react": "16.12.0",
      "react-dom": "16.12.0",
      "react-redux": "^7.2.0",
      "reactstrap": "^8.4.1",
      "redux": "^4.0.5"
    },
    "browserslist": [
      ">0.3%",
      "not ie 11",
      "not dead",
      "not op_mini all"
    ],
    "devDependencies": {
      "prettier": "^1.19.1",
      "redux-devtools-extension": "^2.13.8"
    }
  }
```

### Start project development

`$ yarn dev`

#### Open up yor browser and hit http://localhost:3001

#### Add Boostrap to \_app.js and restart nextjs

~~import 'bootstrap/dist/css/bootstrap.min.css';~~

#### Or add Custom SCSS to import boostrap to \_app.js and restart nextjs

`import 'assets/scss/main.scss';`

```
// Imports SCSS theme
@import "vendors/vendor";
@import "themes/theme";
@import "components/component";
@import "base/placeholder";
@import "base/utility";
@import "base/base";
```

##### assets/scss/main.scss

Import bootstrap scss library `import 'node_modules/bootstrap/scss/bootstrap.scss';` in your main scss includes

```
// Vendors variables override and path
@import "variables";
@import "base/path";

/*
|--------------------------------------------------------------------------
| Vendor packages
|--------------------------------------------------------------------------
*/
@import
'node_modules/bootstrap/scss/bootstrap', // Or include BS 4 SCSS in assets/scss/vendors/bootstrap
'node_modules/@fortawesome/fontawesome-free/scss/brands', // Font Awesome 5 Brand
'node_modules/@fortawesome/fontawesome-free/scss/regular', // Font Awesome 5 Regular
'node_modules/@fortawesome/fontawesome-free/scss/solid', // Font Awesome 5 Solid
'node_modules/@fortawesome/fontawesome-free/scss/fontawesome' // Font Awesome 5 Default
;

```

##### assets/scss/vendors/vendor.scss

### Demo: [https://nextjs-reactstrap.now.sh/](https://nextjs-reactstrap.now.sh/)
