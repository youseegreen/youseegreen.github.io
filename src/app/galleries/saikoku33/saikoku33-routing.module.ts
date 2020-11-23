import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Saikoku33Component } from './saikoku33.component';
import { Saikoku33MainComponent } from './saikoku33-main/saikoku33-main.component';
import { T1Component } from './t1/t1.component';

const routes: Routes = [
    {
        path: '', component: Saikoku33Component,
        children: [
            {
                path: '', component: Saikoku33MainComponent,
                data: {
                    title: '西国三十三めぐり | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所めぐりのログです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国,三十三,寺',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/'
                }
            },
            {
                path: 't1', component: T1Component,
                data: {
                    title: '第一番　青岸渡寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 一番寺 青岸渡寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,青岸渡寺,和歌山県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t1/'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Saikoku33RoutingModule { }