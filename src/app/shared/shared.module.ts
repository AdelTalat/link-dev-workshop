import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const sharedComponents = [
        PageNotFoundComponent,
        NewsCardComponent,
        BreadcrumbComponent
      ];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule,
    HttpClientModule
  ],
  exports: [...sharedComponents, CarouselModule, BsDatepickerModule]
})
export class SharedModule { }
