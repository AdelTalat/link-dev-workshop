import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, LatestNewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
