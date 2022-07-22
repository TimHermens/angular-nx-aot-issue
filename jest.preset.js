// This will ensure jest uses the correct Timezone regardless of the system time.
process.env.TZ = 'CET';

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!.*.mjs$)',
    '<rootDir>/node_modules/(?!@ionic|ionicons|@ngrx|lodash-es)',
  ],
  modulePathIgnorePatterns: [],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleNameMapper: {
    '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^lodash-es(/.*$)?': 'lodash',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './tmp/jest-junit/angular',
        suiteNameTemplate: '{filepath}',
        outputName: `junit-${new Date().getTime()}.xml`,
      },
    ],
  ],
  resolver: '@nrwl/jest/plugins/resolver',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['node_modules'],
  verbose: false,
  moduleFileExtensions: ['ts', 'js', 'html'],
  setupFiles: ['jest-canvas-mock'],
  collectCoverage: false,
  coverageReporters: ['html', 'json-summary', 'text-summary'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.actions.ts',
    '!**/*.config.ts',
    '!**/*.data.ts',
    '!**/*.interface.ts',
    '!**/*.mock.ts',
    '!**/*.model.ts',
    '!**/*.module.ts',
    '!**/*.routes.ts',
    '!**/*.toggles.ts',
    '!**/*.translate.ts',
    '!**/main.ts',
    '!**/environment.ts',
    '!**/environment.prod.ts',
    '!**/index.ts',
    '!**/polyfills.ts',
    '!**/test-setup.ts',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/server',
  ],
};
