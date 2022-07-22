module.exports = {
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/libs/ui/ui-components',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  displayName: 'ui-components',
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!.*.mjs$)'],
};
