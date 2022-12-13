/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('ts-jest').JestConfigWithTsJest} */

const tsJest = require('ts-jest/jest-preset');
const jestPuppeteer = require('jest-puppeteer/jest-preset');

module.exports = {
  ...tsJest,
  ...jestPuppeteer,
  testEnvironment: 'node',
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testTimeout: 30000,
  coveragePathIgnorePatterns: ['estadao.ts'],
};
