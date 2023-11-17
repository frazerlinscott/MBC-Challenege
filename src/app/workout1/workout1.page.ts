import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { EditWorkoutPage} from '../edit-workout/edit-workout.page';


@Component({
  selector: 'app-workout1',
  templateUrl: './workout1.page.html',
  styleUrls: ['./workout1.page.scss'],
})
export class Workout1Page implements OnInit {

  WorkoutData;
  Notes;
  Workout;
  index;


  savedWorkoutData; 
  updatedWorkoutList;

  displayWorkout=[];
  page;
  currentPage;

  WorkoutDatabase;
  workoutInfo;
  editedWorkout;
  USER_STORAGE_KEY= '';

constructor(private navParams:NavParams, private dataService: DataService, private modalController: ModalController, public alertController: AlertController) { 
    this.loadData();
  }
  
  ngOnInit() {
    this.USER_STORAGE_KEY = this.navParams.get('userStorage');
    console.log(this.USER_STORAGE_KEY)
  }

async loadData(){
  this.USER_STORAGE_KEY = this.navParams.get('userStorage');
  this.WorkoutDatabase = await this.dataService.getStorageDataNew(this.USER_STORAGE_KEY, 2);

    // console.log(this.WorkoutDatabase)
}

// navigation for to edit chosen workout // page workout index 
async edit(i:number){
    const editmodal = await this.modalController.create({
      component: EditWorkoutPage,
      componentProps: { 
        workout: this.WorkoutDatabase[i].name,
        notes:this.WorkoutDatabase[i].notes, 
        index:i,
        currentPage:this.page,
        }
    });

//navigate back from modal and set chosen workouts 
    editmodal.onDidDismiss()
      .then((retval) => {
        this.index=i;
        
        if (retval.data.workout != ""){
          this.WorkoutDatabase.splice(i, 1);
          this.WorkoutDatabase.push(
          {"page" : this.page,
          "name" : retval.data.workout,
          "notes" : retval.data.notes,
          })
        }
        
        this.editedWorkout = 
        {"page" : this.page,
        "name" : retval.data.workout,
        "notes" : retval.data.notes,
        };
        this.updateWorkoutItem(this.index, this.editedWorkout)
   });
     return editmodal.present();
  }

async updateWorkoutItem(index,editedWorkout){
    await this.dataService.updateStoargeItem(this.USER_STORAGE_KEY,index,editedWorkout)
 }


// add new workout to storage 
async addWorkout(){
  this.USER_STORAGE_KEY = this.navParams.get('userStorage');
  
    this.savedWorkoutData={"page":this.page,"name":this.Workout,"notes":this.Notes}

    this.workoutInfo = 
    {"page" : this.page,
    "name" : this.Workout,
    "notes" : this.Notes,
    };

    await this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 2, this.workoutInfo)
    this.loadData()
    this.closeModal()
  }


//delete chosen workout from storage 
  async deleteWorkout(index) {
    this.USER_STORAGE_KEY = this.navParams.get('userStorage');
    this.dataService.removeStorageItem(this.USER_STORAGE_KEY, 2, index);
    this.WorkoutDatabase.splice(index, 1);
  }

//close workout modal and navigate back to main page passing new workout 
  closeModal(){
    let workout1String = JSON.stringify(this.WorkoutDatabase)
    this.modalController.dismiss(workout1String)
  }
}
 