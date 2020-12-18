import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private baseUrl = "http://localhost:8081/api/v1/employes";

  constructor(private httpClient: HttpClient) {}

  getEmployesList(): Observable<Employe[]>{
    return  this.httpClient.get<Employe[]>(`${this.baseUrl}`);
  }

  // @ts-ignore
  createEmploye(employe: Employe): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, employe);

  }
  getEmployeById(id: number): Observable< Employe>{
    return this.httpClient.get<Employe>(`${this.baseUrl}/${id}`);
  }
  updateEmploye(id: number, employe: Employe): Observable<object>{
    return  this.httpClient.put(`${this.baseUrl}/${id}`, employe);
  }

  deleteEmploye(id: number): Observable<object>{
    return  this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
