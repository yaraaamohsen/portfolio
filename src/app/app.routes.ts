import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ResumeComponent } from './sections/resume/resume.component';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch: "full"},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
