import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { OthersMainComponent } from './others-main/others-main.component';
import { OthersMainEnComponent } from './others-main/others-main-en.component';
import { ScheffeUraVersionComponent } from './scheffe-ura-version/scheffe-ura-version.component';
import { Cluster3DModelComponent } from './cluster-3dmodel/cluster-3dmodel.component';
import { CppTensorflowComponent } from './cpp-tensorflow/cpp-tensorflow.component';
import { StartVTuberComponent } from './start-vtuber/start-vtuber.component';
import { StartVTuber2Component } from './start-vtuber-2/start-vtuber-2.component';
import { UnityNativePluginTipsComponent } from './unity-nativeplugin-tips/unity-nativeplugin-tips.component';
import { UnityRealSenseComponent } from './unity-realsense/unity-realsense.component';
import { ABCJSComponent } from './abcjs/abcjs.component';
import { PuyoBaseComponent } from './puyobase/puyobase.component';
import { DesktopMovieComponent } from './desktop-movie/desktop-movie.component';
import { Pptx2FigsComponent } from './pptx2figs/pptx2figs.component';

@NgModule({
    declarations: [
        OthersComponent,
        OthersMainComponent,
        OthersMainEnComponent,
        ScheffeUraVersionComponent,
        PuyoBaseComponent,
        Cluster3DModelComponent,
        CppTensorflowComponent,
        StartVTuberComponent,
        StartVTuber2Component,
        UnityNativePluginTipsComponent,
        UnityRealSenseComponent,
        ABCJSComponent,
        DesktopMovieComponent,
        Pptx2FigsComponent
    ],
    imports: [
        CommonModule,
        OthersRoutingModule,
    ]
})
export class OthersModule { }