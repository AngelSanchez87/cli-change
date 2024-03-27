import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  slider: any
  sobreslider: any
  defaultTransform: any
  sliderfinal: boolean = false
   goNext() {

debugger

    if (this.sliderfinal) {
      this.defaultTransform = 0
      this.sliderfinal = false
    }
    else {
      if ((this.slider.scrollWidth - Math.abs(this.defaultTransform - 398)) > this.sobreslider.offsetWidth) {
        this.defaultTransform = this.defaultTransform - 398
        this.sliderfinal = false
      } else {
        this.defaultTransform = this.defaultTransform - (this.slider.scrollWidth - this.sobreslider.offsetWidth - Math.abs(this.defaultTransform))
        this.sliderfinal = true
      }
    }



    // this.defaultTransform = this.defaultTransform - 398;
    // if (Math.abs(this.defaultTransform) >= (this.slider.scrollWidth / 1.7)) this.defaultTransform = 0;

    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {

    if (Math.abs(this.defaultTransform) === 0 || this.sliderfinal) {
      this.defaultTransform = 0
      this.sliderfinal = false
    }
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  constructor() {
  }

  ngOnInit(): void {
    this.slider = document.getElementById("slider")
    this.sobreslider = document.getElementById("sobreslider")
    this.defaultTransform=0
  }
}
