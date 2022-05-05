export class ImagenCarousel {
  public imagen: string;
  public descripcion: string;

  constructor(
      image: string,
       descripcion: string
      ) {
    this.imagen = image;
    this.descripcion = descripcion;
  }

  public getImagen(): string {
    return this.imagen;
  }

  public getDescripcion(): string {
    return this.descripcion;
  }
}
