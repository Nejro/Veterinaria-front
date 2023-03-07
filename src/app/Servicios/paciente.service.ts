import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Interfaces/paciente';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  servidor = 'http://localhost:8080/api';
  constructor(private servicio:HttpClient) { }

  getPaciente(): Observable<any> {
    return this.servicio.get(`${this.servidor}/paciente`);
  }

  createPaciente(paciente: Paciente) {
    return this.servicio.post<Paciente>(`${this.servidor}/paciente`, paciente);
  }

  editar(paciente: Paciente) {
    return this.servicio.put<Paciente>(`${this.servidor}/paciente/`, paciente.nmid);
  }

  updatePaciente(paciente: Paciente) {
    return this.servicio.put<Paciente>(this.servidor + "/paciente", paciente);
  }

  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/paciente/${id}`);
  }
}
