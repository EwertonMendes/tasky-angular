/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: '<rootDir>/jest.global-setup.js',
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@environments/(.*)": "<rootDir>/src/environments/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1"
  }
};
