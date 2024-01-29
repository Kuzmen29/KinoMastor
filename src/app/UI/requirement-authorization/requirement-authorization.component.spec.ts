import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementAuthorizationComponent } from './requirement-authorization.component';

describe('RequirementAuthorizationComponent', () => {
  let component: RequirementAuthorizationComponent;
  let fixture: ComponentFixture<RequirementAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
