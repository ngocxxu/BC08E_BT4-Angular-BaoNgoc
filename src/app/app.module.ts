import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTap4AngularModule } from './BaiTap4Angular/BaiTap4Angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTap4AngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
