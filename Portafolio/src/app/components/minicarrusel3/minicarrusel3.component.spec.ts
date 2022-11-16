import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel3Component } from './minicarrusel3.component';

describe('Minicarrusel3Component', () => {
  let component: Minicarrusel3Component;
  let fixture: ComponentFixture<Minicarrusel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
