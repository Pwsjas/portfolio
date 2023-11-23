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
      description: "My name is Philip Simpson, I've been interested in Web Development and Video Game Development my entire life, and have been focused on turning that interest into a career for the last few years.  This website serves as a collection of the web-based projects I'm most proud of (although certain private projects made in collaboration with others may be missing).  Thank you for checking out my website! All projects have github and / or website links, and my email / github can be found at the top-right of the UI.  Feel free to contact me for any inquiries, work or otherwise. Have a great day!",
      skills: ['Javascript', 'Typescript', 'Angular', 'React', 'CSharp', 'Java', 'Ruby', 'PostgreSQL', 'HTML', 'CSS', 'NodeJS', 'Express', 'AWS', 'SASS', 'RubyOnRails', 'jQuery', 'Mocha', 'Jest', 'Cypress', 'Storybook']
    },
    cloudscapeChronicles: {
      id: 'cloudscapeChronicles',
      title: "Cloudscape Chronicles",
      description: "Cloudscape Chronicles is a website designed to advertise, fascilitate sales, and distribute information for the video game I have been developing in my spare time.  It was built using NextJS (React), was launched using AWS, and is supported on the back end by AWS SQL, and AWS SMS",
      images: ["https://github.com/Pwsjas/portfolio/blob/main/docs/main.png?raw=true","https://github.com/Pwsjas/portfolio/blob/main/docs/mechs.png?raw=true", "https://github.com/Pwsjas/portfolio/blob/main/docs/mail.png?raw=true"],
      skills: ['Typescript', 'React', 'AWS', 'NodeJS', 'PostgreSQL', 'SASS', 'HTML'],
      links: ['https://github.com/Pwsjas/gamesite', 'https://www.cloudscapechronicles.com']
    },
    tinyTactics: {
      id: 'tinyTactics',
      title: "Tiny Tactics",
      description: "Tiny Tactics is a tactical role playing strategy game made using Javascript and PhaserJS.  It was created as final project for Lighthouse Labs' bootcamp within a 2 week timeframe and features turn-based gameplay on an isometric grid.  Players control four characters on one of up to three different maps, facing off against a team of four enemies controlled by AI.  The game is currently unavailable online, but feel free to visit the Github and try it out!",
      images: ["https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img2.png","https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img1.png", "https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img3.png"],
      skills: ['Javascript', 'Phaser', 'NodeJS', 'Express', 'jQuery', 'CSS', 'HTML'],
      links: ['https://github.com/Pwsjas/tactics']
    },
    wowTracker: {
      id: 'wowTracker',
      title: "WoW Tracker",
      description: "WoW Tracker is a simple application used to track specific data relating to World of Warcraft characters.  It's main purpose is to allow players to track their Mythic+ progress, and compare their accomplishments to the requirements of the title awarded only to the top 0.1% of players.  It also allows players to track their friends' progress, and easily switch between viewing their own data, and their friends' data.  It was created with the Angular CLI and Typescript, and is fully available online at \"wowtracker.app\", on Github, or by clicking the link below (Note: The website is only functional when providing a World of Warcraft character, if you do not have one, feel free to use \"Pwsjas\", and \"Bleeding-Hollow\" as inputs to check it out!).",
      images: ["https://raw.githubusercontent.com/Pwsjas/wowtracker/main/app/docs/site.png","https://raw.githubusercontent.com/Pwsjas/wowtracker/main/app/docs/dungeons.png", "https://raw.githubusercontent.com/Pwsjas/wowtracker/main/app/docs/friends.png"],
      skills: ['Angular', 'Typescript', 'AWS', 'Express', 'SCSS', 'HTML'],
      links: ['https://github.com/Pwsjas/wowtracker', 'https://wowtracker.app/']
    },
    resourceWall: {
      id: 'resourceWall',
      title: "Resource Wall",
      description: "Resource Wall is an application which allows users to post and share various online resources. It was created within a one week timeframe for Lighthouse Labs' bootcamp midterm project, in collaboration with github.com/wescorner.  It is an extension of a browser's bookmarking feature, allowing resources to be shared with others, tagged with content types, rated, liked, and commented on.  Resources can be searched by tag, or by name.  The app also features user accounts, and password encryption.  Feel free to check it out on Github!",
      images: [],
      skills: ['Javascript', 'PostgreSQL', 'NodeJS', 'Express', 'jQuery', 'SASS', 'HTML'],
      links: ['https://github.com/wescorner/LHL-midterm-resource-wall']
    },
    scheduler: {
      id: 'scheduler',
      title: "Scheduler",
      description: "Scheduler is a single page React application created during Lighthouse Labs' bootcamp.  It's purpose is to allow students to create and schedule interviews with mentors (teachers).  It focuses on responsive design, and features seamlessly synchronized components (many interactions can be seen affecting various portions of the application at the same time).  Feel free to check it out on Github!",
      images: ["https://raw.githubusercontent.com/Pwsjas/scheduler/master/docs/Blank.png","https://raw.githubusercontent.com/Pwsjas/scheduler/master/docs/States.png"],
      skills: ['React', 'Javascript', 'Cypress', 'Storybook', 'Jest'],
      links: ['https://github.com/Pwsjas/scheduler']
    },
  };

  projects: any = [
    this.projectData.tinyTactics,
    this.projectData.cloudscapeChronicles,
    this.projectData.wowTracker,
    this.projectData.resourceWall,
    this.projectData.scheduler,
  ]

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedProject(project: string) {
    this.selectedProject = project;
  }

}
