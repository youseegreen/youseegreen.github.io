import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
import 'leaflet.markercluster';

// Leaflet のデフォルトアイコンの画像パスを設定
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets//leaflet/images/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/images/marker-icon.png',
  shadowUrl: 'assets/leaflet/images/marker-shadow.png',
});

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();

    fetch('data/manholes.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        L.geoJSON(geojson, {
          filter: (feature) => {
            // 緯度経度が [0, 0] の場合は除外
            if (
              feature.geometry &&
              feature.geometry.coordinates &&
              feature.geometry.coordinates[0] === 0 &&
              feature.geometry.coordinates[1] === 0
            ) {
              return false;
            }
            return true;
          },
          onEachFeature: (feature, layer) => {
            // 条件を満たす場合のみポップアップを追加
            if (feature.properties.photoName) {
              const imageUrl = `images/galleries/manholes/${feature.properties.photoName}`;
              layer.bindPopup(
                `<img src="${imageUrl}" alt="Manhole" style="width:200px;">`
              );
            }
          },
        }).addTo(this.map!);
      });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [34.6927384, 135.4953597],
      zoom: 14,
    });
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this.map);
  }

  ngAfterViewInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
    // リサイズを強制
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  // private collectImages(feature: any): string[] {
  //   const images = [];
  //   images.push(`images/galleries/manholes/${feature.properties.photoName}`);

  //   // ここに他のロジックで同じ座標の写真を収集する処理を追加可能
  //   return images;
  // }

  // private createPopupContent(images: string[]): string {
  //   return `
  //     <div class="popup-content">
  //       <img id="popup-image" src="${images[0]}" style="width:200px;">
  //       <br>
  //       <button id="next-image">Next</button>
  //     </div>
  //   `;
  // }

  // private initImageSwitcher(images: string[]): void {
  //   let currentIndex = 0;
  //   const imageElement = document.getElementById('popup-image') as HTMLImageElement;
  //   const nextButton = document.getElementById('next-image') as HTMLButtonElement;

  //   if (nextButton && imageElement) {
  //     nextButton.onclick = () => {
  //       currentIndex = (currentIndex + 1) % images.length;
  //       imageElement.src = images[currentIndex];
  //     };
  //   }
  // }
}