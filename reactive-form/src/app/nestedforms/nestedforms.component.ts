import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nestedforms',
  templateUrl: './nestedforms.component.html',
  styleUrls: ['./nestedforms.component.css'],
})
export class NestedformsComponent {
  public frmRegister = new FormGroup({
    Name: new FormControl(''),
    Price: new FormControl(''),
    frmDetails: new FormGroup({
      City: new FormControl(''),
      InStock: new FormControl(''),
    }),
  });

  //update pariatial not the the whole object, if we go for setValue() it will ask for whole object
  public updatePartial() {
    this.frmRegister.patchValue({
      Name: 'Samsung TV',
      frmDetails: {
        City: 'Delhi',
        InStock: true,
      },
    });
  }
}
