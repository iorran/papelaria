import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedoresPage } from './fornecedores.page';
import { FornecedorDetailComponent } from './fornecedor-detail/fornecedor-detail.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorService } from './shared/services/fornecedor.service';

const routes: Routes = [
  { path: '', component: FornecedoresPage },
  { path: 'add', component: FornecedorDetailComponent },
  { path: 'edit/:id', component: FornecedorDetailComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FornecedoresPage, FornecedorDetailComponent, FornecedorListComponent],
  providers: [FornecedorService]
})
export class FornecedoresPageModule { }
