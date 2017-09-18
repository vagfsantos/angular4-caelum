import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent;
  meuForm: FormGroup;
  fb: FormBuilder;
  http: Http;

  constructor(http: Http, fb: FormBuilder) {
    this.http = http;
    this.fb = fb;

    this.meuForm = this.fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: ['']
    });
  }

  cadastrar(event) {
    event.preventDefault();

    const headers = new Headers;
    headers.append('Content-type', 'application/json')

    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {headers})
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      )
  }
}
