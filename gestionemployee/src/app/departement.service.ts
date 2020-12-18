import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Departement} from './departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = "http://localhost:8081/api/v1/departements";


  constructor(private httpClient: HttpClient) { }
  getDeppartementsList(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseUrl}`);
  }

  createDepartement(departement: Departement): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, departement);
  }
getDepartementById(id: number): Observable<Departement>{
  return this.httpClient.get<Departement>(`${this.baseUrl}/${id}`);
}
  updateDepartement(id: number, departement: Departement): Observable<object>{
    return  this.httpClient.put(`${this.baseUrl}/${id}`, departement);
  }
  deleteDepartement(id: number): Observable<object>{
    return  this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}


