import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-inmueble',
  templateUrl: './formulario-inmueble.component.html',
  styleUrls: ['./formulario-inmueble.component.css']
})
export class FormularioInmuebleComponent implements OnInit {

  inmueble = {
    id: 0,
    nombre: '',
    direccion: '',
    imagen: '',
    precio: 0,
    tipo: '',
    habitaciones: 0,
    servicios: []
  }

  validado: boolean = false;

  constructor(private is: InmueblesService, private router: Router) { }

  ngOnInit(): void {
  }

  btnAceptar(esValido: boolean): void {
    this.validado = true;

    if(!esValido) {
      return;
    }

    this.is.post(this.inmueble).subscribe(_ => {
      alert("Inserción realizada con éxito");
      this.irAListado();
    });
  }

  irAListado() {
    this.router.navigate(['/listado']);
  }
}
