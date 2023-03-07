import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Veterinaria } from '../Interfaces/veterinaria';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 servidor = 'http://localhost:8080/api';
  constructor(private servicio:HttpClient) { }


  getMascota(): Observable<any> {
    return this.servicio.get(`${this.servidor}/veterinaria`);
  }

  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/veterinaria/${id}`);
  }
}

