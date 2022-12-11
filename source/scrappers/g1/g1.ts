import { UrlSearch } from '../../utilities/decorators/url-search.decorator';
import { BaseScrapper } from '../base-scrapper/base-scrapper';
import { News } from '../base-scrapper/base-scrapper.entity';
import { Scrapper } from '../base-scrapper/base-scrapper.interface';

@UrlSearch('https://g1.globo.com/busca/?q=:q')
export class G1Scrapper extends BaseScrapper implements Scrapper {
  public url = 'https://g1.globo.com/';

  public async extractNews(): Promise<News[]> {
    return await this.page.evaluate(() => {
      const rawNews = document.querySelectorAll('li.widget--info');
      return Object.values(rawNews).map((news) => ({
        headline: news
          .querySelector('div.widget--info__title')
          .textContent.trim(),
        image: news.querySelector('a.widget--info__media ').innerHTML,
        url: news.querySelector('a').href,
      }));
    });
  }
}
