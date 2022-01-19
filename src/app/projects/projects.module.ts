import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { EH_PHFComponent } from './eh_phf/eh_phf.component';
import { fARFEELComponent } from './farfeel/farfeel.component';
import { Responsive_EHComponent } from './responsive_eh/responsive_eh.component';
import { DesktopHandComponent } from './desktophand/desktophand.component';
import { HugbotComponent } from './hugbot/hugbot.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsMainComponent,
        EH_PHFComponent,
        fARFEELComponent,
        Responsive_EHComponent,
        DesktopHandComponent,
        HugbotComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
    ]
})
export class ProjectsModule { }