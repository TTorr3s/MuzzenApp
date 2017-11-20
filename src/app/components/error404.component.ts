import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: '../views/error404.html',
  styleUrls: ['../styles/error404.style.css']
})

export class Error404Component {

  public mensaje: string;
  public imagen: string;

  constructor() {
    this.mensaje = 'Página no encontrada';
    this.imagen = '../../assets/img/error/park.svg';
  }
}
