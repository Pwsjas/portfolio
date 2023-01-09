import { Component, OnInit, Input } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  @Input() skill: string = '';

  constructor() {}

  ngOnInit(): void {

  }

}
