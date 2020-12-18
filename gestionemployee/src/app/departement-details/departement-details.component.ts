import { Component, OnInit } from '@angular/core';
import {Departement} from '../departement';
import {ActivatedRoute} from '@angular/router';
import {DepartementService} from '../departement.service';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {
  // @ts-ignore
id: number;
  // @ts-ignore
departement: Departement;
  constructor(private route: ActivatedRoute,
              private  departementService: DepartementService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    // @ts-ignore
    this.departement = new Departement();
    this.departementService.getDepartementById(this.id).subscribe(data => {
      // @ts-ignore
      this.departement = data;

    });
  }

}
