import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  skills : Skill[] = [
    {logo: 'fab fa-angular text-6xl text-red-500 mb-4', name: 'Angular'},
    {logo: 'fab fa-html5 text-6xl text-[#E34F26] mb-4', name: 'HTML'},
    {logo: 'fab fa-css3-alt text-6xl text-[#1572B6] mb-4', name: 'CSS'},
    {logo: 'fab fa-js text-6xl text-[#F7DF1E] mb-4', name: 'JavaScript'},
    {logo: 'fa-brands fa-bootstrap text-6xl text-purple-800 mb-4', name: 'Bootstrap'},
    {logo: 'fab fa-css3-alt text-6xl text-[#1572B6] mb-4', name: 'Tailwind'},
    {logo: 'fab fa-html5 text-6xl text-[#E34F26] mb-4', name: 'Jquery'},
    {logo: 'fa-brands fa-github text-6xl text-black mb-4', name: 'GitHub'},
  ]
}
