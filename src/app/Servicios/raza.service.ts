import { Injectable } from '@angular/core';
import { Raza } from '../Interfaces/raza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RazaService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio:HttpClient) { }


  getRaza(): Observable<any> {
    return this.servicio.get(`${this.servidor}/raza`);
  }

  createRaza(raza: Raza) {
    return this.servicio.post<Raza>(`${this.servidor}/raza`, raza);
  }

  editar(raza: Raza) {
    return this.servicio.put<Raza>(`${this.servidor}/raza/`, raza.nmid);
  }

  updateRaza(raza:Raza) {
    return this.servicio.put<Raza>(this.servidor + "/raza", raza);
  }
  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/raza/${id}`);
  }
}
