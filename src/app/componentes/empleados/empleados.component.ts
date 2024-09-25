import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../../servicios/empleado.service";
import { NgForm } from '@angular/forms';
import { Empleado } from '../../modelos/empleado';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

declare var M:any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [HttpClientModule, FormsModule], 
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  providers: [EmpleadoService]
})

export class EmpleadosComponent implements OnInit {  

  constructor(public empleadoService: EmpleadoService) { }  
  ngOnInit(): void { }

  agregarEmpleado(form?: NgForm) {  
    this.empleadoService.PostEmpleado(form?.value).subscribe(res => {  
      this.resetForm(form);  
      M.toast({html: 'Guardado satisfactoriamente'})
    });  
    }

  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro  
    if (form) {  
      form.reset();  
      this.empleadoService.selectedEmpleado = new Empleado();  
    }}

}

/*ERRORES PRESENTADOS: este error se ha solucionado configurando bien el archivo empleado.service.ts ubicado en src/app/servicios/empleado.service.ts

me genera error en PostEmpleado() y (res y tambien en selectedEmpleado

1. Método PostEmpleado no definido o tipo de dato incorrecto: Asegúrate de 
que el método PostEmpleado esté correctamente definido en el servicio EmpleadoService 
y que devuelva un Observable. Por ejemplo, debería ser algo así:

PostEmpleado(empleado: Empleado): Observable<any> {
  return this.http.post('API_URL', empleado);
}

2. selectedEmpleado no definido: Verifica que selectedEmpleado esté correctamente definido 
en EmpleadoService. Asegúrate de que la propiedad esté inicializada, como:

selectedEmpleado: Empleado = new Empleado();

RESUMEN: Confirma que tanto EmpleadoService como Empleado estén correctamente importados y estructurados.

SOLUCIÓN: VERIFICAR
src/app/modelos/empleado.ts
export class Empleado {
  constructor(
    public id?: number,
    public nombre?: string,
    public puesto?: string,
    // Agrega más propiedades según sea necesario
  ) {}
}

Asegúrate de que en tu componente empleados.component.ts tengas las siguientes importaciones:

import { EmpleadoService } from "../../servicios/empleado.service";
import { Empleado } from '../../modelos/empleado';

src/
  app/
    servicios/
      empleado.service.ts
    modelos/
      empleado.ts
    componentes/
      empleados/
        empleados.component.ts
        empleados.component.html
        empleados.component.css
Con esto, deberías poder utilizar EmpleadoService y Empleado sin problemas en tu componente 
EmpleadosComponent. Asegúrate también de que HttpClientModule esté importado en tu módulo principal 
(generalmente en app.module.ts) para poder realizar solicitudes HTTP.
*/

/*
constructor(public empleadoService: EmpleadoService):

El constructor inyecta el servicio EmpleadoService para que pueda ser 
utilizado dentro del componente. La palabra clave public hace que 
empleadoService esté disponible como una propiedad pública de la clase.
ngOnInit(): void:

Método que se ejecuta cuando el componente se inicializa. Aquí puedes 
realizar tareas de inicialización como obtener datos desde un servicio.
agregarEmpleado(form?: NgForm):


Método que se ejecuta cuando se desea agregar un empleado.
form?.value: Extrae los valores del formulario y los envía al servicio EmpleadoService a través del método PostEmpleado.
this.empleadoService.PostEmpleado(form?.value): Llama al servicio para agregar un empleado con los datos del formulario.
.subscribe(res => { ... }): Se suscribe al observable devuelto por el servicio. Cuando la operación de agregar empleado 
se complete, ejecuta el bloque de código dentro de subscribe.
M.toast({html: 'Guardado satisfactoriamente'});: Muestra un mensaje usando Materialize (una biblioteca de CSS y JavaScript). 
Si no estás usando Materialize, puede que esta línea cause un error.
resetForm(form?: NgForm):


Resetea el formulario a su estado inicial.
Si se pasa un formulario como argumento, se llama a form.reset() para limpiar el formulario.
this.empleadoService.selectedEmpleado = new Empleado();: Resetea la propiedad selectedEmpleado del servicio a una nueva 
instancia de Empleado, lo cual es útil para limpiar el estado del componente.
Resumen
Este componente de Angular permite agregar empleados a través de un formulario y utiliza un servicio para enviar los datos 
a un backend. Se inicializa con una inyección de dependencias y tiene métodos para manejar el envío y el reseteo del 
formulario. El uso de standalone y imports es una característica más reciente en Angular para crear componentes más modulares.
*/