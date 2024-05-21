export interface NewsInterface {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string | null;
      name: string;
    } | null;
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null; 
    publishedAt: string;
    content: string | null;
  }[];
}

export interface ForexInterface{
  conversion_rates: {
    [key: string]: number;
};
}
