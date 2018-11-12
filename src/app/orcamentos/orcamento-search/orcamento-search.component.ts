import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento-search',
  templateUrl: './orcamento-search.component.html',
  styleUrls: ['./orcamento-search.component.scss']
})
export class OrcamentoSearchComponent implements OnInit {
  user = null;
  userIds = [];

  constructor() { }

  ngOnInit() {
  }
}
