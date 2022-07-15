import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iprodutos } from '../home/home.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  
  @Output() emitFormValue = new EventEmitter<Iprodutos>();

  public form!: FormGroup;

  public nomeBotao = 'Enviar';

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(1),
        ],
      ],
    });
  }

  public editarForm(item: any){
    this.form.patchValue({
        nome: item.nome,
        descricao: item.descricao,
        valor: item.valor,
      });
  }

  public onClick() {
    if (this.form.valid) {
      this.emitFormValue.emit(this.form.value);
      this.form.reset();
    }
  }
}
