import { Component, OnInit } from '@angular/core';
import { ImagenCarousel } from './imagen-carousel.model';
import { CarouselService } from './service/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    imagenesCarousel: ImagenCarousel []= [];

  constructor(
      private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
      this.getImagenes();
  }

  private getImagenes(): void {
    this.carouselService.getImagenes().subscribe({
          next: (imagenesAImportar)=>{
              this.imagenesCarousel = imagenesAImportar;
          }
      });

  }

  public esPrimerElemento(imagen:ImagenCarousel){
      return this.imagenesCarousel.indexOf(imagen) == 0; 
  }



}
