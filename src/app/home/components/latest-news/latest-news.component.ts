import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news/services/news.service';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
    articles: Article[];
    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.getHomeNews();
    }

    getHomeNews() {
        this.newsService.getAllNews().subscribe(news => this.articles = news);
    }

}
