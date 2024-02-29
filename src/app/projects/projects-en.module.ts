import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsEnRoutingModule } from './projects-en-routing.module';
import { ProjectsMainEnComponent } from './projects-main/projects-main-en.component';
import { EH_PHFEnComponent } from './eh_phf/eh_phf-en.component';
import { fARFEELEnComponent } from './farfeel/farfeel-en.component';
import { Responsive_EHEnComponent } from './responsive_eh/responsive_eh-en.component';
import { DesktopHandEnComponent } from './desktophand/desktophand-en.component';
import { HugbotEnComponent } from './hugbot/hugbot-en.component';
import { SoundTexture_EHEnComponent } from './soundtexture_eh/soundtexture_eh-en.component';

@NgModule({
    declarations: [
        ProjectsMainEnComponent,
        EH_PHFEnComponent,
        fARFEELEnComponent,
        Responsive_EHEnComponent,
        DesktopHandEnComponent,
        SoundTexture_EHEnComponent,
        HugbotEnComponent
    ],
    imports: [
        CommonModule,
        ProjectsEnRoutingModule,
    ]
})
export class ProjectsEnModule { }