import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoSearchComponent } from './orcamento-search.component';

describe('OrcamentoSearchComponent', () => {
  let component: OrcamentoSearchComponent;
  let fixture: ComponentFixture<OrcamentoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
