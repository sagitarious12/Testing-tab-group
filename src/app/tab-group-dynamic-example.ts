import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css']
})
export class TabGroupDynamicExample {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.route.queryParams.subscribe(params => {
      const value = parseInt(params['tab'], 10);
      if (!isNaN(value)) this.selected.setValue(params['tab']);
    });
  }

  setSelected(tab: number) {
    this.selected.setValue(tab);
    this.location.go(this.router.url.split('?')[0], `tab=${tab}`);
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
