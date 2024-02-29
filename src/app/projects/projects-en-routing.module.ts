import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsMainEnComponent } from './projects-main/projects-main-en.component';

import { EH_PHFEnComponent } from './eh_phf/eh_phf-en.component';
import { fARFEELEnComponent } from './farfeel/farfeel-en.component';
import { Responsive_EHEnComponent } from './responsive_eh/responsive_eh-en.component';
import { DesktopHandEnComponent } from './desktophand/desktophand-en.component';
import { HugbotEnComponent } from './hugbot/hugbot-en.component';
import { SoundTexture_EHEnComponent } from './soundtexture_eh/soundtexture_eh-en.component';


const routes: Routes = [
    {
        path: '', component: ProjectsComponent,
        children: [
            {
                path: '', component: ProjectsMainEnComponent,
                data: {
                    title: 'プロジェクト | 佐藤 優志 (Yushi Sato)',
                    description: '佐藤優志が関わっている研究プロジェクトです。',
                    keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,ExtendedHand,疑似触覚,fARFEEL,desktophand,hagbot',
                    ogUrl: 'https://yushisato.com/projects/'
                }
            },
            {
                path: 'eh_phf', component: EH_PHFEnComponent,
                data: {
                    title: 'Pseudo-haptic feedback for ExtendedHand | 佐藤 優志 (Yushi Sato)',
                    description: '投影バーチャルハンドインタフェースに対する疑似触覚フィードバックの応用',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ExtendedHand,projected virtual hand,pseudo-hatpic feedback,tactile sensation',
                    ogUrl: 'https://yushisato.com/projects/eh_phf'
                }
            },
            {
                path: 'farfeel', component: fARFEELEnComponent,
                data: {
                    title: 'fARFEEL | 佐藤 優志 (Yushi Sato)',
                    description: 'fARFEEL: Providing Haptic Sensation of Touched Objects Using Visuo-Haptic Feedback',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,fARFEEL,projected virtual hand,teleexistence,telepresence,haptic feedback,pseudo-haptic feedback',
                    ogUrl: 'https://yushisato.com/projects/farfeel'
                }
            },
            {
                path: 'responsive_eh', component: Responsive_EHEnComponent,
                data: {
                    title: 'Responsive-ExtendedHand | 佐藤 優志 (Yushi Sato)',
                    description: 'Responsive-ExtendedHand : 投影バーチャルハンドの実物体接触に対して適切な視覚効果を付与するシステム',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Responsive-ExtendedHand,projected virtual hand,pseudo-hatpic feedback,deep learning',
                    ogUrl: 'https://yushisato.com/en/projects/responsive_eh'
                }
            },
            {
                path: 'desktophand', component: DesktopHandEnComponent,
                data: {
                    title: 'DesktopHand | 佐藤 優志 (Yushi Sato)',
                    description: 'DesktopHand : デスクトップ画面上に表示したバーチャルハンドにより円滑なコミュニケーションを支援するシステム',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,DesktopHand,virtual Hand',
                    ogUrl: 'https://yushisato.com/projects/desktophand'
                }
            },
            {
                path: 'soundtexture_eh', component: SoundTexture_EHEnComponent,
                data: {
                    title: 'Sound Texture ExtendedHand | 佐藤 優志 (Yushi Sato)',
                    description: 'TBA',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ExtendedHand,sound texture,cross-modal effect',
                    ogUrl: 'https://yushisato.com/projects/soundtexture_eh'
                }
            },
            {
                path: 'hugbot', component: HugbotEnComponent,
                data: {
                    title: 'Hugbot | 佐藤 優志 (Yushi Sato)',
                    description: 'Hugbot : ハグインタラクションにおけるロボットの動き方によるコミュニケーション手法の調査',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,Hugbot,hug interaction,emotion',
                    ogUrl: 'https://yushisato.com/projects/hugbot'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsEnRoutingModule { }