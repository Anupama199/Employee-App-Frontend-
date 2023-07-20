import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent} from './employeeform/employeeform.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  {path:"form",component:EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }