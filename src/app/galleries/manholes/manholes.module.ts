import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManholesRoutingModule } from './manholes-routing.module';
import { ManholesComponent } from './manholes.component';

import { ManholesMainComponent } from './manholes-main/manholes-main.component';

import { OsakaComponent } from './osaka/osaka.component';


@NgModule({
    declarations: [
        ManholesComponent,
        ManholesMainComponent,
        OsakaComponent
    ],
    imports: [
        CommonModule,
        ManholesRoutingModule,
    ]
})
export class ManholesModule { }