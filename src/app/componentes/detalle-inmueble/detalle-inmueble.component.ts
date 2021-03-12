import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/modelos/inmueble';
import { ActivatedRoute } from '@angular/router';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-detalle-inmueble',
  templateUrl: './detalle-inmueble.component.html',
  styleUrls: ['./detalle-inmueble.component.css']
})
export class DetalleInmuebleComponent implements OnInit {

  inmueble: Inmueble;

  constructor(private is: InmueblesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.cargar(param))
  }

  cargar(param) {
    const id = param.get('id');
    this.is.getPorId(id).subscribe(inmueble => this.inmueble = inmueble)
  }

}
