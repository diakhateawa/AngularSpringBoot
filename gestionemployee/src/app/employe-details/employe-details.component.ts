import { Component, OnInit } from '@angular/core';
import {Employe} from '../employe';
import {ActivatedRoute} from '@angular/router';
import {EmployeService} from '../employe.service';


@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  employe: Employe;

  constructor(private route: ActivatedRoute,
              private employeService: EmployeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    // @ts-ignore
    this.employe = new Employe();
    this.employeService.getEmployeById(this.id).subscribe(data => {
      // @ts-ignore
      this.employe = data;
    });
  }
}
