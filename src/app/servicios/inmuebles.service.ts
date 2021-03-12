import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inmueble } from '../modelos/inmueble';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/inmuebles/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.url);
  }

  getPorId(id: number): Observable<Inmueble> {
    return this.http.get<Inmueble>(this.url + id);
  }

  getPorTipo(tipo: string): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.url + `?tipo_like=${tipo}`);
  }


  getInterval(precioMin: number, precioMax: number): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.url + `?precio_gte=${precioMin}&precio_lte=${precioMax}`);
  }

  getPorNombreDireccion(texto: string): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.url + `?q=${texto}`);
  }

  post(Inmueble: Inmueble): Observable<Inmueble> {
    return this.http.post<Inmueble>(this.url, Inmueble, this.httpOptions);
  }

  put(Inmueble: Inmueble): Observable<Inmueble> {
    return this.http.put<Inmueble>(this.url + Inmueble.id, Inmueble, this.httpOptions);
  }

  delete(id: number): Observable<Inmueble> {
    return this.http.delete<Inmueble>(this.url + id, this.httpOptions);
  }

}
