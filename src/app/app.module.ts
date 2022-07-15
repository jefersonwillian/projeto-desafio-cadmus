import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ProdutosComponent, TabelaComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
