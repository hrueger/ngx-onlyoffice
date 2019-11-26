import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOnlyofficeComponent } from './ngx-onlyoffice.component';

describe('NgxOnlyofficeComponent', () => {
  let component: NgxOnlyofficeComponent;
  let fixture: ComponentFixture<NgxOnlyofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOnlyofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOnlyofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
