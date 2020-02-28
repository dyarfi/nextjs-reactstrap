### Create Next.JS app command

`$ yarn create next-app`

### Type your project name

`nextjs-reactstrap`

### Add Bootstrap and Reactstrap to the project

`$ yarn add bootstrap reactstrap @zeit/next-sass node-sass`

### Add next.config.js in your project root and add NextJS SASS setup

`const withSass = require("@zeit/next-sass"); module.exports = withSass({ cssLoaderOptions: { importLoaders: 2 } });`

### Start project development

`$ yarn dev`

#### Add boostrap to \_app.js and restart nextjs

`import 'bootstrap/dist/css/bootstrap.min.css';`

#### Or add Custom SCSS to import boostrap to \_app.js and restart nextjs

`import 'node_modules/bootstrap/scss/bootstrap.scss';`

`import 'assets/scss/main.scss';`
