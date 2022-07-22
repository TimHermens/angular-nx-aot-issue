# How to use

1. Run `yarn` to install the dependencies

### Scenario 1: run the app with AoT enabled (prod mode)

1. Run `nx serve mortgages-fm -c production` to start the app in production mode
2. Navigate to http://localhost:4201/
3. The error is thrown: `TypeError: Cannot read properties of undefined (reading 'ɵcmp')`, how to fix?

You can also run the app with `nx serve mortgages-fm -c production-without-nrwl` which doesn't use NRWL's helper method to configure the `webpack.prod.conf.js` config file. The error is also thrown with this config.

### Scenario 2: run the app with AoT disabled

The app runs just fine when you disable AoT. But this is not desirable for production builds.

1. Run `nx serve mortgages-fm -c production-aot-disabled` to start the app in production mode with AoT disabled
2. Navigate to http://localhost:4201/
3. No error is thrown and the app works fine

### Scenario 3: exclude ui-components from the projects and run the app with AoT enabled

1. Open [angular.json](./angular.json) and remove the project `ui-components`.
2. Run `nx serve mortgages-fm -c production` to start the app in production mode
3. Navigate to http://localhost:4201/
4. No error is thrown and the app works fine

### Scenario 4: exclude ui-components from the `resolve.alias` webpack config

1. Open [webpack.prod.conf.js](./apps/mortgages-fm/src/server/webpack/without-nrwl/webpack.prod.config.js)
2. Remove `'@core/ui-components'` from the shared mappings list
3. Run `nx serve mortgages-fm -c production-without-nrwl`
4. Navigate to http://localhost:4201/
5. No error is thrown and the app works fine

---

#### Note
To be able to run production mode locally, I had to introduce a hack in the [webpack.prod.config.js](./apps/mortgages-fm/src/server/webpack/webpack.prod.config.js) to override the `publicPath: 'auto'` setting to `publicPath: 'http://localhost:4201/'` because the auto setting is not supported by local browsers.

## NX 14 Angular 14

I have also included an implementation for NX 14 on the branch `angular14`. The exact same issue happens there as well.

There is one weird difference going on between the Angular 13 and Angular 14 version when you try to run the app with the manual webpack config: `nx serve mortgages-fm -c production-without-nrwl`. In Angular 14 you will see a different runtime error:

```
Error: Cannot find module '@angular/platform-browser'
```

When I try to build the app `nx build mortgages-fm -c production-without-nrwl`, I can see plenty of essential core bundles missing, such as:

- Angular's platform browser bundle
- Angular's common bundle
- Ionic's core bundle
- And a bunch more
