import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';
import { OthersMainComponent } from './others-main/others-main.component';
import { ScheffeUraVersionComponent } from './scheffe-ura-version/scheffe-ura-version.component';

const routes: Routes = [
    {
        path: '', component: OthersComponent,
        children: [
            {
                path: '', component: OthersMainComponent,
                data: {
                    title: 'Others | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志のその他のページです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Tips,Blog',
                    ogUrl: 'https://youseegreen.github.io/others/'
                }
            },
            {
                path: 'scheffe-ura-version', component: ScheffeUraVersionComponent,
                data: {
                    title: 'Scheffe\'s Ura version | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://youseegreen.github.io/others/scheffe-ura-version'
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