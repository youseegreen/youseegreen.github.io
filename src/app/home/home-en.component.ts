import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, // needed to apply css to innerhtml
})
export class HomeEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
