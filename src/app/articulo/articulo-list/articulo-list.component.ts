import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //Para navegar entre componentes
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss'],
})
export class ArticuloListComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(
    //Inyectamos router y route
    private rotuer: Router,
    private route: ActivatedRoute,
    private articuloService: ArticuloService // Ahora podemos inyectar como servicio
  ) {}

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
