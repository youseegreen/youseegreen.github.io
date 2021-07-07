import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';

import { EH_PHFComponent } from './eh_phf/eh_phf.component';
import { fARFEELComponent } from './farfeel/farfeel.component';
import { Responsive_EHComponent } from './responsive_eh/responsive_eh.component';
import { DesktopHandComponent } from './desktophand/desktophand.component';
import { HagbotComponent } from './hagbot/hagbot.component';


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
                    title: 'シェッフェの一対比較法の浦の変法の元論文について | 佐藤 優志 (Yushi Sato)',
                    description: 'シェッフェの一対比較法の浦の変法の元論文について。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,シェッフェの一対比較法,浦の変法,参考文献',
                    ogUrl: 'https://youseegreen.github.io/projects/eh_phf'
                }
            },
            {
                path: 'farfeel', component: fARFEELComponent,
                data: {
                    title: 'ぷよべ～す（ぷよ譜生成ソフト）の公開 | 佐藤 優志 (Yushi Sato)',
                    description: 'ぷよぷよの対戦動画からぷよ譜を自動生成するソフトを公開しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ぷよぷよ,ぷよ譜,ぷよぷよクロニクル,c++,OpenCV',
                    ogUrl: 'https://youseegreen.github.io/projects/farfeel'
                }
            },
            {
                path: 'responsive_eh', component: Responsive_EHComponent,
                data: {
                    title: 'ぷよべ～す（ぷよ譜生成ソフト）の公開 | 佐藤 優志 (Yushi Sato)',
                    description: 'ぷよぷよの対戦動画からぷよ譜を自動生成するソフトを公開しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ぷよぷよ,ぷよ譜,ぷよぷよクロニクル,c++,OpenCV',
                    ogUrl: 'https://youseegreen.github.io/projects/responsive_eh'
                }
            },
            {
                path: 'desktophand', component: DesktopHandComponent,
                data: {
                    title: 'ぷよべ～す（ぷよ譜生成ソフト）の公開 | 佐藤 優志 (Yushi Sato)',
                    description: 'ぷよぷよの対戦動画からぷよ譜を自動生成するソフトを公開しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ぷよぷよ,ぷよ譜,ぷよぷよクロニクル,c++,OpenCV',
                    ogUrl: 'https://youseegreen.github.io/projects/desktophand'
                }
            },
            {
                path: 'hagbot', component: HagbotComponent,
                data: {
                    title: 'ぷよべ～す（ぷよ譜生成ソフト）の公開 | 佐藤 優志 (Yushi Sato)',
                    description: 'ぷよぷよの対戦動画からぷよ譜を自動生成するソフトを公開しました。',
                    keyword: '佐藤優志,youseegreen,Yushi Sato,ぷよぷよ,ぷよ譜,ぷよぷよクロニクル,c++,OpenCV',
                    ogUrl: 'https://youseegreen.github.io/projects/hagbot'
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