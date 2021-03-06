import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule', canActivate: [AuthGuard] },
  { path: 'fornecedores', loadChildren: './fornecedores/fornecedores.module#FornecedoresPageModule', canActivate: [AuthGuard] },
  { path: 'orcamentos', loadChildren: './orcamentos/orcamentos.module#OrcamentosPageModule', canActivate: [AuthGuard] },
  { path: 'escolas', loadChildren: './escolas/escolas.module#EscolasPageModule', canActivate: [AuthGuard] },
  {
    path: 'listas-materiais', loadChildren: './listas-materiais/listas-materiais.module#ListasMateriaisPageModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
