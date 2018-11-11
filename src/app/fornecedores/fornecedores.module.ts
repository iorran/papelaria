import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FornecedoresPage } from './fornecedores.page';
import { FornecedorDetailComponent } from './fornecedor-detail/fornecedor-detail.component';

const routes: Routes = [
  { path: '', component: FornecedoresPage },
  { path: 'add', component: FornecedorDetailComponent },
  { path: 'edit/:id', component: FornecedorDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FornecedoresPage, FornecedorDetailComponent]
})
export class FornecedoresPageModule { }
