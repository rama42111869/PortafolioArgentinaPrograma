import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel4Component } from './minicarrusel4.component';

describe('Minicarrusel4Component', () => {
  let component: Minicarrusel4Component;
  let fixture: ComponentFixture<Minicarrusel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
