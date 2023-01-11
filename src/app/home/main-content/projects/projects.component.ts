import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: any;
  @Output() selectedProject = new EventEmitter<string>();
  
  welcome: string = 'welcome';

  selected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectProject(project: string) {
    this.selectedProject.emit(project);
    this.selected = 'selected';
  }

}
