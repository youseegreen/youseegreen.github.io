import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { OthersMainComponent } from './others-main/others-main.component';
import { ScheffeUraVersionComponent } from './scheffe-ura-version/scheffe-ura-version.component';

@NgModule({
    declarations: [
        OthersComponent,
        OthersMainComponent,
        ScheffeUraVersionComponent
    ],
    imports: [
        CommonModule,
        OthersRoutingModule,
    ]
})
export class OthersModule { }