import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel5Component } from './minicarrusel5.component';

describe('Minicarrusel5Component', () => {
  let component: Minicarrusel5Component;
  let fixture: ComponentFixture<Minicarrusel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
