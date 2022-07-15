import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';

export interface Iprodutos {
  nome: string;
  descricao: string;
  valor: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("appProdutos", { static: false }) public appProdutos!: ProdutosComponent;
  
  public listaProdutos: Array<Iprodutos> = [
    { nome: 'Produto 1', descricao: 'Teste Produto 1', valor: '300' },
    { nome: 'Produto 2', descricao: 'Teste Produto 2', valor: '300' },
    { nome: 'Produto 3', descricao: 'Teste Produto 3', valor: '300' },
    {nome: 'Produto 4', descricao: 'Teste Produto 4', valor: '300'},
  ];
  
  public indexItemForm!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  public onClickFormValue(event: Iprodutos) {
     console.log("HomeComponent ~ onClickFormValue ~ event", event)
     if (this.indexItemForm >= 0)  {
        // alteração de produto
        this.listaProdutos[this.indexItemForm].nome = event.nome;
        this.listaProdutos[this.indexItemForm].descricao = event.descricao;;
        this.listaProdutos[this.indexItemForm].valor = event.valor;
      } else {
        this.listaProdutos.push(event);
      }
  }

  
  
  public onItemValue(event: Iprodutos) {
    console.log("onItemValue ~ event", event)
    this.appProdutos.editarForm(event)
  }

    
  public onIndexProduto(event: number) {
    console.log("onIndexProduto ~ event", event)
    this.indexItemForm = event;
  }
}
