import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100vw)'}),
        animate('1000ms 200ms cubic-bezier(0.25, 1, 0.5, 1)', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate('1000ms 200ms cubic-bezier(0.5, 0, 0.75, 0)', style({transform: 'translateX(-100vw)'}))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({transform: 'translateX(100vw)'}),
        animate('1000ms 200ms cubic-bezier(0.25, 1, 0.5, 1)', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate('1000ms 200ms cubic-bezier(0.5, 0, 0.75, 0)', style({transform: 'translateX(100vw)'}))
      ])
    ]),
    trigger('slideInBottom', [
      transition(':enter', [
        style({transform: 'translateY(100vh)'}),
        animate('1000ms 200ms cubic-bezier(0.25, 1, 0.5, 1)', style({transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        animate('1000ms 200ms cubic-bezier(0.5, 0, 0.75, 0)', style({transform: 'translateY(100vh)'}))
      ])
    ]),
    trigger('slideInTop', [
      transition(':enter', [
        style({transform: 'translateY(-100vh)'}),
        animate('1000ms 200ms cubic-bezier(0.25, 1, 0.5, 1)', style({transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        animate('1000ms 200ms cubic-bezier(0.5, 0, 0.75, 0)', style({transform: 'translateY(-100vh)'}))
      ])
    ])
  ]
})

export class AppComponent {
  @ViewChild('main') mainPageReference!: ElementRef;

  welcomeVisible: boolean = false;
  introVisible: boolean = false;
  skillsVisible: boolean = false;
  linksVisible: boolean = false;
  projectVisible: boolean = false;

  selectedProject: string = 'welcome';

  projectData: any = {
    cloudscape: {
      thumbnail: "/assets/images/project-images/cc1.png",
      title: "Cloudscape Chronicles",
      description: "A full stack website built with NextJS (React) and Typescript, and deployed using AWS.  Providing users a glimpse into the world of Cloudscape Chronicles, a video game being developed by myself, using Godot Engine and C#.  The website itself provides users with information regarding the game's mechanics, visuals, and music, as well as the ability to sign up for a mailing list to stay up to date with any new developments.",
      skills: ['Typescript', 'React', 'AWS', 'DynamoDB', 'SCSS', 'NextJS', 'Express' ],
      links: ['https://github.com/Pwsjas/gamesite', 'https://www.cloudscapechronicles.com']
    },
    tinyTactics: {
      thumbnail: "https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img2.png",
      title: "Tiny Tactics",
      description: "Tiny Tactics is a tactical role playing strategy game made using Javascript and PhaserJS.  It was created as a final project for Lighthouse Labs' bootcamp within a 2 week timeframe and features turn-based gameplay on an isometric grid.  Players control four characters on one of three different maps, facing off against a team of four enemies controlled by AI.  The game is currently unavailable online, but feel free to visit the Github and try it out!",
      skills: ['Javascript', 'Phaser', 'NodeJS', 'Express', 'jQuery', 'CSS', 'HTML'],
      links: ['https://github.com/Pwsjas/tactics']
    },
    wowTracker: {
      thumbnail: "/assets/images/project-images/wt1.png",
      title: "WoW Tracker",
      description: "A single page app built with Angular and Typescript, and deployed using AWS, which allows World of Warcraft players to track their gameplay progression, and that of their friends all in one easy to navigate space.",
      skills: ['Angular', 'Typescript', 'AWS', 'Express', 'SCSS', 'HTML'],
      links: ['https://github.com/Pwsjas/wowtracker', 'https://wowtracker.app/']
    },
    resourceWall: {
      title: "Resource Wall",
      description: "Resource Wall is an application which allows users to post and share various online resources. It was created within a one week timeframe for Lighthouse Labs' bootcamp midterm project, in collaboration with github.com/wescorner.  It is an extension of a browser's bookmarking feature, allowing resources to be shared with others, tagged with content types, rated, liked, and commented on.  Resources can be searched by tag, or by name.  The app also features user accounts, and password encryption.  Feel free to check it out on Github!",
      skills: ['Javascript', 'PostgreSQL', 'NodeJS', 'Express', 'jQuery', 'SASS', 'HTML'],
      links: ['https://github.com/wescorner/LHL-midterm-resource-wall']
    },
    scheduler: {
      thumbnail: "https://raw.githubusercontent.com/Pwsjas/scheduler/master/docs/Blank.png",
      title: "Scheduler",
      description: "Scheduler is a single page React application created during Lighthouse Labs' bootcamp.  It's purpose is to allow students to create and schedule interviews with mentors (teachers).  It focuses on responsive design, and features seamlessly synchronized components (many interactions can be seen affecting various portions of the application at the same time).  Feel free to check it out on Github!",
      skills: ['React', 'Javascript', 'Cypress', 'Storybook', 'Jest'],
      links: ['https://github.com/Pwsjas/scheduler']
    },
  };

  projects = [
    this.projectData.cloudscape,
    this.projectData.wowTracker,
    this.projectData.scheduler,
    this.projectData.tinyTactics,
  ]

  ngAfterViewInit() {
    this.welcomeVisible = true;
    this.introVisible = true;
    this.skillsVisible = true;
    this.linksVisible = true;
    this.projectVisible = true;
    
    setTimeout(() => {
      this.mainPageReference.nativeElement.style.overflow = "auto";
    }, 1000);
  }

  title = 'portfolio';
}
