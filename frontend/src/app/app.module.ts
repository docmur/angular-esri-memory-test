import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GisDashboardComponent } from './gis-dashboard/gis-dashboard.component';
import { EsriComponent } from './esri/esri.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GisDashboardComponent,
    EsriComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
