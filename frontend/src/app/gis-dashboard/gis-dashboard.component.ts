import {Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gis-dashboard',
  templateUrl: './gis-dashboard.component.html',
  styleUrls: ['./gis-dashboard.component.css'],
})
export class GisDashboardComponent implements OnInit, OnDestroy {

  @ViewChild('esriMap') esriMap: ElementRef;

  public gisData = [{id: 0, api: '', label: '', type: ''}];
  public expand = false;
  public esriMapArea = true;
  public mapLoading = false;

  // Set our map properties
  public mapCenter = [-122.4194, 37.7749];
  public basemapType = 'streets';
  public mapZoomLevel = 13;

  constructor(private router: Router, private ref: ChangeDetectorRef) {
    this.gisData = [];
    this.gisData.push({
      id: 0,
      api: 'BLAH',
      label: 'Assets',
      type: 'ESRI',
    });
  }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate(['/']).then(() => {
      console.log('Moved to Dashboard');
    });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
  }
}
