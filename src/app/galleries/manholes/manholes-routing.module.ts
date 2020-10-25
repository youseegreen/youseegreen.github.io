import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManholesComponent } from './manholes.component';
import { ManholesMainComponent } from './manholes-main/manholes-main.component';
import { OsakaComponent } from './osaka/osaka.component';

const routes: Routes = [
    {
        path: '', component: ManholesComponent,
        children: [
            {
                path: '', component: ManholesMainComponent,
                data: {
                    title: 'マンホール | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志のマンホールのページです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Tips,Blog',
                    ogUrl: 'https://youseegreen.github.io/Manholes/'
                }
            },
            {
                path: 'osaka', component: OsakaComponent,
                data: {
                    title: '大阪のマンホール | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://youseegreen.github.io/Manholes/scheffe-ura-version'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManholesRoutingModule { }