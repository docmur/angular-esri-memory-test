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

  removeByTag(tag) {
    const element = document.getElementsByTagName(tag);
    while (element[0]) {
      element[0].parentNode.removeChild(element[0])
    }
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    console.log('In PARENT NG ON DESTROY');

    /* Delete the references to the maps --- this should help free the memory */
    try {
      this.removeByTag('app-esri');
      this.esriMapArea = null;
      this.esriMap = null;
      delete this.esriMapArea;
      delete this.esriMap;

      this.ref.detectChanges();
    } catch (error) {
      console.log(error);
    }
  }
}
