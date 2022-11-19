import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Saikoku33Component } from './saikoku33.component';

import { Saikoku33MainComponent } from './saikoku33-main/saikoku33-main.component';

import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';
import { T9Component } from './t9/t9.component';
import { T10Component } from './t10/t10.component';
import { T11Component } from './t11/t11.component';
import { T12Component } from './t12/t12.component';
import { T13Component } from './t13/t13.component';
import { T14Component } from './t14/t14.component';
import { T15Component } from './t15/t15.component';
import { T16Component } from './t16/t16.component';
import { T17Component } from './t17/t17.component';
import { T18Component } from './t18/t18.component';
import { T19Component } from './t19/t19.component';
import { T20Component } from './t20/t20.component';
import { T21Component } from './t21/t21.component';
import { T22Component } from './t22/t22.component';
import { T23Component } from './t23/t23.component';
import { T24Component } from './t24/t24.component';
import { T25Component } from './t25/t25.component';
import { T26Component } from './t26/t26.component';
import { T27Component } from './t27/t27.component';
import { T28Component } from './t28/t28.component';
import { T29Component } from './t29/t29.component';
import { T30Component } from './t30/t30.component';
import { T31Component } from './t31/t31.component';
import { T32Component } from './t32/t32.component';
import { T33Component } from './t33/t33.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';




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
            {
                path: 't2', component: T2Component,
                data: {
                    title: '第二番　紀三井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二番寺 紀三井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,紀三井寺,金剛宝寺,和歌山県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t2/'
                }
            },
            {
                path: 't3', component: T3Component,
                data: {
                    title: '第三番　粉河寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 三番寺 粉河寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,粉河寺,和歌山県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t3/'
                }
            },
            {
                path: 't4', component: T4Component,
                data: {
                    title: '第四番　施福寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 四番寺 施福寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,施福寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t4/'
                }
            },
            {
                path: 't5', component: T5Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't6', component: T6Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't7', component: T7Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't8', component: T8Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't9', component: T9Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't10', component: T10Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't11', component: T11Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't12', component: T12Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't13', component: T13Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't14', component: T14Component,
                data: {
                    title: '第五番　葛井寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 五番寺 葛井寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,葛井寺,藤井寺,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t5/'
                }
            },
            {
                path: 't15', component: T15Component,
                data: {
                    title: '第十五番　今熊野観音寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 十五番寺 今熊野観音寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,今熊野観音寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t15/'
                }
            },
            {
                path: 't16', component: T16Component,
                data: {
                    title: '第十六番　清水寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 十六番寺 清水寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,清水寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t16/'
                }
            },
            {
                path: 't17', component: T17Component,
                data: {
                    title: '第十七番　六波羅蜜寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 十七番寺 六波羅蜜寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,六波羅蜜寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t17/'
                }
            },
            {
                path: 't18', component: T18Component,
                data: {
                    title: '第十八番　六角堂 頂法寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 十八番寺 六角堂に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,六角堂,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t18/'
                }
            },

            {
                path: 't19', component: T19Component,
                data: {
                    title: '第十九番　革堂 行願寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 十九番寺 行願寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,行願寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t19/'
                }
            },
            {
                path: 't20', component: T20Component,
                data: {
                    title: '第二十番　善峯寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十番寺 善峯寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,善峯寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t20/'
                }
            },
            {
                path: 't21', component: T21Component,
                data: {
                    title: '第二十一番　穴太寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十一番寺 穴太寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,穴太寺,亀岡市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t21/'
                }
            },
            {
                path: 't22', component: T22Component,
                data: {
                    title: '第二十二番　総持寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十二番寺 総持寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,総持寺,茨木市,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t22/'
                }
            },
            {
                path: 't23', component: T23Component,
                data: {
                    title: '第二十三番　勝尾寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十三番寺 勝尾寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,勝尾寺,箕面市,大阪府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t23/'
                }
            },
            {
                path: 't24', component: T24Component,
                data: {
                    title: '第二十四番　中山寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十四番寺 中山寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,中山寺,宝塚市,兵庫県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t24/'
                }
            },
            {
                path: 't25', component: T25Component,
                data: {
                    title: '第二十五番　播州清水寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十五番寺 播州清水寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,播州清水寺,加東市,兵庫県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t25/'
                }
            },
            {
                path: 't26', component: T26Component,
                data: {
                    title: '第二十六番　一乗寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十六番寺 一乗寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,一乗寺,加西市,兵庫県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t26/'
                }
            },
            {
                path: 't27', component: T27Component,
                data: {
                    title: '第二十七番　圓教寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十七番寺 圓教寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,圓教寺,姫路市,兵庫県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t27/'
                }
            },
            {
                path: 't28', component: T28Component,
                data: {
                    title: '第二十八番　成相寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十八番寺 成相寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,成相寺,宮津市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t28/'
                }
            },
            {
                path: 't29', component: T29Component,
                data: {
                    title: '第二十九番　松尾寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 二十九番寺 松尾寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,松尾寺,舞鶴市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t29/'
                }
            },
            {
                path: 't30', component: T30Component,
                data: {
                    title: '第三十番　宝厳寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 三十番寺 宝厳寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,宝厳寺,びわ町,滋賀県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t30/'
                }
            },
            {
                path: 't31', component: T31Component,
                data: {
                    title: '第三十一番　長命寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 三十一番寺 長命寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,長命寺,近江八幡市,滋賀県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t31/'
                }
            },
            {
                path: 't32', component: T32Component,
                data: {
                    title: '第三十二番　観音正寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 三十二番寺 観音正寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,観音正寺,近江八幡市,滋賀県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t32/'
                }
            },
            {
                path: 't33', component: T33Component,
                data: {
                    title: '第三十三番　華厳寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 三十三番寺 華厳寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,華厳寺,揖斐川町,岐阜県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/t33/'
                }
            },
            {
                path: 'b1', component: B1Component,
                data: {
                    title: '番外札所一番　花山院菩提寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 番外札所一番寺 花山院菩提寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,花山院菩提寺,三田市,兵庫県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/b1/'
                }
            },
            {
                path: 'b2', component: B2Component,
                data: {
                    title: '番外札所二番　元慶寺 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 番外札所二番寺 元慶寺に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,元慶寺,京都市,京都府',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/b2/'
                }
            },
            {
                path: 'b3', component: B3Component,
                data: {
                    title: '番外札所三番　法起院 | 佐藤 優志 (Yushi Sato)',
                    description: '西国三十三か所 番外札所三番寺 法起院に訪問しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,西国三十三,法起院,桜井市,奈良県',
                    ogUrl: 'https://youseegreen.github.io/galleries/saikoku33/b3/'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Saikoku33RoutingModule { }