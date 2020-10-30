import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleriesComponent } from './galleries.component';
import { GalleriesMainComponent } from './galleries-main/galleries-main.component';

import { Saikoku33Component } from './saikoku33/saikoku33.component';
import { ManholesComponent } from './manholes/manholes.component';
import { FirstTripComponent } from './first-trip/first-trip.component';


const routes: Routes = [
    {
        path: '', component: GalleriesComponent,
        children: [
            {
                path: '', component: GalleriesMainComponent,
                data: {
                    title: 'ギャラリー | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志のギャラリーのページです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Gellery,Blog',
                    ogUrl: 'https://youseegreen.github.io/Galleries/'
                }
            },
            { path: 'saikoku33', loadChildren: './saikoku33/saikoku33.module#Saikoku33Module' },
            { path: 'manholes', loadChildren: './manholes/manholes.module#ManholesModule' },
            {
                path: 'first-trip', component: FirstTripComponent,
                data: {
                    title: '18歳の18切符 | 佐藤 優志 (Yushi Sato)',
                    description: '初旅の思い出です。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,中国地方,18切符',
                    ogUrl: 'https://youseegreen.github.io/galleries/first-trip'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleriesRoutingModule { }