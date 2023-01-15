import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { DevExperienceComponent } from './dev-experience/dev-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    DevExperienceComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    DevExperienceComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent
    
]
})
export class AppModule { }
