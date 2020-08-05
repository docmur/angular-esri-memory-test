import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esr TypeScript Types

@Component({
  selector: 'app-esri',
  templateUrl: './esri.component.html',
  styleUrls: ['./esri.component.css']
})
export class EsriComponent implements OnInit {

  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  @Input()
  set basemap(basemap: string) {
    basemap = 'topo';
    this._basemap = basemap;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = [-122.4194, 37.7749];
  }

  @Input()
  set url(api: string) {
    this._api = api;
  }

  @Input()
  set zoom(zoom: number) {
    zoom = 12;
    this._zoom = zoom;
  }

  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  private _api: string;

  private EsriMap: any;
  private EsriMapView: any;

  private _basemap = 'topo';
  private _center: Array<number> = [0.1278, 51.5074];
  private _map: esri.Map = null;
  private _view: esri.MapView = null;
  private _zoom = 8;

  constructor() {
  }

  ngOnDestroy() {
    console.log('Destroying the ESRI View and ESRI Map');
    if (this._map) {
      this._map.removeAll();
      this._map.destroy();
      this._map = null;
      delete this._map;
    } else {
      console.log('Map is NULL');
    }

    if (this._view) {
      this._view.map = null;
      this._view.container = null;
      this._view.destroy();
      this._view = null;
      delete this._view;
    } else {
      console.log('View is NULL');
    }
  }

  ngOnInit() {
    console.clear();
    console.log('Initializing Map');
    this.initializeMap().then(mapView => {
    });
  }

  async initializeMap() {
    [this.EsriMap, this.EsriMapView] = await loadModules(['esri/Map', 'esri/views/MapView',]);

    /* Configure and initialize the map */
    const mapProperties: esri.MapProperties = {
      basemap: this._basemap
    };

    this._map = new this.EsriMap(mapProperties);

    const mapViewProperties: esri.MapViewProperties = {
      container: 'mapElement',
      center: this._center,
      zoom: this._zoom,
      map: this._map
    };

    return this._view = new this.EsriMapView(mapViewProperties);
  }
}
