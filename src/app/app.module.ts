import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleInmuebleComponent } from './componentes/detalle-inmueble/detalle-inmueble.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularioInmuebleComponent } from './componentes/formulario-inmueble/formulario-inmueble.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    DetalleInmuebleComponent,
    FormularioInmuebleComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
