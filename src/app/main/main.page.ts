// how to reload the page data when the back to main page
// when box is checked - pass 1 when not pass 0 
// add day function {day+1:{page data}} {day+2:{page data}} 
// change progress button and finish day button
// finish workshop wireframes to be assessed


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout1Page } from "../workout1/workout1.page";
import { CompletedPage } from "../completed/completed.page";
import { PhotoPage } from "../photo/photo.page";
import {ModalController } from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
 

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  
  duration;
  firstname;
  lastname;
  weight;
  USER_STORAGE_KEY= '';

  WorkoutOptions=[];

  WorkoutOneData="";
  WorkoutTwoData="";

  updatedWorkoutList;

  workoutOneSelected;
  workoutTwoSelected;

  selectedWorkoutOneNotes;
  selectedWorkoutTwoNotes;

  daySleep;
  dayWeight;
  pageInfo
  initDatabase=[];
  WorkoutDatabase;

  addDay;
  readingCheck;
  eatingCheck;
  waterCheck; 

  ReadingisChecked;
  EatingisChecked;
  DrinkingisChecked
  numDay;
  durationINT;
  photosDetailsStr;

  progressIndex = 1;

  PHOTO_STORAGE_KEY = '';

  startDate;
  endDate;

  completeBtnShown = false

  checklistsCount = 0; 
  

  

constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router, private modalController:ModalController, private storage: Storage) { 
    this.loadData(); // load data from stoarge 
    this.LoadNumDays()  // load number of days left calculated from duration 

  }

  ngOnInit() {
    this.loadInitData()
    // let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    // this.USER_STORAGE_KEY=infoRecv
    // console.log(this.USER_STORAGE_KEY)
}

async ImagePage(){
  let photoStorageKey = this.activatedRoute.snapshot.paramMap.get("id")
  let photosDetailsObj = {day: this.numDay, storageKey: photoStorageKey }
  this.photosDetailsStr = JSON.stringify(photosDetailsObj)
  // console.log(this.photosDetailsStr)
  this.router.navigate(['photo', this.photosDetailsStr])
  this.checklistsCount+=1 
}

// get init duration data and assignmnet numdays to display
  async LoadNumDays(){
    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv
    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      // console.log(val)
      if (val[1].length === 0) {  //no PROGRESS DATA
        this.numDay=1
      } else {
        this.numDay = (val[1].length+1)  //grab the last day of progress days and set to numDay
        // console.log(this.numDay)
      }
    })
  }


//load data from storage 
  async loadData(){
    // this.initDatabase = await this.dataService.getProgressData();
    // this.WorkoutDatabase = await this.dataService.getWorkoutData();
  }
 
//remove item from stoarge 
  // async removeItem(index){
  //   this.loadData();
  //   // this.dataService.removeProgressItem(index);
  //   this.initDatabase.splice(index, 1);
  // }

// present model when "edit" workout button is pressed 
  async presentModal1(page){
    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv
    const modal = await this.modalController.create({
      component: Workout1Page, 
      componentProps: {userStorage: this.USER_STORAGE_KEY, updatedWorkoutList:this.WorkoutOptions, page}
    });
    modal.onDidDismiss();
    return modal.present();
  }

// function to load selection list from storage 
  async loadSelection(){
    this.WorkoutDatabase = await this.dataService.getStorageData(this.USER_STORAGE_KEY);
    this.WorkoutOptions = this.WorkoutDatabase[2];
    this.checklistsCount+=1 
}


async loadInitData(){
  let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
  this.USER_STORAGE_KEY=infoRecv
  await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
    this.duration=val[0][val[0].length - 1].initData.duration
    this.firstname=val[0][val[0].length - 1].initData.firstname
    this.lastname=val[0][val[0].length - 1].initData.lastname
    this.weight=val[0][val[0].length - 1].initData.weight
    this.durationINT = parseInt(this.duration);

    this.startDate=val[0][val[0].length - 1].initData.startDate
    this.endDate=val[0][val[0].length - 1].initData.endDate

    // this.startDate = startDate.substring(0, 15);
    // this.endDate = endDate.substring(0, 15);

    console.log(this.startDate)
    console.log(this.endDate)
  });
}


// check if checkboxs are checked and assign varibles to add to storage 
checkChecked(e, location): void {
  var isChecked = e.currentTarget.checked;

  if (isChecked == false ){
    if (location === "reading"){
      this.readingCheck = 10;
    }
    if (location === "water"){
      this.waterCheck = 4;
    }
    if (location === "food"){
      this.eatingCheck = true;
      this.completeBtnShown=true
  }
}
}

async progressBtnClick(){
  this.router.navigate(['progress', this.USER_STORAGE_KEY])

}

//fucntion to add main page data to storage and navigate to progress page  
  async completeBtnClick(){
    this.completeBtnShown=false

    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {

      for (let i=0; i<val[2].length; i++){
        if (val[2][i].name === this.workoutOneSelected){
          this.selectedWorkoutOneNotes=val[2][i].notes
        }
        if (val[2][i].name === this.workoutTwoSelected){
          this.selectedWorkoutTwoNotes=val[2][i].notes
        }
      }
    });




//get all new inputs and assign to varibles 
    this.pageInfo = {
      progressData: {Day: this.numDay,
        firstname :this.firstname,
        lastname :this.lastname,
        Workout1 : this.workoutOneSelected,
        NotesOne : this.selectedWorkoutOneNotes,
        Workout2 : this.workoutTwoSelected,
        NotesTwo : this.selectedWorkoutTwoNotes,
        Sleep : this.daySleep,
        Weight : this.dayWeight,
        Picture : 1, 
        Reading : this.readingCheck, 
        Water : this.waterCheck,
        Eating : this.eatingCheck,
        initWeight : this.weight,
        Duration : this.duration
        }
    }
 

//add new inputs to storage  
    await this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 1, this.pageInfo) 

//calculate new "days left" to display on interface 
    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      if (val[1].length === 0) {
        let daysDiff = 0;
        this.duration = this.durationINT-daysDiff 
      } else {
        let daysDiff = val[1].length
        this.duration = this.durationINT-daysDiff
      }
    })

    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
        this.numDay = ((val[1][val[1].length - 1].progressData.Day)+=1)
    });

//reset inputs to allow user to input a new day 
    this.workoutOneSelected="";
    this.workoutTwoSelected="";
    this.daySleep="";
    this.dayWeight="";
    this.readingCheck=0;
    this.waterCheck=0;
    this.eatingCheck = false;


    this.ReadingisChecked = false; 
    this.EatingisChecked = false; 
    this.DrinkingisChecked = false; 

    this.loadData()

    const modal = await this.modalController.create({
      component: CompletedPage, 
      componentProps: {userStorage: this.USER_STORAGE_KEY, data: this.pageInfo}
    });
    modal.onDidDismiss();
    return modal.present();

  }

  signOut(){
    this.USER_STORAGE_KEY='';
    this.router.navigate(['pre-login'])
  }
}
