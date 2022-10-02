import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CadastrarClienteComponent } from './pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './pages/cliente/editar-cliente/editar-cliente.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersContentComponent } from './pages/users/users-content/users-content.component';
import { UsersDetailComponent } from './pages/users/users-detail/users-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ClienteComponent,
    CadastrarClienteComponent,
    EditarClienteComponent,
    UsersComponent,
    UsersContentComponent,
    UsersDetailComponent
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
