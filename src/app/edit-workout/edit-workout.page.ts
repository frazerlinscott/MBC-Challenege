import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.page.html',
  styleUrls: ['./edit-workout.page.scss'],
})
export class EditWorkoutPage implements OnInit {
  workout="";
  notes="";
  index;
  page;
  editedWorkout;
  USER_STORAGE_KEY='';

  constructor(private dataService: DataService, private navParams:NavParams,private modalController: ModalController) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.workout = this.navParams.get('workout');
    this.notes = this.navParams.get('notes');
    this.page = this.navParams.get('currentPage');


}

  async closeModal(){
    // this.editedWorkout = await this.dataService.getStorageDataNew(2);
    // let chosenINDEX = this.editedWorkout[this.index]
    // console.log(chosenINDEX)
    this.modalController.dismiss({workout:this.workout,notes:this.notes});
  }

}
