import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FornecedoresPage } from './fornecedores.page';
import { FornecedorDetailComponent } from './fornecedor-detail/fornecedor-detail.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: FornecedoresPage },
  { path: 'add', component: FornecedorDetailComponent },
  { path: 'edit/:id', component: FornecedorDetailComponent },
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
  declarations: [FornecedoresPage, FornecedorDetailComponent, FornecedorListComponent]
})
export class FornecedoresPageModule { }
