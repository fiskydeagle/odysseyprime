import {Component, OnInit} from '@angular/core';

import {IRetail} from './retail';
import {RetailService} from './retail.service';

@Component({
  templateUrl: './retail-list.component.html',
  styleUrls: ['./retail-list.component.css']
})
export class RetailListComponent implements OnInit {
  pageTitle: string = 'Retail List';
  listFilter: string;
  errorMessage: string;

  retail_list: IRetail[];

  constructor(private _retailService: RetailService) {

  }

  ngOnInit(): void {
    this._retailService.getRetailList()
      .subscribe(retail_list => this.retail_list = retail_list,
        error => this.errorMessage = <any>error);
  }
}
