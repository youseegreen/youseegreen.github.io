import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleriesComponent } from './galleries.component';
import { GalleriesMainComponent } from './galleries-main/galleries-main.component';

import { Saikoku33Component } from './saikoku33/saikoku33.component';
import { ManholesComponent } from './manholes/manholes.component';
import { FirstTripComponent } from './first-trip/first-trip.component';

@NgModule({
    declarations: [
        GalleriesComponent,
        GalleriesMainComponent,
        Saikoku33Component,
        ManholesComponent,
        FirstTripComponent,
    ],
    imports: [
        CommonModule,
        GalleriesRoutingModule,
    ]
})
export class GalleriesModule { }