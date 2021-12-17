import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnChanges {
  //accepts value
  @Input() public username = '';

  public previousvalue = '';
  public currentvalue = '';
  public msg = '';

  ngOnChanges(changes: SimpleChanges) {
    for (var property in changes) {
      let change = changes[property];
      this.currentvalue = change.currentValue;
      this.previousvalue = change.previousValue;
    }
    if (this.currentvalue == this.previousvalue) {
      this.msg = 'No Change Detected';
    } else {
      this.msg = 'change detected';
    }
  }
}
