// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
   testEnvironment: 'node',
   preset: 'ts-jest/presets/default',
   globals: {
       'ts-jest': {
           useESM: true,
       },
   },
   moduleNameMapper: {
       '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
   },
   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
   coverageDirectory: 'coverage',
   collectCoverageFrom: [
       'src/**/*.ts',
       'src/**/*.mts',
       '!src/**/*.d.ts',
       '!src/**/*.d.mts',
   ],
};

module.exports = config;
