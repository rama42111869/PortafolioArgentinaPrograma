import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel6Component } from './minicarrusel6.component';

describe('Minicarrusel6Component', () => {
  let component: Minicarrusel6Component;
  let fixture: ComponentFixture<Minicarrusel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
