import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../employe.service';
import {Employe} from '../employe';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  // @ts-ignore
  employe: Employe = new Employe();
  // @ts-ignore
  id: number;
  constructor(private employeService: EmployeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.employeService.getEmployeById(this.id).subscribe(data => {
      this.employe = data;
    }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.employeService.updateEmploye(this.id, this.employe).subscribe(data => {
      this.goToEmployeList();
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToEmployeList(){
    this.router.navigate(['/employes']);

  }

}
