import { beforeAll, describe, expect, it } from '@jest/globals';
import { BaseScrapper } from 'source/scrappers/base-scrapper/base-scrapper';

class ConcreteScrapper extends BaseScrapper {
  public url = 'https://www.google.com/';
}

describe('BaseScrapper', () => {
  const scrapper = new ConcreteScrapper();

  it('should be defined', () => {
    expect(scrapper).toBeDefined();
  });

  describe('initBrowser', () => {
    beforeAll(async () => {
      await scrapper['initBrowser']();
    });

    it('browser and page should be defined', () => {
      expect(scrapper['browser']).toBeDefined();
      expect(scrapper['page']).toBeDefined();
    });

    it('browser should be connected', () => {
      expect(scrapper['browser'].isConnected()).toBeTruthy();
    });

    it('page should be loaded', () => {
      expect(scrapper['page'].isClosed()).toBeFalsy();
    });

    it('page url should be equal to scrapper url', () => {
      expect(scrapper['page'].url()).toBe(scrapper.url);
    });
  });

  describe('closeBrowser', () => {
    beforeAll(async () => {
      await scrapper['closeBrowser']();
    });

    it('browser and page should be null', () => {
      expect(scrapper['browser']).toBeNull();
      expect(scrapper['page']).toBeNull();
    });
  });

  describe('searchNews', () => {
    it('should throw a not implemented error', () => {
      expect(() => scrapper.searchNews('test')).toThrowError();
    });
  });

  describe('extractNews', () => {
    it('should throw a not implemented error', () => {
      expect(() => scrapper.extractNews()).toThrowError();
    });
  });
});
