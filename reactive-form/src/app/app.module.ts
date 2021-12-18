import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NestedformsComponent } from './nestedforms/nestedforms.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormbuilderArrayComponent } from './formbuilder-array/formbuilder-array.component';
import { ReactiveFormValidatationComponent } from './reactive-form-validatation/reactive-form-validatation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    NestedformsComponent,
    FormbuilderComponent,
    FormbuilderArrayComponent,
    ReactiveFormValidatationComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ReactiveFormValidatationComponent],
  // ReactiveformComponent
  //NestedformsComponent
  //FormbuilderComponent
  //FormbuilderArrayComponent
})
export class AppModule {}
