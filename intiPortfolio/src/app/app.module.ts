import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProfileComponent } from './profile/profile.component';

import { DevExperienceComponent } from './dev-experience/dev-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ProfileComponent,
    DevExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ProfileComponent,
    DevExperienceComponent
]
})
export class AppModule { }
