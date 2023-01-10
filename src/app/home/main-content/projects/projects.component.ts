import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Output() selectedProject = new EventEmitter<string>();
  
  tinyTactics: string = 'tinyTactics';
  wowTracker: string = 'wowTracker';
  resourceWall: string = 'resourceWall';
  scheduler: string = 'scheduler';
  welcome: string = 'welcome';

  constructor() { }

  ngOnInit(): void {
  }

  selectProject(project: string) {
    this.selectedProject.emit(project);
  }

}
