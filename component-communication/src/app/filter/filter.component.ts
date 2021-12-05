import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  //from the parent component [productlist.component] we excepting this count value
  @Input()
  public allCount = 0;

  @Input()
  public electronicsCount = 0;

  @Input()
  public footwareCount = 0;

  @Input()
  public fashionCount = 0;

  // to Emit value we need to create a event emitter , we need allocate a memory so new keyword
  @Output() // it will able to emit value outside the component
  public EmitCategoryName: EventEmitter<String> = new EventEmitter<String>();
  // now two things when it should emit value and what value should be emiited
  // 1) it should emit a value when category changed
  //so it should emit a value when category selected from the dropdown //selected category name must be emmited
  public selectedCatageryName = 'All';
  // now we need to bind this variable to the dropdown by using 2way dropdown [(ngModel)]
  // now EmitCategoryName is an event
  public onCategoryChanged() {
    this.EmitCategoryName.emit(this.selectedCatageryName);
  }
}
