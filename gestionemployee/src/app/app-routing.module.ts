import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {DepartementListComponent} from './departement-list/departement-list.component';
import {CreateEmployeComponent} from './create-employe/create-employe.component';
import {CreateDepartementComponent} from './create-departement/create-departement.component';
import {UpdateEmployeComponent} from './update-employe/update-employe.component';
import {UpdateDepartementComponent} from './update-departement/update-departement.component';
import {EmployeDetailsComponent} from './employe-details/employe-details.component';
import {DepartementDetailsComponent} from './departement-details/departement-details.component';

const routes: Routes = [
  {path: 'employes', component: EmployeListComponent},
  {path: 'departements', component: DepartementListComponent},
  {path: 'create-employe', component: CreateEmployeComponent},
  {path: 'create-departement', component: CreateDepartementComponent},
  {path: 'update-employe/:id', component: UpdateEmployeComponent},
  {path: 'update-departement/:id', component: UpdateDepartementComponent},
  {path: 'employe-details/:id', component: EmployeDetailsComponent},
  {path: 'departement-details/:id', component: DepartementDetailsComponent},
  {path: '', redirectTo: 'employes', pathMatch: 'full'},
  {path: '', redirectTo: 'departements', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
