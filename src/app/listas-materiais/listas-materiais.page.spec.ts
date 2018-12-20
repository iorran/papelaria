import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasMateriaisPage } from './listas-materiais.page';

describe('ListasMateriaisPage', () => {
  let component: ListasMateriaisPage;
  let fixture: ComponentFixture<ListasMateriaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasMateriaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasMateriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
