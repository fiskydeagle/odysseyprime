import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IHealthcare} from './healthcare';
import {HealthcareService} from "./healthcare.service";

@Component({
  templateUrl: './healthcare-detail.component.html'
})
export class HealthcareDetailComponent implements OnInit {
  pageTitle: string = 'Healthcare Detail';
  errorMessage: string;
  healthcare_list: IHealthcare[];

  constructor(private _healthcareService: HealthcareService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
    this._healthcareService.getHealthcareList()
      .subscribe(
        healthcare_list => this.healthcare_list = healthcare_list.filter((healthcare: IHealthcare) =>
          healthcare.id == "" + id
        ),
        error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
    this._router.navigate(['/healthcare-list']);
  }
}
