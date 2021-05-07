import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: '**', component: PageNotFoundComponent },
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
