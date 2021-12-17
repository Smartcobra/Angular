import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent {
  public onFormSubmit(obj: any) {
    console.log('hi');

    console.log(obj);
  }
}
