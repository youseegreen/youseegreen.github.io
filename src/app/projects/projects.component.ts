import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None, // needed to apply css to innerhtml
})

export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
