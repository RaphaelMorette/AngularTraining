import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialButtonComponent } from './pages/material-button/material-button.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MaterialCardComponent } from './pages/material-card/material-card.component';
import {MatCardModule} from '@angular/material/card';
import { MaterialTableComponent } from './pages/material-table/material-table.component';
import {MatTableModule} from '@angular/material/table';
import { MaterialListComponent } from './pages/material-list/material-list.component';
import {MatListModule} from '@angular/material/list';
import { MaterialFormFieldComponent } from './pages/material-form-field/material-form-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MaterialButtonComponent,
    MaterialCardComponent,
    MaterialTableComponent,
    MaterialListComponent,
    MaterialFormFieldComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
