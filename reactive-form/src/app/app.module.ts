import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NestedformsComponent } from './nestedforms/nestedforms.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormbuilderArrayComponent } from './formbuilder-array/formbuilder-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    NestedformsComponent,
    FormbuilderComponent,
    FormbuilderArrayComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [FormbuilderArrayComponent],
  // ReactiveformComponent
  //NestedformsComponent
  //FormbuilderComponent
})
export class AppModule {}
