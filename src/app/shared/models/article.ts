export interface Article {
    sourceID: number;
    id: number;
    showOnHomepage: boolean;
    liked: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
