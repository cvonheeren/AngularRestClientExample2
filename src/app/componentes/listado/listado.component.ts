import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/modelos/inmueble';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  inmuebles: Inmueble[] = [];
  precioMin:number;
  precioMax:number;

  constructor(private is: InmueblesService) { }

  ngOnInit(): void {
    this.is.get().subscribe(inmuebles => this.inmuebles = inmuebles)
  }

  buscar(texto) {
    this.is.getPorNombreDireccion(texto).subscribe(inmuebles => this.inmuebles = inmuebles);
  }

  setPrecio(precio: number) {
    this.precioMax = precio;
  }

  buscarPorPrecio() {
    this.is.getInterval(this.precioMin, this.precioMax).subscribe(inmuebles => this.inmuebles = inmuebles);
  }

  buscarPorTipo(tipo: string) {
    this.is.getPorTipo(tipo).subscribe(inmuebles => this.inmuebles = inmuebles);
  }

  todas(){
    this.is.get().subscribe(inmuebles => this.inmuebles = inmuebles)
  }

}
