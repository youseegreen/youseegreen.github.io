import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleriesComponent } from './galleries.component';
import { GalleriesMainComponent } from './galleries-main/galleries-main.component';

import { FirstTripComponent } from './first-trip/first-trip.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
    declarations: [
        GalleriesComponent,
        GalleriesMainComponent,
        FirstTripComponent,
        MapsComponent, 
    ],
    imports: [
        CommonModule,
        GalleriesRoutingModule,
    ],
})
export class GalleriesModule { }