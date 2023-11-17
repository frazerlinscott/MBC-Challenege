import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalController } from "@ionic/angular";
import {ViewLocationPage} from "../view-location/view-location.page"


declare let google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  @ViewChild("map", {static: true}) mapElement: ElementRef;
  map: any;
  markers = [];

  nearbyGyms = {
    0:{name:"Southport Sharks Health + Fitness", address:"Musgrave Ave &, Olsen Ave, Southport QLD 4215", hours: "Closes 8PM", phone: "(07) 5591 5800", position: {lat: -27.965080, lng: 153.379950}, photo:"assets/imgs/sharks.png"},
    1:{name:"Snap Fitness 24/7 Parkwood", address:"250 Olsen Ave, Parkwood QLD 4214", hours: "Open 24 hours", phone: "0432 225 519", position: {lat: -27.955610, lng: 153.382460}, photo:"assets/imgs/snap.png"},
    2:{name:"Conquer HQ", address:"1/14 Mercantile Ct, Molendinar QLD 4214", hours: "Open 24 hours", phone: "0412 089 337", position: {lat: -27.965760, lng: 153.370450}, photo:"assets/imgs/Conquer.png"}, 
    3:{name:"World Gym Ashmore", address:"542 Olsen Ave, Ashmore QLD 4215", hours: "Open 24 hours", phone: " (07) 5564 6686", position: {lat: -27.976840, lng: 153.381050}, photo:"assets/imgs/world.jpeg"},
    4:{name:"Reebok Crossfit Gold Coast", address:"1/42 Olympic Cct, Southport QLD 4215", hours: "Closes 6:30PM", phone: "0481 761 073", position: {lat: -27.970630, lng: 153.392520}, photo:"assets/imgs/crossfit.jpg"},
    5:{name:"Inside Out Health Club", address:"76/122 Napper Rd, Parkwood QLD 4214", hours: "Closes 10PM", phone: "0411 123 115", position: {lat: -27.9519314, lng: 153.381069}, photo:"assets/imgs/inside.png"}
  }

  constructor(private router: Router, private modalController:ModalController) {}

  backMain(){
    this.router.navigate(['main'])
  }

  async openModal(data){
    const modal = await this.modalController.create({
      component: ViewLocationPage, 
      componentProps: {data}
    });
    modal.onDidDismiss();
    return modal.present();
  }

  

  ngOnInit(){

    console.log(this.nearbyGyms[0].position);
    let latLng = new google.maps.LatLng(-27.9628, 153.3814); 
    console.log(latLng);
    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP, position: this.map.getCenter()
      });
    let locationInfoWindow = new google.maps.InfoWindow({
      content: '<h4>Your Location</h4>'
      });
      locationInfoWindow.open(this.map, marker)

    for (let i = 0; i < 6; i++) {
        let pos = new google.maps.LatLng(this.nearbyGyms[i].position.lat, this.nearbyGyms[i].position.lng);
    
        this.markers[i] = new google.maps.Marker({
            position: pos,
            map: this.map,
            // icon: 'images/locred.png',
            name: this.nearbyGyms[i].name,
            id: i
        });

    google.maps.event.addListener(this.markers[i], 'click', () =>{
      locationInfoWindow.close()
      var infowindow = new google.maps.InfoWindow({
        content: ('<h1> '+ this.markers[i].name +'</h1>' +
        '<button class="map-btn" shape="round" id="tap">View Details</button>')
      });
      infowindow.open(this.map, this.markers[i]);

    google.maps.event.addListener(infowindow, 'domready', () => {
        document.getElementById('tap').addEventListener('click', () => {
          let currentData = {id: i, alldata: this.nearbyGyms}
          this.openModal(currentData)
          })
        });
      }); 
    }
  };
}
