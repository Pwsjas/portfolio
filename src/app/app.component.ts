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
    welcome: {
      skills: ['Javascript', 'Typescript', 'Angular', 'React', 'CSharp', 'Java', 'Ruby', 'PostgreSQL', 'HTML', 'CSS', 'NodeJS', 'Express', 'AWS', 'SASS', 'RubyOnRails', 'jQuery', 'Mocha', 'Jest', 'Cypress', 'Storybook']
    },
    cloudscape: {
      skills: ['Typescript', 'React', 'AWS', 'DynamoDB', 'SCSS', 'NextJS' ]
    },
  };

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
