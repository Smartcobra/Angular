import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductslistComponent, FilterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ProductslistComponent],
})
export class AppModule {}
