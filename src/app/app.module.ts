import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { ErrorHelperComponent } from './shared/components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    ErrorHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
