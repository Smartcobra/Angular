import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [AppComponent, TemplateformComponent, FormvalidationComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [FormvalidationComponent],
})
//FormvalidationComponent
//TemplateformComponent
export class AppModule {}
