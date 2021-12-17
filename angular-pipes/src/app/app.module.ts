import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SentenCasePipe } from './sentensecase.pipe';

@NgModule({
  declarations: [AppComponent, CustompipeComponent, SentenCasePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [CustompipeComponent],
})
export class AppModule {}
