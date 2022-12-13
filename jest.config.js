/* eslint-disable no-undef */
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testTimeout: 30000,
};
