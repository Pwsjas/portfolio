import { Component } from '@angular/core';
import { faEnvelope, faFile, faP, faW, faS } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
}
