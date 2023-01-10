import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  selectedProject: string = 'welcome';

  projectData: any = {
    welcome: {
      title: "Hello!",
      description: "Hi! My name is Philip, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.",
      skills: ['Javascript', 'Typescript', 'Angular', 'React', 'CSharp', 'Java', 'Ruby', 'PostgreSQL', 'HTML', 'CSS', 'NodeJS', 'Express', 'AWS', 'SASS', 'RubyOnRails', 'jQuery', 'Mocha', 'Jest', 'Cypress', 'Storybook']
    },
    tinyTactics: {
      title: "Tiny Tactics",
      description: "Tiny Tactics is a project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.",
      images: ["https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img2.png","https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img1.png", "https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img3.png"],
      skills: ['Javascript', 'Phaser', 'NodeJS', 'Express', 'jQuery', 'CSS', 'HTML']
    },
    wowTracker: {
      title: "WoW Tracker",
      description: "WoW Tracker is a project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.",
      images: ["","", ""],
      skills: ['Angular', 'Typescript', 'AWS', 'Express', 'SCSS', 'HTML']
    },
    resourceWall: {
      title: "Resource Wall",
      description: "Resource Wall is a project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.",
      images: ["","", ""],
      skills: ['Javascript', 'PostgreSQL', 'NodeJS', 'Express', 'jQuery', 'SASS', 'HTML']
    },
    scheduler: {
      title: "Scheduler",
      description: "Scheduler is a project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.",
      images: ["","", ""],
      skills: ['React', 'Javascript', 'Cypress', 'Storybook', 'Jest']
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedProject(project: string) {
    this.selectedProject = project;
  }

}
