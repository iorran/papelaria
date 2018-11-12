import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoProdutosComponent } from './orcamento-produtos.component';

describe('OrcamentoProdutosComponent', () => {
  let component: OrcamentoProdutosComponent;
  let fixture: ComponentFixture<OrcamentoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
