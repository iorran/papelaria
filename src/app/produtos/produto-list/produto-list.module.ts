import { ProdutoService } from './../../shared/services/produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutoListPage } from './produto-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutoListPage],
  providers: [ProdutoService]
})
export class ProdutoListPageModule {}
