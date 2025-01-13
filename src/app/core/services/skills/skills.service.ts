import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  skills : Skill[] = [
    {logo: 'fab fa-microsoft text-6xl text-blue-500 mb-4', name: 'C#'},
    {logo: 'fab fa-js text-6xl text-[#F7DF1E] mb-4', name: 'JavaScript'},
    {logo: 'fa-solid fa-database text-6xl text-blue-500 mb-4', name: 'TSQL'},
    {logo: 'fab fa-windows text-6xl text-blue-500 mb-4', name: '.Net Core'},
    {logo: 'fas fa-network-wired text-6xl text-red-500 mb-4', name: 'ASP.NET Web API'},
    {logo: 'fa-solid fa-code text-6xl text-red-500 mb-4', name: 'Entity Framework Core'},
    {logo: 'fas fa-database text-6xl text-blue-500 mb-4', name: 'LINQ'},
    {logo: 'fab fa-angular text-6xl text-red-500 mb-4', name: 'Angular'},
    {logo: 'fab fa-html5 text-6xl text-[#E34F26] mb-4', name: 'HTML'},
    {logo: 'fab fa-css3-alt text-6xl text-[#1572B6] mb-4', name: 'CSS'},
    {logo: 'fab fa-html5 text-6xl text-[#E34F26] mb-4', name: 'Jquery'},
    {logo: 'fa-brands fa-bootstrap text-6xl text-purple-800 mb-4', name: 'Bootstrap'},
    {logo: 'fab fa-css3-alt text-6xl text-[#1572B6] mb-4', name: 'Tailwind'},
    {logo: 'fa-brands fa-github text-6xl text-black mb-4', name: 'GitHub'},
  ]
}
