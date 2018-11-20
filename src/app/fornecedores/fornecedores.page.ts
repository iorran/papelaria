import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {
  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

  add() {
    this._router.navigateByUrl('fornecedores/add');
  }
}
