# How to use

1. Run `yarn` to install the dependencies

### Scenario 1: run the app with AoT enabled (prod mode)

1. Run `nx serve mortgages-fm -c production` to start the app in production mode
2. Navigate to http://localhost:4201/mortgages-fm/fm-page2
3. The error is thrown: `TypeError: Cannot read properties of undefined (reading 'ɵcmp')`, how to fix?

### Scenario 2: run the app with AoT disabled

The app runs just fine when you disable AoT. But this is not desirable for production builds.

1. Run `nx serve mortgages-fm` to start the app in dev mode with AoT disabled
   1. You can also try production mode with aot disabled: `nx serve mortgages-fm -c production-aot-disabled`
2. Navigate to http://localhost:4201/mortgages-fm/fm-page2
3. No error is thrown and the app works fine

### Scenario 3: exclude ui-components from the projects and run the app with AoT enabled

1. Go to [angular.json](./angular.json) and remove the project `ui-components`.
2. Run `nx serve mortgages-fm -c production` to start the app in production mode
3. Navigate to http://localhost:4201/mortgages-fm/fm-page2
4. No error is thrown and the app works fine

---

To be able to run production mode locally, I had to introduce a hack in the [webpack.prod.config.js](./apps/mortgages-fm/src/server/webpack/webpack.prod.config.js) to override the `publicPath: 'auto'` setting to `publicPath: 'http://localhost:4201/'` because the auto setting is not supported by local browsers.

## NX 14 Angular 14

I have also included an implementation for NX 14 on the branch `angular14`. The exact same issue happens there as well.
