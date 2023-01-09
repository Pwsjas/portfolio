import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  projectImages: any = {
    tinyTactics: ["https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img2.png","https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img1.png", "https://raw.githubusercontent.com/Pwsjas/tactics/main/server/public/images/img3.png"],
    wowTracker: [],
    resourceWall: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
