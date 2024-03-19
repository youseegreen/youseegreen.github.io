import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeEnComponent } from './home/home-en.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEnComponent } from './profile/profile-en.component';
// import { ProjectsModule } from './projects/projects.module';
import { SoundTexture_EHComponent } from './projects/soundtexture_eh/soundtexture_eh.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationsEnComponent } from './publications/publications-en.component';
// import { GalleriesModule } from './galleries/galleries.module';
// import { OthersModule } from './others/others.module';
import { OthersMainEnComponent } from './others/others-main/others-main-en.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      title: '佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のホームページです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://yushisato.com/'
    }
  },
  {
    path: 'en', component: HomeEnComponent, pathMatch: 'full',
    data: {
      title: '佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のホームページです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://yushisato.com/'
    }
  },
  {
    path: 'profile', component: ProfileComponent, pathMatch: 'full',
    data: {
      title: 'プロフィール | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のプロフィールです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://yushisato.com/profile'
    }
  },
  {
    path: 'en/profile', component: ProfileEnComponent, pathMatch: 'full',
    data: {
      title: 'Profile | Yushi Sato', 
      description: '佐藤優志のプロフィールです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://yushisato.com/profile'      
    }
  },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(x => x.ProjectsModule) },
  { path: 'en/projects', loadChildren: () => import('./projects/projects-en.module').then(x => x.ProjectsEnModule) },
  {
    path: 'publications', component: PublicationsComponent, pathMatch: 'full',
    data: {
      title: '発表業績 | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志の発表業績です。',
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室',
      ogUrl: 'https://yushisato.com/publications'
    }
  },
  {
    path: 'en/publications', component: PublicationsEnComponent, pathMatch: 'full',
    data: {
      title: '発表業績 | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志の発表業績です。',
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室',
      ogUrl: 'https://yushisato.com/publications'
    }
  },
  { path: 'galleries', loadChildren: () => import('./galleries/galleries.module').then(x => x.GalleriesModule) },
  { path: 'others', loadChildren: () => import('./others/others.module').then(x => x.OthersModule) },
  { path: 'en/others', pathMatch: 'full', component: OthersMainEnComponent},
  { path: 'projects/soundtexture_eh', component: SoundTexture_EHComponent, 
    data: {
      title: 'Materials | Yushi Sato', 
      description: 'supplemental materials of work', 
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室',
      ogUrl: 'https://yushisato.com/materials'
    }
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
