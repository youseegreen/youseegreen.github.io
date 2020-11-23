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
                    ogUrl: 'https://youseegreen.github.io/galleries/manholes/'
                }
            },
            {
                path: 'osaka', component: OsakaComponent,
                data: {
                    title: '大阪府のマンホール | 佐藤 優志 (Yushi Sato)',
                    description: '大阪府内のマンホールです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,大阪府,マンホール',
                    ogUrl: 'https://youseegreen.github.io/galleries/manholes/osaka'
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