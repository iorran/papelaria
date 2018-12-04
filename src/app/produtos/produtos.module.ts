import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosPage } from './produtos.page';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoService } from './shared/services/produto.service';

const routes: Routes = [
  { path: '', component: ProdutosPage },
  { path: 'add', component: ProdutoDetailComponent },
  { path: 'edit/:id', component: ProdutoDetailComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProdutosPage, ProdutoDetailComponent, ProdutoListComponent],
  providers: [ProdutoService]
})
export class ProdutosPageModule { }
