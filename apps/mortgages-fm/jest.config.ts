export default {
  preset: '../../jest.preset.js',

  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/mortgages-fm/',
  coverageThreshold: {
    // todo these should be more reasonable values
    global: {
      branches: 80,
      functions: 50,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  displayName: 'ideal',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!.*.mjs$)'],
};
