import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = ['Javascript', 'Typescript', 'Angular', 'React', 'CSharp', 'Java', 'Ruby', 'PostgreSQL', 'HTML', 'CSS', 'NodeJS', 'Express', 'AWS', 'SASS', 'RubyOnRails', 'jQuery', 'Mocha', 'Jest', 'Cypress', 'Storybook'];
  }
}
