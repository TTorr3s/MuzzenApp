import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: '../views/error404.html'
})

export class Error404Component {

  public mensaje: string;

  constructor() {
    this.mensaje = 'Página no encontrada';
  }
}
