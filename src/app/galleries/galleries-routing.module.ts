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
                    title: 'その他 | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志のギャラリーのページです。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Tips,Blog',
                    ogUrl: 'https://youseegreen.github.io/Galleries/'
                }
            },
            { path: 'saikoku33', loadChildren: './saikoku33/saikoku33.module#Saikoku33Module' },
            { path: 'manholes', loadChildren: './manholes/manholes.module#ManholesModule' },
            {
                path: 'first-trip', component: FirstTripComponent,
                data: {
                    title: 'abcjsを用いて、ウェブページで楽譜を表示してみる | 佐藤 優志 (Yushi Sato)',
                    description: 'abcjsを用いて、ウェブページで楽譜を表示してみる',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Unity, RealSense, Native Plugins, c++, dll',
                    ogUrl: 'https://youseegreen.github.io/galleries/abcjs'
                }
            },
            { path: 'galleries/saikoku33', loadChildren: './saikoku33/saikoku33.module#Saikoku33Module' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleriesRoutingModule { }