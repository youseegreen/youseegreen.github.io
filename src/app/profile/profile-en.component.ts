import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-en',
  templateUrl: './profile-en.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileEnComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('profile-en called: ' + this.router.url);
  }
}
