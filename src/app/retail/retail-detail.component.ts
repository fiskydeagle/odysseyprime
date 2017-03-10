import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IRetail} from './retail';
import {RetailService} from "./retail.service";

@Component({
  templateUrl: './retail-detail.component.html'
})
export class RetailDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  retail_list: IRetail[];

  constructor(private _retailService: RetailService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
    this._retailService.getRetailList()
      .subscribe(
        retail_list => this.retail_list = retail_list.filter((retail: IRetail) =>
          retail.id == "" + id
        ),
        error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
    this._router.navigate(['/retail-list']);
  }
}
