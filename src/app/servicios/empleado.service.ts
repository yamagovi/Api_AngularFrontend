import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados : Empleado[];
  readonly URL_API = 'https://api-angular-backend.vercel.app/api/empleados'; //estaba en el 3000 lo paso a 3005
  //https://despliegue-sigma.vercel.app/api/empleados (este es el del profesor, coloco el mío arriba como se llama mi proyecto)

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados = [];
  }

  getEmpleados(){
    return this.http.get(this.URL_API);
    }
  
    PostEmpleado(Empleado:Empleado){
      return this.http.post(this.URL_API, Empleado);
    }

    putEmpleado(Empleado:Empleado){
      return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);//
    }

    deleteEmpleado(_id: string) { // Solo se necesita el id, no todo lo del empleado
      return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete      
    }

}
