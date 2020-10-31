import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manholes-main',
  templateUrl: './manholes-main.component.html',
  styleUrls: ['./manholes-main.component.css']
})
export class ManholesMainComponent implements OnInit {

  manholes: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('data/manholes.json').subscribe(val => { this.manholes = val });
    console.log(this.manholes);
  }

}
