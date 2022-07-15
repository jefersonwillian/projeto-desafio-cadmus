import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iprodutos } from '../home/home.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() listaTabela: Array<any> = [];
  
  @Output() itemValue = new EventEmitter<any>();
  
  @Output() indexProduto  = new EventEmitter<number>();
  
  
  constructor() { }
  
  ngOnInit(): void {
    console.log("componente tabela", this.listaTabela)
  }

  public editar(item: Iprodutos, i: number) {
    this.indexProduto.emit(i);
    this.itemValue.emit(item);
  }

  excluir(i: number) {
    this.listaTabela.splice(i, 1);
  }
}

