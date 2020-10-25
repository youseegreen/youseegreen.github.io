import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { GalleriesModule } from './galleries/galleries.module';
import { OthersModule } from './others/others.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      title: '佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のホームページです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://youseegreen.github.io/'
    }
  },
  {
    path: 'profile', component: ProfileComponent,
    data: {
      title: 'プロフィール | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のプロフィールです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://youseegreen.github.io/profile'
    }
  },
  {
    path: 'projects', component: ProjectsComponent,
    data: {
      title: 'プロジェクト | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志が関わっている研究プロジェクトです。',
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,ExtendedHand,疑似触覚,fARFEEL',
      ogUrl: 'https://youseegreen.github.io/projects'
    }
  },
  {
    path: 'publications', component: PublicationsComponent,
    data: {
      title: '発表業績 | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志の発表業績です。',
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室',
      ogUrl: 'https://youseegreen.github.io/publications'
    }
  },
  { path: 'galleries', loadChildren: './galleries/galleries.module#GalleriesModule' },
  { path: 'others', loadChildren: './others/others.module#OthersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
