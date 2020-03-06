const withSass = require("@zeit/next-sass");
const isProd = (process.env.NODE_ENV || "production") === "production";
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  },
  publicRuntimeConfig: {
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    ENV_DEFAULT: "production"
  },
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  assetPrefix: isProd ? "/nextjs-reactstrap" : ""
});
