import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDescriptionComponent } from './components/main-description/main-description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDescriptionComponent,
    ProjectsComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
