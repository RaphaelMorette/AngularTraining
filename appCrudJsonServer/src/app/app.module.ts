import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastroProdutoComponent } from './pages/produtos/cadastro-produto/cadastro-produto.component';
import { AlteraProdutoComponent } from './pages/produtos/altera-produto/altera-produto.component';
import { CadastroCategoriasComponent } from './pages/categorias/cadastro-categorias/cadastro-categorias.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    CadastroProdutoComponent,
    AlteraProdutoComponent,
    CadastroCategoriasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
