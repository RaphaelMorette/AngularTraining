import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleJsonComponent } from './pages/simple-json/simple-json.component';
import { TwoWayComponent } from './pages/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { JsonDetailComponent } from './pages/json-detail/json-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleJsonComponent,
    TwoWayComponent,
    JsonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
