import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss'],
})
export class ArticuloCardComponent implements OnInit {
  @Input() articulo?: Articulo;

  constructor(private rotuer: Router) {}

  ngOnInit(): void {}

  public navegarAFicha(tipoCatalogo: number): void {
    this.rotuer.navigate(['catalogo', tipoCatalogo]);
  }
}
