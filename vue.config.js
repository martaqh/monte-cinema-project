/* eslint-env node */

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/styles/settings.scss";    `
        }
      }
    }
  };