import { Component } from '@angular/core';
import {
  NgbAccordionConfig,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }
}
