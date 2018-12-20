import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaListComponent } from './escola-list.component';

describe('EscolaListComponent', () => {
  let component: EscolaListComponent;
  let fixture: ComponentFixture<EscolaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
