import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  public txtName = new FormControl('');
  public lstCities = new FormControl('');

  public updateClick() {
    this.txtName.setValue('Samsung TV');
    this.lstCities.setValue('Hyderabad');
  }
}
