import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './pages/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './pages/segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './pages/terceiro-componente/terceiro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
