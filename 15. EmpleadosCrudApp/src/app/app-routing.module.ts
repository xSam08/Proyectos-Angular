import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';

const routes: Routes = [
  { path: '', component: ListEmpleadoComponent },
  { path: 'add', component: AddEditEmpleadoComponent },
  { path: 'edit/:id', component: AddEditEmpleadoComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
