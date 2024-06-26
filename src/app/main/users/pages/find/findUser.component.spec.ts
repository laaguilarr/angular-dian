import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserComponent } from './findUser.component';

describe('FindUser', () => {
  let component: FindUserComponent;
  let fixture: ComponentFixture<FindUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
