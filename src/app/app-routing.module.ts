import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './componentes/empleados/empleados.component'; // Ajusta la ruta según sea necesario

const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' }, // Ruta por defecto
  { path: 'empleados', component: EmpleadosComponent },
  // Agrega más rutas aquí según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }