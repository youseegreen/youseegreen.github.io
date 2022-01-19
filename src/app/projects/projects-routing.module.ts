import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';

import { EH_PHFComponent } from './eh_phf/eh_phf.component';
import { fARFEELComponent } from './farfeel/farfeel.component';
import { Responsive_EHComponent } from './responsive_eh/responsive_eh.component';
import { DesktopHandComponent } from './desktophand/desktophand.component';
import { HugbotComponent } from './hugbot/hugbot.component';


const routes: Routes = [
    {
        path: '', component: ProjectsComponent,
        children: [
            {
                path: '', component: ProjectsMainComponent,
                data: {
                    title: 'プロジェクト | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志が関わっている研究プロジェクトです。',
                    keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,ExtendedHand,疑似触覚,fARFEEL,desktophand,hagbot',
                    ogUrl: 'https://youseegreen.github.io/projects/'
                }
            },
            {
                path: 'eh_phf', component: EH_PHFComponent,
                data: {
                    title: 'Pseudo-haptic feedback for ExtendedHand | 佐藤 優志 (Yushi Sato)',
                    description: '投影バーチャルハンドインタフェースに対する疑似触覚フィードバックの応用',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ExtendedHand,projected virtual hand,pseudo-hatpic feedback,tactile sensation',
                    ogUrl: 'https://youseegreen.github.io/projects/eh_phf'
                }
            },
            {
                path: 'farfeel', component: fARFEELComponent,
                data: {
                    title: 'fARFEEL | 佐藤 優志 (Yushi Sato)',
                    description: 'fARFEEL: Providing Haptic Sensation of Touched Objects Using Visuo-Haptic Feedback',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,fARFEEL,projected virtual hand,teleexistence,telepresence,haptic feedback,pseudo-haptic feedback',
                    ogUrl: 'https://youseegreen.github.io/projects/farfeel'
                }
            },
            {
                path: 'responsive_eh', component: Responsive_EHComponent,
                data: {
                    title: 'Responsive-ExtendedHand | 佐藤 優志 (Yushi Sato)',
                    description: 'Responsive-ExtendedHand : 投影バーチャルハンドの実物体接触に対して適切な視覚効果を付与するシステム',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Responsive-ExtendedHand,projected virtual hand,pseudo-hatpic feedback,deep learning',
                    ogUrl: 'https://youseegreen.github.io/projects/responsive_eh'
                }
            },
            {
                path: 'desktophand', component: DesktopHandComponent,
                data: {
                    title: 'DesktopHand | 佐藤 優志 (Yushi Sato)',
                    description: 'DesktopHand : デスクトップ画面上に表示したバーチャルハンドにより円滑なコミュニケーションを支援するシステム',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,DesktopHand,virtual Hand',
                    ogUrl: 'https://youseegreen.github.io/projects/desktophand'
                }
            },
            {
                path: 'hugbot', component: HugbotComponent,
                data: {
                    title: 'Hugbot | 佐藤 優志 (Yushi Sato)',
                    description: 'Hugbot : ハグインタラクションにおけるロボットの動き方によるコミュニケーション手法の調査',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Hugbot,hug interaction,emotion',
                    ogUrl: 'https://youseegreen.github.io/projects/hugbot'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }