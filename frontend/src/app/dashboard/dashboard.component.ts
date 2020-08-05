import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  map() {
    this.router.navigate(['MAP']).then(() => {
      console.log('Moved to GIS Page');
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
