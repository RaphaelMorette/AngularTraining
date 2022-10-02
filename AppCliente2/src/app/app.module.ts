import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { UsersContentComponent } from './pages/users/users-content/users-content.component';
import { UsersCadastroComponent } from './pages/users/users-cadastro/users-cadastro.component';
import { UsersEditarComponent } from './pages/users/users-editar/users-editar.component';
import { ClienteContentComponent } from './pages/clientes/cliente-content/cliente-content.component';
import { ClienteCadastroComponent } from './pages/clientes/cliente-cadastro/cliente-cadastro.component';
import { ClienteEditarComponent } from './pages/clientes/cliente-editar/cliente-editar.component';
import { FornecedorContentComponent } from './pages/fornecedores/fornecedor-content/fornecedor-content.component';
import { FornecedorCadastroComponent } from './pages/fornecedores/fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorEditarComponent } from './pages/fornecedores/fornecedor-editar/fornecedor-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsersContentComponent,
    UsersCadastroComponent,
    UsersEditarComponent,
    ClienteContentComponent,
    ClienteCadastroComponent,
    ClienteEditarComponent,
    FornecedorContentComponent,
    FornecedorCadastroComponent,
    FornecedorEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
