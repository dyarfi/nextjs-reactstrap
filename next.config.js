const withSass = require("@zeit/next-sass");
module.exports = withSass({
  //   cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2
  }
  //   webpack: config => {
  //     config.module.rules.forEach(rule => {
  //       if (rule.test.toString().includes(".scss")) {
  //         rule.rules = rule.use.map(useRule => {
  //           if (typeof useRule === "string") {
  //             return { loader: useRule };
  //           }
  //           if (useRule.loader === "css-loader") {
  //             return {
  //               oneOf: [
  //                 {
  //                   test: new RegExp(".global.scss$"),
  //                   loader: useRule.loader,
  //                   options: {}
  //                 },
  //                 {
  //                   loader: useRule.loader,
  //                   options: { modules: true }
  //                 }
  //               ]
  //             };
  //           }
  //           return useRule;
  //         });
  //         delete rule.use;
  //       }
  //     });
  //     return config;
  //   }
});
