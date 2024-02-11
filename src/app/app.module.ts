import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { ProjectsComponent } from './home/main-content/projects/projects.component';
import { SkillsComponent } from './home/main-content/skills/skills.component';
import { DescriptionComponent } from './home/main-content/description/description.component';
import { SkillPanelComponent } from './home/main-content/skill-panel/skill-panel.component';
import { WelcomeComponent } from './sliders/welcome/welcome.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { ImagePopupComponent } from './home/main-content/image-popup/image-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionComponent } from './sliders/introduction/introduction.component';
import { LinksComponent } from './sliders/links/links.component';
import { SocialsComponent } from './static/socials/socials.component';
import { ProjectComponent } from './sliders/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    ProjectsComponent,
    SkillsComponent,
    DescriptionComponent,
    SkillPanelComponent,
    ImagePopupComponent,
    WelcomeComponent,
    IntroductionComponent,
    LinksComponent,
    SocialsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngular
    );
  }
}
