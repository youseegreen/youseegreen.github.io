import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleriesComponent } from './galleries.component';
import { GalleriesMainComponent } from './galleries-main/galleries-main.component';

import { FirstTripComponent } from './first-trip/first-trip.component';

@NgModule({
    declarations: [
        GalleriesComponent,
        GalleriesMainComponent,
        FirstTripComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        GalleriesRoutingModule,
    ],
})
export class GalleriesModule { }