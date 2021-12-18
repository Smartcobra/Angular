import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validatation',
  templateUrl: './reactive-form-validatation.component.html',
  styleUrls: ['./reactive-form-validatation.component.css'],
})
export class ReactiveFormValidatationComponent implements OnInit {
  public frmRegister!: FormGroup; // ! for strict type checking in ts version
  public submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmRegister = this.fb.group({
      UserName: ['', [Validators.required, Validators.minLength(4)]],
      Mobile: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
    });
  }
  get frm() {
    return this.frmRegister.controls;
  }

  public onSubmit() {
    this.submitted = true;
    if (this.frmRegister.invalid) {
      return;
    }
    alert('Register Succesfully');
  }
}
