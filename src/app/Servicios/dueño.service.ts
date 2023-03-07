import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dueño } from '../Interfaces/dueño';
@Injectable({
  providedIn: 'root'
})
export class DueñoService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio:HttpClient) { }

  getDueño(): Observable<any> {
    return this.servicio.get(`${this.servidor}/dueno`);
  }

  createDueño(dueño: Dueño) {
    return this.servicio.post<Dueño>(`${this.servidor}/dueno`, dueño);
  }

  editar(dueño: Dueño) {
    return this.servicio.put<Dueño>(`${this.servidor}/dueno/`, dueño.nmid);
  }

  updateDueño(dueño: Dueño) {
    return this.servicio.put<Dueño>(this.servidor + "/dueno", dueño);
  }

  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/dueno/${id}`);
  }
}
