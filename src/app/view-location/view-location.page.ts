import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.page.html',
  styleUrls: ['./view-location.page.scss'],
})
export class ViewLocationPage implements OnInit {

  data;

  currentGym;
  currentPhoto;
  currentAddress; 
  currentPhone;
  currentHours;

  constructor(private navParams:NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data)

 
    this.currentGym = this.data.alldata[this.data.id].name
    this.currentAddress = this.data.alldata[this.data.id].address
    this.currentPhone = this.data.alldata[this.data.id].phone
    this.currentHours = this.data.alldata[this.data.id].hours
    this.currentPhoto = this.data.alldata[this.data.id].photo


  }


  closeModal(){
    this.modalController.dismiss()
  }

}
