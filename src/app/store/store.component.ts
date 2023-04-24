import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @ViewChild("cart") refCart!: ElementRef;
  cartStatus: number = 0;
  meals!: any;
  constructor(
    private render2: Renderer2,
    private http: HttpService){}

    ngOnInit() {
      this.http.get("http://www.themealdb.com/api/json/v1/1/search.php?s")
      .subscribe(data => {
        this.meals = data
        console.log(this.meals);
      })
    }
  showHideCart() {
    const cart = this.refCart.nativeElement;
    if(this.cartStatus == 0) {
      console.log(this.cartStatus);
      this.render2.setStyle(cart, "transform", "translateX(-100%)")
      this.cartStatus = 1;
    }else {
      console.log(this.cartStatus);
      this.render2.setStyle(cart, "transform", "translateX(50%)")
      this.cartStatus = 0
    }
  }
}
