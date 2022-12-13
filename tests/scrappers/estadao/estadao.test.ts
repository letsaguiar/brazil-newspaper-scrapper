import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { validateOrReject } from 'class-validator';
import { News } from 'source/scrappers/base-scrapper/base-scrapper.entity';
import { EstadaoScrapper } from 'source/scrappers/estadao/estadao';

describe('Estadao', () => {
  const scrapper = new EstadaoScrapper();

  it('should be defined', () => {
    expect(scrapper).toBeDefined();
  });

  describe('searchNews', () => {
    beforeAll(async () => {
      await scrapper.searchNews('teste');
    });

    it('should be on search page of Estadao', () => {
      expect(scrapper['page'].url()).toBe(
        'https://busca.estadao.com.br/?q=teste',
      );
    });
  });

  describe('extractNews', () => {
    let news: News[];

    beforeAll(async () => {
      news = await scrapper.extractNews();
    });

    it('should return at least one news', () => {
      expect(news.length).toBeGreaterThan(0);
    });

    it('each news should be valid', async () => {
      for (const item of news) {
        Object.setPrototypeOf(item, News.prototype);
        await validateOrReject(item);
      }
    });
  });

  afterAll(async () => {
    await scrapper['closeBrowser']();
  });
});
