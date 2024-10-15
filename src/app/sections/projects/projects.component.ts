import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../core/models/project';
import { ProjectsService } from '../../core/services/projects/projects.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private _ProjectsService: ProjectsService) { }

  projects !:Project[];
  
  ngOnInit(): void {
    this.projects = this._ProjectsService.projects
  }
}
