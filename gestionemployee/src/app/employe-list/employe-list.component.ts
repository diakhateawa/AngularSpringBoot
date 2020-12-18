import { Component, OnInit } from '@angular/core';
import {Employe} from '../employe';
import {Departement} from '../departement';
import {EmployeService} from '../employe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  employes: Employe[] = [];

  constructor(private employeService: EmployeService ,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployes();
  }

  // tslint:disable-next-line:typedef
  private getEmployes() {
    this.employeService.getEmployesList().subscribe(data => {
      this.employes = data;
    });
  }

  // tslint:disable-next-line:typedef
  updateEmploye(id: number) {
    this.router.navigate(['update-employe', id]);
  }

  /* this.employes = [{
     id: 1,
     prenom: 'Aminata',
     nom: 'DIA',
     email:  'dia@gmail.com',
     telephone: '772000000',
     adresse: 'Pikine',
     departement: new Departement(1, 'Informatique')
   },
     {
     id: 2,
     prenom: 'Binta',
     nom: 'DIAW',
     email: 'diaw@gmail.com',
     telephone: '778000000',
     adresse: 'Dakar',
       departement: new Departement(1, 'Geomatique')
 }
   ];
 }*/
  // tslint:disable-next-line:typedef
  deleteEmploye(id: number) {
    this.employeService.deleteEmploye(id).subscribe(data => {
      console.log(data);
      this.getEmployes();
    });
  }

  // tslint:disable-next-line:typedef
  employeDetails(id: number) {
    this.router.navigate(['employe-details', id]);
  }
}
