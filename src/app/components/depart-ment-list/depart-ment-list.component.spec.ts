import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartMentListComponent } from './depart-ment-list.component';

describe('DepartMentListComponent', () => {
  let component: DepartMentListComponent;
  let fixture: ComponentFixture<DepartMentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartMentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartMentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
