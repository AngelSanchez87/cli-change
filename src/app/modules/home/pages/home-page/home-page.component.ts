import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  currentItem = 0;
  items = document.querySelectorAll('.carousel-item');
  totalItems = this.items.length;


  constructor() {
    setInterval(() => this.nextItem(), 5000);


  }

  ngOnInit(): void {
    setInterval(() => this.nextItem(), 5000);
    }
    showItem(index: number): void {
      if (index < 0) {
        this.currentItem = this.totalItems - 1;
      } else if (index >= this.totalItems) {
        this.currentItem = 0;
      }

      this.items.forEach((item: any, i: number) => {
        if (i === this.currentItem) {
          item.style.opacity = 1;
        } else {
          item.style.opacity = 0;
        }
      });
    }

    nextItem(): void {
      this.currentItem++;
      this.showItem(this.currentItem);
    }

    prevItem(): void {
      this.currentItem--;
      this.showItem(this.currentItem);
    }
}
