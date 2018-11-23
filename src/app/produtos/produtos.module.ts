import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutosPage } from './produtos.page';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: ProdutosPage },
  { path: 'add', component: ProdutoDetailComponent },
  { path: 'edit/:id', component: ProdutoDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [ProdutosPage, ProdutoDetailComponent, ProdutoListComponent]
})
export class ProdutosPageModule { }
