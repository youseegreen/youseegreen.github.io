import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { OthersMainComponent } from './others-main/others-main.component';
import { ScheffeUraVersionComponent } from './scheffe-ura-version/scheffe-ura-version.component';
import { Cluster3DModelComponent } from './cluster-3dmodel/cluster-3dmodel.component';
import { CppTensorflowComponent } from './cpp-tensorflow/cpp-tensorflow.component';
import { StartVTuberComponent } from './start-vtuber/start-vtuber.component';
import { StartVTuber2Component } from './start-vtuber-2/start-vtuber-2.component';
import { UnityNativePluginTipsComponent } from './unity-nativeplugin-tips/unity-nativeplugin-tips.component';
import { UnityRealSenseComponent } from './unity-realsense/unity-realsense.component';

@NgModule({
    declarations: [
        OthersComponent,
        OthersMainComponent,
        ScheffeUraVersionComponent,
        Cluster3DModelComponent,
        CppTensorflowComponent,
        StartVTuberComponent,
        StartVTuber2Component,
        UnityNativePluginTipsComponent,
        UnityRealSenseComponent
    ],
    imports: [
        CommonModule,
        OthersRoutingModule,
    ]
})
export class OthersModule { }