import { Component, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Producto } from './producto';
import { DisponibilidadPipe } from './disponibilidad.pipe';
import { inject } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, UpperCasePipe, DisponibilidadPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('catalogo-productos');

  private productosService = inject(ProductosService);

  productos: Producto[] = this.productosService.getProductos();

  busqueda = signal('');

  resultados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();
    if (!texto) return this.productos;
    return this.productos.filter((p) =>
      p.nombre.toLowerCase().includes(texto)
    );
  });
}