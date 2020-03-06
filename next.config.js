const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  },
  publicRuntimeConfig: {
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    ENV_DEFAULT: "production"
  }
});
