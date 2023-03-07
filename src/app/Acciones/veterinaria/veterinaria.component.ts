import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Veterinaria } from 'src/app/Interfaces/veterinaria';
import { ServicesService } from 'src/app/Servicios/services.service';
import { NgModel } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {

  Veterinaria: Array <Veterinaria> = []
  myForm!:FormGroup;
  filterPost= '';

  constructor(private fb:FormBuilder, private http:HttpClient, private veterinariaS:ServicesService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    nmid:[''],
    nompet: [''],
    fecNac: [''],
    fecReg: [''],
    tipid:[''],
    nmtid: [''],
    nomD: [''],
    ciudad:[''],
    direccion:[''],
    telefono: [''],
    nomRaz: [''],
    nomEsp: [''],
    });

    let arrayVeterinario  : Array<Veterinaria>=[];
    this.veterinariaS.getMascota().subscribe(datos=>{
      this.Veterinaria=datos.data;
      console.log(datos);
    })
  }
  refresh(){
    let arrayCliente: Array<Veterinaria>=[];
    this.veterinariaS.getMascota().subscribe(datos=>{
      this.Veterinaria=datos.data;

    })
  }
  deletee(nmid: number){
    var r = confirm("¿Seguro que desea eliminar el registro?");
    if (r == true) {
      this.veterinariaS.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se eliminó el registro");
    }
    }

}
