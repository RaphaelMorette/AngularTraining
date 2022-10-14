import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UserContentComponent } from './pages/users/user-content/user-content.component';
import { UserCadastroComponent } from './pages/users/user-cadastro/user-cadastro.component';
import { UserEdicaoComponent } from './pages/users/user-edicao/user-edicao.component';
import { ClienteCadastroComponent } from './pages/clientes/cliente-cadastro/cliente-cadastro.component';
import { ClienteEdicaoComponent } from './pages/clientes/cliente-edicao/cliente-edicao.component';
import { ModCadastroComponent } from './pages/modalidades/mod-cadastro/mod-cadastro.component';
import { ModEdicaoComponent } from './pages/modalidades/mod-edicao/mod-edicao.component';
import { ModContentComponent } from './pages/modalidades/mod-content/mod-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserContentComponent,
    UserCadastroComponent,
    UserEdicaoComponent,
    ClienteCadastroComponent,
    ClienteEdicaoComponent,
    ModCadastroComponent,
    ModEdicaoComponent,
    ModContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
