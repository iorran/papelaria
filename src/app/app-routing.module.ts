import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'produto-list', loadChildren: './produtos/produto-list/produto-list.module#ProdutoListPageModule' },
  { path: 'produto-detail', loadChildren: './produtos/produto-detail/produto-detail.module#ProdutoDetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
