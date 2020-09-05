import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentdetailsComponent } from './commentdetails.component';

describe('CommentdetailsComponent', () => {
  let component: CommentdetailsComponent;
  let fixture: ComponentFixture<CommentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
