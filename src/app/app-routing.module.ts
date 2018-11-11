import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'fornecedores', loadChildren: './fornecedores/fornecedores.module#FornecedoresPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
