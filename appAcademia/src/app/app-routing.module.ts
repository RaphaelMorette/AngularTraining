import { ModEdicaoComponent } from './pages/modalidades/mod-edicao/mod-edicao.component';
import { ModCadastroComponent } from './pages/modalidades/mod-cadastro/mod-cadastro.component';
import { ModContentComponent } from './pages/modalidades/mod-content/mod-content.component';
import { ClienteEdicaoComponent } from './pages/clientes/cliente-edicao/cliente-edicao.component';
import { ClienteCadastroComponent } from './pages/clientes/cliente-cadastro/cliente-cadastro.component';
import { UserEdicaoComponent } from './pages/users/user-edicao/user-edicao.component';
import { UserCadastroComponent } from './pages/users/user-cadastro/user-cadastro.component';
import { UserContentComponent } from './pages/users/user-content/user-content.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserContentComponent },
  { path: 'user-cadastro', component: UserCadastroComponent },
  { path: 'user-edicao/:id', component: UserEdicaoComponent },
  { path: 'cliente-cadastro', component: ClienteCadastroComponent },
  { path: 'cliente-edicao/:id', component: ClienteEdicaoComponent },
  { path: 'modalidades', component: ModContentComponent },
  { path: 'modalidades-cadastro', component: ModCadastroComponent },
  { path: 'modalidades-edicao/:id', component: ModEdicaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
