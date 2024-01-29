import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoListComponent } from './kino-list.component';

describe('KinoListComponent', () => {
  let component: KinoListComponent;
  let fixture: ComponentFixture<KinoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
