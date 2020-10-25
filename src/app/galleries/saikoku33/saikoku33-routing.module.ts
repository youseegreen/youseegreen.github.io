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
                    description: '佐藤優志のその他のページです。',
                    keyword: '佐藤優志m ,youseegreen,Yushi Sato,Tips,Blog',
                    ogUrl: 'https://youseegreen.github.io/Saikoku33/'
                }
            },
            {
                path: 't1', component: T1Component,
                data: {
                    title: '一番寺 | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://youseegreen.github.io/Saikoku33/scheffe-ura-version'
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