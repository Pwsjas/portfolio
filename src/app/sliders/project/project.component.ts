import { Component, Input } from '@angular/core';
import { faFile, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: any;

  faGlobe = faGlobe;
  faGithub = faGithub;

}
