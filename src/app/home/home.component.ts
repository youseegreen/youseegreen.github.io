import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, // needed to apply css to innerhtml
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
