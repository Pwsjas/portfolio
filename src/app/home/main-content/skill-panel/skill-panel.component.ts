import { Component, OnInit, Input } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faSquareJs, faJava, faHtml5, faCss3, faNodeJs, faReact, faAws, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  @Input() skill: string = '';
  faAngular = faAngular;

  constructor() {}

  ngOnInit(): void {

  }

}
