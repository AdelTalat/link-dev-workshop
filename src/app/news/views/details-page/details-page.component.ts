import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { NewsService } from '../../services/news.service';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  category: Category;
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.getArticle();
  }

  getArticle() {
    this.route.params.pipe(switchMap(({ id }) => {
      return this.newsService.getNewsById(id);
    })).subscribe((news) => {
      console.log(news);
      this.article = news;
    });
  }


  getCategory() {
    this.route.queryParamMap.pipe(switchMap((queryParams: any) => {
      return this.categoryService.getCategory(queryParams.params.categoryId);
    })).subscribe((category) => {
      console.log(category);
      this.category = category;
    });
  }

}
