import { Component, OnInit } from '@angular/core';
import {Departement} from '../departement';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartementService} from '../departement.service';


@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  // @ts-ignore
  departement: Departement = new Departement();
  // @ts-ignore
  id: number;

  constructor(private departementService: DepartementService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.departementService.getDepartementById(this.id).subscribe(data => {
      this.departement = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {this.departementService.updateDepartement(this.id, this.departement).subscribe(data => {
    this.goToDepartementList();
    // tslint:disable-next-line:no-shadowed-variable
  }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToDepartementList(){
    this.router.navigate(['/departements']);

  }
}
