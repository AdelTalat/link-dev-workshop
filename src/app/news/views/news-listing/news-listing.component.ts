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
    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.getAllNews();
    }

    getAllNews() {
        this.newsService.getAllNews().subscribe(news => this.articles = news);
    }

}
