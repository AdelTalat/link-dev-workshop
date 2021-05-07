import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const sharedComponents = [PageNotFoundComponent];

@NgModule({
  declarations: [...sharedComponents, NewsCardComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents]
})
export class SharedModule { }
