import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  constructor(
    private _router: Router) { }

  ngOnInit() {
  }

  add() {
    this._router.navigateByUrl('produtos/add');
  }
}
