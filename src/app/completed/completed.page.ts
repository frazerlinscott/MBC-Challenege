import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import { DataService } from '../services/data.service';
import { UserPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {

  initData;
  USER_STORAGE_KEY;
  currentPhoto;

  currentWorkout1;
  currentWorkout1Notes;

  currentWorkout2;
  currentWorkout2Notes;
  numDay;
  completedDayData;


  constructor(public photoService: PhotoService, private dataService: DataService, private navParams:NavParams, private modalController: ModalController) { }

  async ngOnInit() {
    this.USER_STORAGE_KEY = this.navParams.get('userStorage');
    this.completedDayData = this.navParams.get('data');

    console.log(this.USER_STORAGE_KEY);
    console.log(this.completedDayData.progressData);

    this.numDay = this.completedDayData.progressData.Day
    this.currentWorkout1 = this.completedDayData.progressData.Workout1
    this.currentWorkout2 = this.completedDayData.progressData.Workout2
    this.currentWorkout1Notes = this.completedDayData.progressData.NotesOne
    this.currentWorkout2Notes = this.completedDayData.progressData.NotesTwo

    await this.photoService.loadSaved(this.USER_STORAGE_KEY);
    this.currentPhoto = this.photoService.photos[0]

  };

  closeModal(){
    this.modalController.dismiss()
  }
}
