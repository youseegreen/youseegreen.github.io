import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manholes-main',
  templateUrl: './manholes-main.component.html',
  styleUrls: ['./manholes-main.component.css']
})
export class ManholesMainComponent implements OnInit {
  areaText: String;
  prefectureText: String;
  manholes: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.areaText = '';
    this.prefectureText = '';
    this.http.get<any[]>('data/manholes.json').subscribe(val => { this.manholes = val });
  }

  viewArea(input: String) {
    this.areaText = input;
  }
  viewPrefecture(input: String) {
    this.prefectureText = input;
  }

  clearQuery() {
    this.areaText = '';
    this.prefectureText = '';
  }
}

