import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutosPage } from './produtos.page';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';

const routes: Routes = [
  { path: '', component: ProdutosPage },
  { path: 'add', component: ProdutoDetailComponent },
  { path: 'edit/:id', component: ProdutoDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutosPage, ProdutoDetailComponent]
})
export class ProdutosPageModule {}
