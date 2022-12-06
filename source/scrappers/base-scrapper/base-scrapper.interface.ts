import { News } from './base-scrapper.entity';

export interface Scrapper {
  searchNews(searchTerm: string): Promise<void>;
  extractNews(): Promise<News[]>;
}
