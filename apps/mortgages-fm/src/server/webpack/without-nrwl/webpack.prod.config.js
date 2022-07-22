const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = {
  ...withModuleFederationPlugin({
    "name": "mortgages-fm",
    "filename": "remoteEntry.mjs",
    "exposes": {
      "./Module": "apps/mortgages-fm/src/app/remote-entry/entry.module.ts"
    },
    "remotes": {},
    "shared": share({
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
      }
    }),
  }),
  output: {
    publicPath: "http://localhost:4201/" // auto config not supported by local browser
  }
};
