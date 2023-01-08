import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faFile, faP, faW, faS } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  @Input() skill: string = '';

  faEnvelope = faEnvelope;
  faFile = faFile;
  faP = faP;
  faW = faW;
  faS = faS;
  faAngular = faAngular;

  constructor() {}

  ngOnInit(): void {

  }

}
