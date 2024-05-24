
export interface NewsInterface {
  status: string;
  totalResults: number;
  results: {
    article_id: string;
    title: string;
    link: string;
    keywords: string[];
    creator: string[];
    video_url: string | null;
    description: string;
    content: string;
    image_url: string;
    source_id: string;
    source_priority: number;
    source_url: string;
    source_icon: string;
    language: string;
    country: string[];
    category?: string[];
    
  }[];
}



export interface ForexInterface{
  conversion_rates: {
    [key: string]: number;
};
}
