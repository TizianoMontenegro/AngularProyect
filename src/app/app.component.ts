import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('refIconButton') refIconButton!: ElementRef;
  @ViewChild('refLinks') refLinks!: ElementRef;
  menuStatus: number = 0;

  constructor(private render2: Renderer2) {}

  ngOnInit():void {
  }

  showHideMenu() {
    const iconButton = this.refIconButton.nativeElement;
    const links = this.refLinks.nativeElement;
    if(this.menuStatus == 0) {
      this.render2.addClass(links,"toRight")
      this.render2.removeClass(iconButton, "bx-menu")
      this.render2.addClass(iconButton, "bx-x")
      this.menuStatus = 1
    }else{
      this.render2.removeClass(links,"toRight")
      this.render2.removeClass(iconButton, "bx-x")
      this.render2.addClass(iconButton, "bx-menu")
      this.menuStatus = 0
    }
  }
  clickOnLink() {
    const iconButton = this.refIconButton.nativeElement;
    const links = this.refLinks.nativeElement;
    this.menuStatus = 0;
    this.render2.removeClass(links,"toRight")
    this.render2.removeClass(iconButton, "bx-x")
    this.render2.addClass(iconButton, "bx-menu")
  }
}
