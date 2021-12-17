import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-array',
  templateUrl: './formbuilder-array.component.html',
  styleUrls: ['./formbuilder-array.component.css'],
})
export class FormbuilderArrayComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public frmRegister = this.fb.group({
    Name: [''],
    Price: [''],
    frmDetails: this.fb.group({
      City: [''],
      InStock: [''],
    }),
    newControls: this.fb.array([this.fb.control('')]),
  });

  get newControls() {
    return this.frmRegister.get('newControls') as FormArray; //accesor to the property
  }
  public addPhoto() {
    this.newControls.push(this.fb.control(''));
  }

  public removePhoto(i: number) {
    this.newControls.removeAt(i);
  }

  ngOnInit(): void {}
}
