const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./mfe.config');
module.exports = async (angularWebConfig) => {
  const mergedConfig = (await withModuleFederation(config))(angularWebConfig);
  mergedConfig.output.publicPath = 'http://localhost:4201/'; // auto config not supported by local browser
  return mergedConfig;
};
