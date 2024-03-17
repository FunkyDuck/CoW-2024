import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import {FoodsService} from "../../services/foods.service";

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.scss']
})
export class GiveComponent implements AfterViewInit {
  private map: any;
  lat: any = null;
  lon: any = null;

  private initMap(): void {
    this.map = L.map('map-mini', {
      center: [ 50.83369767098071, 4.528767076882302 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.map.on('click', (e: any) =>{
      console.log(e.latlng)
      this.lat = e.latlng.lat;
      this.lon = e.latlng.lng;
    });

    tiles.addTo(this.map);
  }

  constructor(private _food: FoodsService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  sendOffer(): void {
    let name = (document.getElementById('name')as any).value;
    let description = (document.getElementById('description')as any).value;
    let food_category_id = (document.getElementById('food_category_id')as any).value;
    let diet = (document.getElementById('diet')as any).value;

    this._food.sendProduct({name: name, description: description, food_category_id: food_category_id, diet: diet, lat: this.lat, lon: this.lon}).subscribe(
      (res: any)=>{
        console.log(res);
      },
      (err: any)=>{
        console.error(err);
      }
    );
  }
}
