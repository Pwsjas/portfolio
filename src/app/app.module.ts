import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { ProjectsComponent } from './home/main-content/projects/projects.component';
import { SkillsComponent } from './home/main-content/skills/skills.component';
import { DescriptionComponent } from './home/main-content/description/description.component';
import { SkillPanelComponent } from './home/main-content/skill-panel/skill-panel.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    ProjectsComponent,
    SkillsComponent,
    DescriptionComponent,
    SkillPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
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
