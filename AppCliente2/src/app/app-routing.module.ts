import { ProdutosCadastroComponent } from './pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { FornecedorEditarComponent } from './pages/fornecedores/fornecedor-editar/fornecedor-editar.component';
import { FornecedorCadastroComponent } from './pages/fornecedores/fornecedor-cadastro/fornecedor-cadastro.component';
import { ClienteEditarComponent } from './pages/clientes/cliente-editar/cliente-editar.component';
import { ClienteCadastroComponent } from './pages/clientes/cliente-cadastro/cliente-cadastro.component';
import { ClienteContentComponent } from './pages/clientes/cliente-content/cliente-content.component';
import { UsersEditarComponent } from './pages/users/users-editar/users-editar.component';
import { UsersCadastroComponent } from './pages/users/users-cadastro/users-cadastro.component';
import { UsersContentComponent } from './pages/users/users-content/users-content.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorContentComponent } from './pages/fornecedores/fornecedor-content/fornecedor-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersContentComponent },
  { path: 'users-cadastro', component: UsersCadastroComponent },
  { path: 'users-editar/:id', component: UsersEditarComponent },
  { path: 'clientes', component: ClienteContentComponent },
  { path: 'clientes-cadastro', component: ClienteCadastroComponent },
  { path: 'clientes-editar/:id', component: ClienteEditarComponent },
  { path: 'fornecedor', component: FornecedorContentComponent },
  { path: 'fornecedor-cadastro', component: FornecedorCadastroComponent },
  { path: 'fornecedor-editar/:id', component: FornecedorEditarComponent },
  { path: 'produtos-cadastro', component: ProdutosCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
