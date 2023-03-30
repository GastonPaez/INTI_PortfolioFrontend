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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';



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
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    DevExperienceComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent
    
]
})
export class AppModule { }
