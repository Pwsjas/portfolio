import { Component } from '@angular/core';
import { faFile, } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  faFile = faFile;
  faGithub = faGithub;

  projectData: any = {
    cloudscape: {
      skills: ['Typescript', 'React', 'AWS', 'DynamoDB', 'SCSS', 'NextJS' ],
      links: ['https://github.com/Pwsjas/gamesite', 'https://www.cloudscapechronicles.com']
    },
  };

}
