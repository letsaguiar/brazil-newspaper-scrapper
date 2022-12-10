/* eslint-disable @typescript-eslint/no-unused-vars */

import puppeteer, { Browser, Page } from 'puppeteer';
import { News } from './base-scrapper.entity';
import { Scrapper } from './base-scrapper.interface';

export abstract class BaseScrapper implements Scrapper {
  protected browser: Browser;
  protected page: Page;
  public url: string;

  protected async initBrowser(): Promise<void> {
    if (this.browser) {
      return;
    }

    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.goto(this.url);
  }

  protected async closeBrowser(): Promise<void> {
    await this.browser.close();

    this.browser = null;
    this.page = null;
  }

  public searchNews(text: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public extractNews(): Promise<News[]> {
    throw new Error('Method not implemented.');
  }
}
