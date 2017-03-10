import {Component, OnInit} from '@angular/core';

import {IHealthcare} from './healthcare';
import {HealthcareService} from './healthcare.service';

@Component({
  templateUrl: './healthcare-list.component.html',
  styleUrls: ['./healthcare-list.component.css']
})
export class HealthcareListComponent implements OnInit {
  pageTitle: string = 'Healthcare List';
  listFilter: string;
  errorMessage: string;

  healthcarel_list: IHealthcare[];

  constructor(private _healthcarelService: HealthcareService) {

  }

  ngOnInit(): void {
    this._healthcarelService.getHealthcareList()
      .subscribe(healthcarel_list => this.healthcarel_list = healthcarel_list,
        error => this.errorMessage = <any>error);
  }
}
