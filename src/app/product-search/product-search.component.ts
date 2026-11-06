import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { Categoria, PRODUCTOS_CATALOGO } from '../producto-catalogo';

type Filtro = Categoria | 'Todas';

@Component({
  selector: 'app-product-search',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
  private readonly productos = PRODUCTOS_CATALOGO;

  readonly categorias: Filtro[] = ['Todas', 'Muebles', 'Papelería', 'Jardinería'];

  busqueda = new FormControl('', { nonNullable: true });

  filtros = new FormGroup({
    categoria: new FormControl<Filtro>('Todas', { nonNullable: true }),
    min: new FormControl<number | null>(null),
    max: new FormControl<number | null>(null),
  });

  // Texto del buscador: espera 300 ms, se normaliza y se ignora si no cambió
  private texto$ = this.busqueda.valueChanges.pipe(
    debounceTime(300),
    map((t) => t.trim().toLowerCase()),
    startWith(''),
    distinctUntilChanged()
  );

  private filtros$ = this.filtros.valueChanges.pipe(startWith(this.filtros.value));

  // Se combinan buscador y filtros: cualquier cambio recalcula la lista
  resultados = toSignal(
    combineLatest([this.texto$, this.filtros$]).pipe(
      map(([texto, f]) => {
        const categoria = f.categoria ?? 'Todas';
        const min = f.min ?? 0;
        const max = f.max ?? Infinity;

        return this.productos.filter(
          (p) =>
            p.nombre.toLowerCase().includes(texto) &&
            (categoria === 'Todas' || p.categoria === categoria) &&
            p.precio >= min &&
            p.precio <= max
        );
      })
    ),
    { initialValue: this.productos }
  );

  total = computed(() => this.resultados().length);

  elegirCategoria(c: Filtro): void {
    this.filtros.controls.categoria.setValue(c);
  }

  limpiar(): void {
    this.busqueda.setValue('');
    this.filtros.reset({ categoria: 'Todas', min: null, max: null });
  }
}