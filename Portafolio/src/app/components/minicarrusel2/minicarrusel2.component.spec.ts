import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel2Component } from './minicarrusel2.component';

describe('Minicarrusel2Component', () => {
  let component: Minicarrusel2Component;
  let fixture: ComponentFixture<Minicarrusel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
