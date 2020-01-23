import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { ReactiveCustomerFormComponent } from './reactive-customer-form/reactive-customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ReactiveCustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
