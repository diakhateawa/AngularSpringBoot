import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import {FormsModule} from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    DepartementListComponent,
    CreateEmployeComponent,
    CreateDepartementComponent,
    UpdateEmployeComponent,
    UpdateDepartementComponent,
    EmployeDetailsComponent,
    DepartementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
