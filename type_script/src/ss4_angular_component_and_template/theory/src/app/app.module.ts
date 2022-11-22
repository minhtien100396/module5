import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
