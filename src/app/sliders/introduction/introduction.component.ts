import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  selectedProject: string = 'welcome';


  projectData: any = {
    welcome: {
      title: "Hello!",
      description: "My name is Philip Simpson, I've been interested in Web Development and Video Game Development my entire life, and have been focused on turning that interest into a career for the last few years.  This website serves as a collection of the web-based projects I'm most proud of (although certain private projects made in collaboration with others may be missing).  Thank you for checking out my website! All projects have github and / or website links, and my email / github can be found at the top-right of the UI.  Feel free to contact me for any inquiries, work or otherwise. Have a great day!",
      skills: ['Javascript', 'Typescript', 'Angular', 'React', 'CSharp', 'Java', 'Ruby', 'PostgreSQL', 'HTML', 'CSS', 'NodeJS', 'Express', 'AWS', 'SASS', 'RubyOnRails', 'jQuery', 'Mocha', 'Jest', 'Cypress', 'Storybook']
    },
  };
}
