import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoProdutoComponent } from './orcamento-produto.component';

describe('OrcamentoProdutoComponent', () => {
  let component: OrcamentoProdutoComponent;
  let fixture: ComponentFixture<OrcamentoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
