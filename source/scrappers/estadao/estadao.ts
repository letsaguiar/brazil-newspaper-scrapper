import { UrlSearch } from '../../utilities/decorators/url-search.decorator';
import { BaseScrapper } from '../base-scrapper/base-scrapper';
import { News } from '../base-scrapper/base-scrapper.entity';
import { Scrapper } from '../base-scrapper/base-scrapper.interface';

@UrlSearch('https://busca.estadao.com.br/?q=:q')
export class EstadaoScrapper extends BaseScrapper implements Scrapper {
  public url = 'https://www.estadao.com.br/';

  public async extractNews(): Promise<News[]> {
    return await this.page.evaluate(() => {
      const rawNews = document.querySelectorAll('section.item-lista-busca');
      return Object.values(rawNews).map((news) => ({
        headline: news.querySelector('h3').textContent,
        image: news.querySelector('img').getAttribute('data-src-desktop'),
        url: news.querySelector('a.link-title').getAttribute('href'),
      }));
    });
  }
}
