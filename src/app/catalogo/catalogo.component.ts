import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

    tipoCatalogo?: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tipoCatalogo = this.route.snapshot.paramMap.get('tipoCatalogo') ?? undefined;
  }

}
