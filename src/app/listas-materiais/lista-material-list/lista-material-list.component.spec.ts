import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaterialListComponent } from './lista-material-list.component';

describe('ListaMaterialListComponent', () => {
  let component: ListaMaterialListComponent;
  let fixture: ComponentFixture<ListaMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
