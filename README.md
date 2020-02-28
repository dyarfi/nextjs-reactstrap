### Create Next.JS app command

`$ yarn create next-app`

### Type your project name

`nextjs-reactstrap`

### Add Bootstrap and Reactstrap to the project

`$ yarn add bootstrap reactstrap @zeit/next-sass node-sass autoprefixer cssnano`

### Add next.config.js in your project root and add NextJS withSass config

`const withSass = require("@zeit/next-sass"); module.exports = withSass({ cssLoaderOptions: { importLoaders: 2 } });`

### Add postcss.config.js in your project root and add PostCSS config

`module.exports = { plugins: [ // PostCSS Config require("cssnano")({ cascade: false, minified: true }), require("autoprefixer")({ flexbox: "no-2009", stage: 3, overrideBrowserslist: [ "last 3 version", "Chrome >= 35", "Firefox >= 38", "Edge >= 10", "Explorer >= 10", "ie >= 10", "iOS >= 8", "Safari >= 8", "Android 2.3", "Android >= 4", "Opera >= 12" ] }) ] };`

### Start project development

`$ yarn dev`

#### Add boostrap to \_app.js and restart nextjs

`import 'bootstrap/dist/css/bootstrap.min.css';`

#### Or add Custom SCSS to import boostrap to \_app.js and restart nextjs

`import 'node_modules/bootstrap/scss/bootstrap.scss';`

`import 'assets/scss/main.scss';`
