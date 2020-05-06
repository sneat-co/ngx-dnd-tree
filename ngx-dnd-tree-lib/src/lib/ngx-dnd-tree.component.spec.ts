import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDndTreeComponent } from './ngx-dnd-tree.component';

describe('NgxDndTreeComponent', () => {
  let component: NgxDndTreeComponent;
  let fixture: ComponentFixture<NgxDndTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDndTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
