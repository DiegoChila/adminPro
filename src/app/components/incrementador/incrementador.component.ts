import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 25;
  @Input() btnClass: string = 'btn-primary';
  // @Input() progreso: number = 25;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  // @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    if (this.progreso > 100) this.progreso = 100;
    if (this.progreso < 0) this.progreso = 0;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    if (valor > 100) this.progreso = 100;
    else if (valor < 0) this.progreso = 0;
    else this.progreso = valor;
    this.valorSalida.emit(this.progreso);
  }

}
