import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeDetailsComponent } from './assignee-details.component';

describe('AssigneeDetailsComponent', () => {
  let component: AssigneeDetailsComponent;
  let fixture: ComponentFixture<AssigneeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigneeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
