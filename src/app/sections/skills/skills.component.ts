import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SkillsService } from '../../core/services/skills/skills.service';
import { Skill } from '../../core/models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private _SkillsService:SkillsService){}
  skillsArr! : Skill[]
  ngOnInit(): void{
    console.log(this._SkillsService.skills);
    this.skillsArr = this._SkillsService.skills;
  }
}
