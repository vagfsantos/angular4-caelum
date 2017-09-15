import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent;

  constructor() {
    this.foto.titulo = 'Título da foto';
    this.foto.url = 'http://www.exemplo.com';
    this.foto.descricao = 'Descrição da foto';
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.foto);
  }
}
