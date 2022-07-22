const { ModuleFederationPlugin } = require('webpack').container;
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.resolve(__dirname, '../../../../../../tsconfig.base.json'),
  [
    '@core/ui-components',
    '@core/mortgages-fm-page-fm-page1',
    '@core/mortgages-fm-page-fm-page2',
    '@core/shared-translate'
  ]
);

module.exports = {
  "name": "mortgages-fm",
  "output": {
    "uniqueName": "mortgages-fm",
    "publicPath": "http://localhost:4201/"
  },
  "optimization": {
    "runtimeChunk": false
  },
  "resolve": {
    "alias": {
      ...sharedMappings.getAliases()
    }
  },
  "experiments": {
    "outputModule": true
  },
  "plugins": [
    new ModuleFederationPlugin({
      "name": "mortgages-fm",
      "filename": "remoteEntry.mjs",
      "exposes": {
        "./Module": "apps/mortgages-fm/src/app/remote-entry/entry.module.ts"
      },
      "remotes": {},
      "shared": mf.share({
        "@angular/core": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@angular/platform-browser": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@angular/router": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@ionic/angular": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@ngx-translate/core": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@angular/platform-browser-dynamic": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        "@nrwl/angular": {
          "singleton": true,
          "strictVersion": true,
          "requiredVersion": "auto"
        },
        ...sharedMappings.getDescriptors()
      }),
      "library": {
        "type": "module"
      }
    }),
    sharedMappings.getPlugin()
  ]
};
