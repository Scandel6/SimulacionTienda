import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerArticulos():Observable<Articulo[]>{
    const url: string = "http://localhost:3001/articulo";
    return this.http.get<Articulo[]>(url);
  }
}
