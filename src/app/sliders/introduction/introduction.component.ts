import { Component } from '@angular/core';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  faLinkedin = faLinkedin;

}
