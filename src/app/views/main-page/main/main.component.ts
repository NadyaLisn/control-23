import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile, timer} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []
})
export class MainComponent implements OnInit, OnDestroy {
  showPopup = false;
  private isUserOnPage = true;
  ngOnInit(): void {
    timer(10000).pipe(
      takeWhile(() => this.isUserOnPage)
    ).subscribe(() => {
      this.showPopup = true;
    });
  }


  goToCatalog() {
    window.location.href = '/products';
  }

  ngOnDestroy() {
    this.isUserOnPage = false;
  }
}
