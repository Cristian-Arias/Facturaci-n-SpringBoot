import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['Katherine Hernandez', 'Carolina Zuluaga ', 'Daniela Neira', 'Cristian  Arias'];

  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
