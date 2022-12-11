/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { BaseScrapper } from 'source/scrappers/base-scrapper/base-scrapper';
import { UrlSearch } from 'source/utilities/decorators/url-search.decorator';

@UrlSearch('https://www.google.com/search?q=:q')
class ConcreteScrapper extends BaseScrapper {
  public url = 'https://www.google.com/';
}

describe('UrlSearch', () => {
  const scrapper = new ConcreteScrapper();

  describe('searchNews', () => {
    beforeAll(async () => {
      await scrapper.searchNews('test');
    });

    it('page url should replace :q with the given text', () => {
      expect(scrapper['page'].url()).toBe(
        'https://www.google.com/search?q=test',
      );
    });
  });

  afterAll(async () => {
    await scrapper['closeBrowser']();
  });
});
