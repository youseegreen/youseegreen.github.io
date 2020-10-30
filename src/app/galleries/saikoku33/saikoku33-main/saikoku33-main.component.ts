import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-saikoku33-main',
  templateUrl: './saikoku33-main.component.html',
  styleUrls: ['./saikoku33-main.component.css']
})


export class Saikoku33MainComponent implements OnInit {


  saikoku33: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('data/saikoku33.json').subscribe(val => { this.saikoku33 = val });
    console.log(this.saikoku33);
  }

}
