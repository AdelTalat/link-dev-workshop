import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


const sharedComponents = [
        PageNotFoundComponent,
        NewsCardComponent,
        BreadcrumbComponent
      ];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [...sharedComponents, CarouselModule]
})
export class SharedModule { }
