import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES);


@Component({
  selector: 'app-articulo-card-catalogo',
  templateUrl: './articulo-card-catalogo.component.html',
  styleUrls: ['./articulo-card-catalogo.component.scss'],
})
export class ArticuloCardCatalogoComponent implements OnInit {
  @Input() tipoCatalogo?: string;
  articulos?: Articulo[];

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  private obtenerArticulos(): void {
    this.articuloService.obtenerArticulos().subscribe({
      next: (articulosRequest) => {
        this.articulos = articulosRequest;
      },
    });
  }
}
