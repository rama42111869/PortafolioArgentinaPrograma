import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minicarrusel8Component } from './minicarrusel8.component';

describe('Minicarrusel8Component', () => {
  let component: Minicarrusel8Component;
  let fixture: ComponentFixture<Minicarrusel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minicarrusel8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minicarrusel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
