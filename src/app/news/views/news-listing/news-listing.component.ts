import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
    articles: Article[];
    filteredArticles: Article[] = [];

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.getAllNews();
    }

    getAllNews() {
        this.newsService.getAllNews().subscribe(news => this.articles = this.filteredArticles = news);
    }

    filterWithCategory(categoryId: number) {
      this.filteredArticles = categoryId ? this.articles.filter(article => article.sourceID === categoryId) : this.articles;
    }

    filter(query: string) {
      this.filteredArticles =
        query ? this.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase())) : this.articles;
    }

    sort(flag: boolean) {
      console.log(flag);
      this.articles.sort((a, b) => {
        if (flag) {
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        } else {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
      });
    }

}
