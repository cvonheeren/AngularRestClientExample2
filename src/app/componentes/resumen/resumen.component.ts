import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/modelos/inmueble';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  inmuebles1: Inmueble[] = [];
  precio3: number = 0;
  primeroCC: number = 0;
  ordenados: any[] = [];

  constructor(private is: InmueblesService) { }

  ngOnInit(): void {
    this.is.get().subscribe(inmuebles => {
      this.inmuebles1 = inmuebles;
      this.ordenados = this.ordenadoPorNombres();
      this.precio3 = this.precioMasDe3Habitaciones();
      this.primeroCC = this.primeroConCocina();
    })
  }

  precioMasDe3Habitaciones(): number {
    return this.inmuebles1.
      map(lista => {
        const coso = {
          habitaciones: lista.habitaciones,
          precio: lista.precio,
          tipo: lista.tipo
        }
        return coso;
      }).
      filter(coso => coso.habitaciones > 3).
      filter(coso => coso.tipo === 'alquiler').
      map(coso => coso.precio).
      reduce((anterior, nuevo) => {return nuevo + anterior})
  }

  ordenadoPorNombres(): any[] {
    return this.inmuebles1.
      map(lista => {
        const coso = {
          nombre: lista.nombre,
          precio: lista.precio
        }
        return coso;
      }).
      sort((a, b) => a.nombre.localeCompare(b.nombre))
  }


  primeroConCocina(): number {
    return this.inmuebles1.
      map(lista => {
        const coso = {
          id: lista.id,
          servicios: lista.servicios
        }
        return coso;
      }).
      filter(coso => coso.servicios.includes('cocina')).
      map(coso => coso.id)[0];
  }
}
