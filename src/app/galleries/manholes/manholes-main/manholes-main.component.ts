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
    // this.http.get<any[]>('data/manholes.json').subscribe(val => { this.manholes = val });

    // GeoJSONファイルを読み込む
    this.http.get('data/manholes.geojson').subscribe((geojson: any) => {
      // features 配列からデータを抽出
      this.manholes = geojson.features.map((feature: any) => ({
        area: feature.properties.area, // プロパティ名を調整
        prefecture: feature.properties.prefecture,
        city: feature.properties.city,
        photoName: feature.properties.photoName,
        coordinates: feature.geometry.coordinates,
      }));
    });

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

