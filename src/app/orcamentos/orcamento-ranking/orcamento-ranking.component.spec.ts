import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoRankingComponent } from './orcamento-ranking.component';

describe('OrcamentoRankingComponent', () => {
  let component: OrcamentoRankingComponent;
  let fixture: ComponentFixture<OrcamentoRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
