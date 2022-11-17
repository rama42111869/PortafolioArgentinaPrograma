import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel7Component } from './minicarrusel7.component';

describe('Minicarrusel7Component', () => {
  let component: Minicarrusel7Component;
  let fixture: ComponentFixture<Minicarrusel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
