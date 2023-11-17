import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-day',
  templateUrl: './view-day.page.html',
  styleUrls: ['./view-day.page.scss'],
})
export class ViewDayPage implements OnInit {

  initData;
  USER_STORAGE_KEY;
  currentPhoto;

  currentWorkout1;
  currentWorkout1Notes;

  currentWorkout2;
  currentWorkout2Notes;
  numDay;



  constructor(private dataService: DataService, private navParams:NavParams, private modalController: ModalController) { }

  async ngOnInit() {
    this.initData = this.navParams.get('data');
    this.USER_STORAGE_KEY=this.initData.storageKey
    this.numDay=this.initData.day
    this.currentPhoto = this.navParams.get('photo');

    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      // console.log(this.currentPhoto.day)
      let getDayData = (val[1][this.currentPhoto.day-1])
      this.currentWorkout1 = getDayData.progressData.Workout1
      this.currentWorkout2 = getDayData.progressData.Workout2
      this.currentWorkout1Notes = getDayData.progressData.NotesOne
      this.currentWorkout2Notes = getDayData.progressData.NotesTwo


    })
  }

  closeModal(){
    this.modalController.dismiss()
  }
}
