import { Component, OnInit } from '@angular/core';
import {Departement} from '../departement';
import {DepartementService} from '../departement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.css']
})
export class CreateDepartementComponent implements OnInit {
// @ts-ignore
  departement: Departement = new Departement();
  constructor(private  departementService: DepartementService,
              private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  saveDepartement(){
    this.departementService.createDepartement(this.departement).subscribe(data => {
    console.log(data);
    this.goToDepartementList();
    },
      error => console.log());
  }
  // tslint:disable-next-line:typedef
  goToDepartementList(){
    this.route.navigate(['/departements']);

  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.departement);
    this.saveDepartement();

}
}
