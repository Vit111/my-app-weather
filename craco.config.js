const CracoLessPlugin = require('craco-less');

const antVariables = {
     '@primary-color': '#1890ff' 
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};