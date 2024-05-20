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
    urlToImage: string | null; // Change here to make it nullable
    publishedAt: string;
    content: string | null;
  }[];
}
