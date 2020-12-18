import { Component, OnInit } from '@angular/core';
import {Employe} from '../employe';
import {EmployeService} from '../employe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
// @ts-ignore
  employe: Employe = new Employe();
  constructor(private  employeService: EmployeService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  saveEmploye(){
    this.employeService.createEmploye(this.employe).subscribe(data => {
      console.log(data);
      this.goToEmployeList();
    },
      error => console.log());
  }

  // tslint:disable-next-line:typedef
  goToEmployeList(){
    this.router.navigate(['/employes']);

  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.employe);
    this.saveEmploye();

  }

}
