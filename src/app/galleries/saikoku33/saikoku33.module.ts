import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Saikoku33RoutingModule } from './saikoku33-routing.module';
import { Saikoku33Component } from './saikoku33.component';

import { Saikoku33MainComponent } from './saikoku33-main/saikoku33-main.component';

import { T1Component } from './t1/t1.component';


@NgModule({
    declarations: [
        Saikoku33Component,
        Saikoku33MainComponent,
        T1Component
    ],
    imports: [
        CommonModule,
        Saikoku33RoutingModule,
    ]
})
export class Saikoku33Module { }