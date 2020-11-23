import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ManholeFilterPipe } from './manhole-filter.pipe';
import { ManholesRoutingModule } from './manholes-routing.module';
import { ManholesComponent } from './manholes.component';

import { ManholesMainComponent } from './manholes-main/manholes-main.component';

import { OsakaComponent } from './osaka/osaka.component';


@NgModule({
    declarations: [
        ManholesComponent,
        ManholesMainComponent,
        ManholeFilterPipe,
        OsakaComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ManholesRoutingModule,
    ]
})
export class ManholesModule { }