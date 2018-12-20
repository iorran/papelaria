import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaDetailComponent } from './escola-detail.component';

describe('EscolaDetailComponent', () => {
  let component: EscolaDetailComponent;
  let fixture: ComponentFixture<EscolaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
