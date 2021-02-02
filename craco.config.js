const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#f759ab",
              "@layout-header-background": "#ff85c0",
              "@popover-background": "#fff0f6",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
