import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleInmuebleComponent } from './componentes/detalle-inmueble/detalle-inmueble.component';
import { FormularioInmuebleComponent } from './componentes/formulario-inmueble/formulario-inmueble.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  {
    path: 'listado', component: ListadoComponent,
    children: [
      {
        path: ':id', component: DetalleInmuebleComponent,
      },
    ]
  },
  {path: 'nuevo', component: FormularioInmuebleComponent},
  {path: 'resumen', component: ResumenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
