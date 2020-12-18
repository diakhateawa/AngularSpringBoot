import { Component, OnInit } from '@angular/core';
import {Departement} from '../departement';
import {DepartementService} from '../departement.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  departements: Departement[] = [];

  constructor(private  departementService: DepartementService,
              private router: Router) { }

  ngOnInit(): void {
   this.getDepartements();
  }
  // tslint:disable-next-line:typedef
  private getDepartements(){
    this.departementService.getDeppartementsList().subscribe(data => {
      this.departements = data;
    });

}

  // tslint:disable-next-line:typedef
  updateDepartement(id: number) {
    this.router.navigate(['update-departement', id]);

  }

  // tslint:disable-next-line:typedef
  deleteDepartement(id: number) {
    this.departementService.deleteDepartement(id).subscribe(data => {
      console.log(data);
      this.getDepartements();
    });
  }

  // tslint:disable-next-line:typedef
  departementDetails(id: number) {
    this.router.navigate(['departement-details', id]);
  }
}

