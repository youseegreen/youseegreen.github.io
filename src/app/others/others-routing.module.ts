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
import { ABCJSComponent } from './abcjs/abcjs.component';
import { PuyoBaseComponent } from './puyobase/puyobase.component';
import { DesktopMovieComponent } from './desktop-movie/desktop-movie.component';
import { Pptx2FigsComponent } from './pptx2figs/pptx2figs.component';

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
                    ogUrl: 'https://yushisato.com/others/'
                }
            },
            {
                path: 'scheffe-ura-version', component: ScheffeUraVersionComponent,
                data: {
                    title: 'シェッフェの一対比較法の浦の変法の元論文について | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://yushisato.com/others/scheffe-ura-version'
                }
            },
            {
                path: 'pptx2figs', component: Pptx2FigsComponent,
                data: {
                    title: 'powerpointで作成した複数の図を楽にpdf化するプログラム | 佐藤 優志 (Yushi Sato)',
                    description: 'powerpointで作成した複数の図を楽にpdf化するプログラム',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Python, python-pptx, pywin32, powerpoint, pdf',
                    ogUrl: 'https://yushisato.com/others/pptx2figs'
                }
            },            
            {
                path: 'desktop-movie', component: DesktopMovieComponent,
                data: {
                    title: '動くデスクトップ壁紙ソフト（Windows） | 佐藤 優志 (Yushi Sato)',
                    description: 'Windowsでデスクトップ壁紙を動く壁紙にするソフトを作成しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,動く壁紙,WallPaper Engine,c++',
                    ogUrl: 'https://yushisato.com/others/desktop-movie'
                }
            },
            {
                path: 'puyobase', component: PuyoBaseComponent,
                data: {
                    title: 'ぷよべ～す（ぷよ譜生成ソフト）の公開 | 佐藤 優志 (Yushi Sato)',
                    description: 'ぷよぷよの対戦動画からぷよ譜を自動生成するソフトを公開しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ぷよぷよ,ぷよ譜,ぷよぷよクロニクル,c++,OpenCV',
                    ogUrl: 'https://yushisato.com/others/puyobase'
                }
            },
            {
                path: 'cluster-3dmodel', component: Cluster3DModelComponent,
                data: {
                    title: 'BlenderとUnityでCluster用の.vrmファイルを作成する | 佐藤 優志 (Yushi Sato)',
                    description: 'BlenderとUnityでCluster用の.vrmファイルを作成する',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Blender, Unity, Cluster, vrm',
                    ogUrl: 'https://yushisato.com/others/cluster-3dmodel'
                }
            },
            {
                path: 'cpp-tensorflow', component: CppTensorflowComponent,
                data: {
                    title: 'c++から学習済みtensorflowモデルを呼び出す | 佐藤 優志 (Yushi Sato)',
                    description: 'c++から学習済みtensorflowモデルを呼び出す',
                    keyword: '佐藤優志,youseegreen,Yushi Sato, c++, tensorflow, keras, visual studio',
                    ogUrl: 'https://yushisato.com/others/cpp-tensorflow'
                }
            },
            {
                path: 'start-vtuber', component: StartVTuberComponent,
                data: {
                    title: 'USBカメラを使ってV-Tuberになろう！1 | 佐藤 優志 (Yushi Sato)',
                    description: 'USBカメラを使ってV-Tuberになろう！1',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,USBカメラ, V-Tuber, c++, Unity',
                    ogUrl: 'https://yushisato.com/others/start-vtuber'
                }
            },
            {
                path: 'start-vtuber-2', component: StartVTuber2Component,
                data: {
                    title: 'USBカメラを使ってV-Tuberになろう！２ | 佐藤 優志 (Yushi Sato)',
                    description: 'USBカメラを使ってV-Tuberになろう！２',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,USBカメラ, V-Tuber, c++, Unity',
                    ogUrl: 'https://yushisato.com/others/start-vtuber-2'
                }
            },
            {
                path: 'unity-nativeplugin-tips', component: UnityNativePluginTipsComponent,
                data: {
                    title: 'UnityのNetivePlugin利用でc++上でのDebugを少し便利にしてみる | 佐藤 優志 (Yushi Sato)',
                    description: 'UnityのNetivePlugin利用でc++上でのDebugを少し便利にしてみる',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,c++, dll, Unity, Native Plugins, Debug, 開発',
                    ogUrl: 'https://yushisato.com/others/unity-nativeplugin-tips'
                }
            },
            {
                path: 'unity-realsense', component: UnityRealSenseComponent,
                data: {
                    title: 'Native Pluginを利用してUnityからRealsenseを利用する | 佐藤 優志 (Yushi Sato)',
                    description: 'Native Pluginを利用してUnityからRealsenseを利用する',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Unity, RealSense, Native Plugins, c++, dll',
                    ogUrl: 'https://yushisato.com/others/unity-realsense'
                }
            },
            {
                path: 'abcjs', component: ABCJSComponent,
                data: {
                    title: 'abcjsを用いて、ウェブページで楽譜を表示してみる | 佐藤 優志 (Yushi Sato)',
                    description: 'abcjsを用いて、ウェブページで楽譜を表示してみる',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Unity, RealSense, Native Plugins, c++, dll',
                    ogUrl: 'https://yushisato.com/others/abcjs'
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