import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SendvalueComponent } from './sendvalue/sendvalue.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SendvalueComponent, DisplayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [SendvalueComponent],
})
export class AppModule {}
