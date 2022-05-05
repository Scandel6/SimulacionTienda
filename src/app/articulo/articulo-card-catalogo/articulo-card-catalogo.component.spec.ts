import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCardCatalogoComponent } from './articulo-card-catalogo.component';

describe('ArticuloCardCatalogoComponent', () => {
  let component: ArticuloCardCatalogoComponent;
  let fixture: ComponentFixture<ArticuloCardCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloCardCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCardCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
