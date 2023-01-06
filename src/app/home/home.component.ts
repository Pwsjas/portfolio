import { Component, OnInit } from '@angular/core';
import { faEnvelope, faFile, faP, faW, faS } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faFile = faFile;
  faP = faP;
  faW = faW;
  faS = faS;

  constructor() { }

  ngOnInit(): void {
  }

}
