import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Saikoku33RoutingModule } from './saikoku33-routing.module';
import { Saikoku33Component } from './saikoku33.component';

import { Saikoku33MainComponent } from './saikoku33-main/saikoku33-main.component';

import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';
import { T9Component } from './t9/t9.component';
import { T10Component } from './t10/t10.component';
import { T11Component } from './t11/t11.component';
import { T12Component } from './t12/t12.component';
import { T13Component } from './t13/t13.component';
import { T14Component } from './t14/t14.component';
import { T15Component } from './t15/t15.component';
import { T16Component } from './t16/t16.component';
import { T17Component } from './t17/t17.component';
import { T18Component } from './t18/t18.component';
import { T19Component } from './t19/t19.component';
import { T20Component } from './t20/t20.component';
import { T21Component } from './t21/t21.component';
import { T22Component } from './t22/t22.component';
import { T23Component } from './t23/t23.component';
import { T24Component } from './t24/t24.component';


@NgModule({
    declarations: [
        Saikoku33Component,
        Saikoku33MainComponent,
        T1Component,
        T2Component,
        T3Component,
        T4Component,
        T5Component,
        T6Component,
        T7Component,
        T8Component,
        T9Component,
        T10Component,
        T11Component,
        T12Component,
        T13Component,
        T14Component,
        T15Component,
        T16Component,
        T17Component,
        T18Component,
        T19Component,
        T20Component,
        T21Component,
        T22Component,
        T23Component,
        T24Component
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        Saikoku33RoutingModule,
    ]
})
export class Saikoku33Module { }