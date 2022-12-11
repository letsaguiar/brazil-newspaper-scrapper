/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BaseScrapper } from 'source/scrappers/base-scrapper/base-scrapper';

type Constructor<T = BaseScrapper> = new (...args: any[]) => T;

export function UrlSearch(searchUrl: string) {
  return function _UrlSearch<T extends Constructor>(target: T) {
    return class extends target {
      protected searchUrl: string = searchUrl;

      private buildSearchUrl(text: string): string {
        return this.searchUrl.replace(/:q/g, text);
      }

      public async searchNews(text: string): Promise<void> {
        await this.initBrowser();
        const searchUrl = this.buildSearchUrl(text);

        await this.page.goto(searchUrl, { waitUntil: 'networkidle2' });
      }
    };
  };
}
