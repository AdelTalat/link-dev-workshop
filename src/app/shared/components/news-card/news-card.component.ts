import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit, OnChanges {
  @Input() article: Article;
  cardInfo: Article;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cardInfo = this.article;
  }

}
