import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-minicarrusel2',
  templateUrl: './minicarrusel2.component.html',
  styleUrls: ['./minicarrusel2.component.css']
})
export class Minicarrusel2Component implements OnInit {

  constructor() { }

  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  ngOnInit() {}
  // Move to specific slide
  navigateToSlide(item: any) {
    this.ngCarousel.select(item);
    console.log(item);
  }
  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }
  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }
  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }
  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }


}
