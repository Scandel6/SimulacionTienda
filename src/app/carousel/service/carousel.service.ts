import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagenCarousel } from '../imagen-carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
      private http: HttpClient
  ) { }

  public getImagenes (): Observable<ImagenCarousel[]>{
      const url: string = "http://localhost:3002/carousel";
      return this.http.get<ImagenCarousel[]>(url);
  }
  
}
