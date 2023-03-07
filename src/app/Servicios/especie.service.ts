import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especie } from '../Interfaces/especie';
@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio:HttpClient) { }

  getEspecie(): Observable<any> {
    return this.servicio.get(`${this.servidor}/especie`);
  }

  createEspecie(especie: Especie) {
    return this.servicio.post<Especie>(`${this.servidor}/especie`, especie);
  }

  editar(especie: Especie) {
    return this.servicio.put<Especie>(`${this.servidor}/especie/`, especie.nmid);
  }

  updateEspecie(especie:Especie) {
    return this.servicio.put<Especie>(this.servidor + "/especie", especie);
  }

  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/especie/${id}`);
  }
}
