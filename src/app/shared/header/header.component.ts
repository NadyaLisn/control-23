import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menu', { static: true }) menu!: ElementRef;

  openMenu() {
    this.menu.nativeElement.classList.add('open');
  }

  closeMenu() {
    this.menu.nativeElement.classList.remove('open');
  }
  constructor() {
  }

}
