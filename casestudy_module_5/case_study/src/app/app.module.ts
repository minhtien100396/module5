import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./home/header/header.component";
import {NavbarComponent} from './home/navbar/navbar.component';
import {ContentComponent} from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListComponent } from './facility/list/list.component';
import { EditComponent } from './facility/edit/edit.component';
import { AddComponent } from './facility/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    ListComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
