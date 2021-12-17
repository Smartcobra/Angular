import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public frmRegister = this.fb.group({
    Name: [''],
    Price: [''],
    frmDetails: this.fb.group({
      City: [''],
      InStock: [''],
    }),
  });

  ngOnInit(): void {
    // console.log(this.frmRegister.value.Name);
  }
}
