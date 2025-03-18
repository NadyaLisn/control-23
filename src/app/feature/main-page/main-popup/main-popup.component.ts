import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
})
export class MainPopupComponent {
  @Output() openCatalog = new EventEmitter<void>();
  @ViewChild('popup', { static: true })
  popup!: ElementRef;

  onClosePopup () {
    this.popup.nativeElement.classList.add('close');
  }
  onOpenCatalog() {
    this.openCatalog.emit();
  }
}
