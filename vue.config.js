const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_global.scss";
          `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, 'src/components/common/')
      }
    }
  }
};