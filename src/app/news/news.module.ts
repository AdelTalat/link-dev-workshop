import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SearchComponent } from './components/search/search.component';
import { RelatedTopicCardComponent } from './components/related-topic-card/related-topic-card.component';
import { RelatedTopicsComponent } from './components/related-topics/related-topics.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NewsListingComponent } from './views/news-listing/news-listing.component';
import { DetailsPageComponent } from './views/details-page/details-page.component';


@NgModule({
  declarations: [
    SearchComponent,
    RelatedTopicCardComponent,
    RelatedTopicsComponent,
    PaginationComponent,
    NewsListingComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
