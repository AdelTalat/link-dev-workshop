import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './views/details-page/details-page.component';
import { NewsListingComponent } from './views/news-listing/news-listing.component';


const routes: Routes = [
                { path: '',
                  component: NewsListingComponent
                },
                { path: '/:id',
                  component: DetailsPageComponent
                }
              ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
