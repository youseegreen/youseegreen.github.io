import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsModule } from './projects/projects.module';
import { PublicationsComponent } from './publications/publications.component';
import { GalleriesModule } from './galleries/galleries.module';
import { OthersModule } from './others/others.module';
import { MaterialsComponent } from './materials/materials.component';

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
    path: 'profile', component: ProfileComponent,
    data: {
      title: 'プロフィール | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志のプロフィールです。',
      keyword: '佐藤優志,youseegreen,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室,SENS,ExtendedHand,Humanware,ヒューマンウェア',
      ogUrl: 'https://yushisato.com/profile'
    }
  },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(x => x.ProjectsModule) },
  {
    path: 'publications', component: PublicationsComponent,
    data: {
      title: '発表業績 | 佐藤 優志 (Yushi Sato)',
      description: '佐藤優志の発表業績です。',
      keyword: '佐藤優志,Yushi Sato,大阪大学,基礎工学研究科,佐藤研究室',
      ogUrl: 'https://yushisato.com/publications'
    }
  },
  { path: 'galleries', loadChildren: () => import('./galleries/galleries.module').then(x => x.GalleriesModule) },
  { path: 'others', loadChildren: () => import('./others/others.module').then(x => x.OthersModule) },
  { path: 'materials', component: MaterialsComponent, 
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
