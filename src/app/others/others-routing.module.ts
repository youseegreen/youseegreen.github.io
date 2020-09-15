import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';
import { OthersMainComponent } from './others-main/others-main.component';
import { ScheffeUraVersionComponent } from './scheffe-ura-version/scheffe-ura-version.component';
import { Cluster3DModelComponent } from './cluster-3dmodel/cluster-3dmodel.component';
import { CppTensorflowComponent } from './cpp-tensorflow/cpp-tensorflow.component';
import { StartVTuberComponent } from './start-vtuber/start-vtuber.component';
import { StartVTuber2Component } from './start-vtuber-2/start-vtuber-2.component';
import { UnityNativePluginTipsComponent } from './unity-nativeplugin-tips/unity-nativeplugin-tips.component';
import { UnityRealSenseComponent } from './unity-realsense/unity-realsense.component';

const routes: Routes = [
    {
        path: '', component: OthersComponent,
        children: [
            {
                path: '', component: OthersMainComponent,
                data: {
                    title: 'その他 | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志のその他のページです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Tips,Blog',
                    ogUrl: 'https://youseegreen.github.io/others/'
                }
            },
            {
                path: 'scheffe-ura-version', component: ScheffeUraVersionComponent,
                data: {
                    title: 'シェッフェの一対比較法の浦の変法の元論文について | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://youseegreen.github.io/others/scheffe-ura-version'
                }
            },
            {
                path: 'cluster-3dmodel', component: Cluster3DModelComponent,
                data: {
                    title: 'BlenderとUnityでCluster用の.vrmファイルを作成する | 佐藤 優志 (Yushi Sato)',
                    description: 'BlenderとUnityでCluster用の.vrmファイルを作成する',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Blender, Unity, Cluster, vrm',
                    ogUrl: 'https://youseegreen.github.io/others/cluster-3dmodel'
                }
            },
            {
                path: 'cpp-tensorflow', component: CppTensorflowComponent,
                data: {
                    title: 'c++から学習済みtensorflowモデルを呼び出す | 佐藤 優志 (Yushi Sato)',
                    description: 'c++から学習済みtensorflowモデルを呼び出す',
                    keyword: '佐藤優志,youseegreen,Yushi Sato, c++, tensorflow, keras, visual studio',
                    ogUrl: 'https://youseegreen.github.io/others/cpp-tensorflow'
                }
            },
            {
                path: 'start-vtuber', component: StartVTuberComponent,
                data: {
                    title: 'USBカメラを使ってV-Tuberになろう！1 | 佐藤 優志 (Yushi Sato)',
                    description: 'USBカメラを使ってV-Tuberになろう！1',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,USBカメラ, V-Tuber, c++, Unity',
                    ogUrl: 'https://youseegreen.github.io/others/start-vtuber'
                }
            },
            {
                path: 'start-vtuber-2', component: StartVTuber2Component,
                data: {
                    title: 'USBカメラを使ってV-Tuberになろう！２ | 佐藤 優志 (Yushi Sato)',
                    description: 'USBカメラを使ってV-Tuberになろう！２',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,USBカメラ, V-Tuber, c++, Unity',
                    ogUrl: 'https://youseegreen.github.io/others/start-vtuber-2'
                }
            },
            {
                path: 'unity-nativeplugin-tips', component: UnityNativePluginTipsComponent,
                data: {
                    title: 'UnityのNetivePlugin利用でc++上でのDebugを少し便利にしてみる | 佐藤 優志 (Yushi Sato)',
                    description: 'UnityのNetivePlugin利用でc++上でのDebugを少し便利にしてみる',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,c++, dll, Unity, Native Plugins, Debug, 開発',
                    ogUrl: 'https://youseegreen.github.io/others/unity-nativeplugin-tips'
                }
            },
            {
                path: 'unity-realsense', component: UnityRealSenseComponent,
                data: {
                    title: 'Native Pluginを利用してUnityからRealsenseを利用する | 佐藤 優志 (Yushi Sato)',
                    description: 'Native Pluginを利用してUnityからRealsenseを利用する',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Unity, RealSense, Native Plugins, c++, dll',
                    ogUrl: 'https://youseegreen.github.io/others/unity-realsense'
                }
            },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OthersRoutingModule { }