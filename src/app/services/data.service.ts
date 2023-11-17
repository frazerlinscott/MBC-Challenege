import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

const PROGRESS_KEY= 'ProgressData';
const WORKOUT_KEY= 'WorkoutData';
const INIT_KEY = 'InitData'
const KEY = "AppStorage"
const LOGIN_KEY = "LoginStorage"

@Injectable({
  providedIn: 'root'
})

export class DataService {

  initData=[];
  progressData=[];
  workoutData=[];
  loginData=[];
  progressPictures=[];

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    this.storage.create();
  }

//--------------------------------------------------------------------

//--------------------------------------------------------------------

//--------------------------------------------------------------------

async getStorageDataNew(key, index){
  const storedData = await this.storage.get(key) || [];
  return storedData[index]
}


async getStorageData(key){
  // console.log(key)
  return this.storage.get(key) || [];
}

async addStorageDataNew(key, index, item){
  const storedData = await this.storage.get(key) || [];
  // console.log(storedData)
  storedData[index].push(item);
  // console.log(storedData)
  return this.storage.set(key, storedData)
}

async addUserStorage(item){
  const storedData = await this.storage.get(LOGIN_KEY) || [];
  storedData.push(item);
  return this.storage.set(LOGIN_KEY, storedData)
}

async createUser(key, item){

    const newStorage = await this.storage.get(key) || [];
    if (newStorage.length == 0){
      newStorage.push(this.initData);
      newStorage.push(this.progressData);
      newStorage.push(this.workoutData);
      newStorage.push(this.loginData);
      newStorage.push(this.progressPictures);

      newStorage[3].splice(0,1);

      newStorage[3].push(item)
      return this.storage.set(key, newStorage)
    }

}


async removeStorageItem(key, index, item) {
  const storedData = await this.storage.get(key) || [];
  storedData[index].splice(item, 1);
  return this.storage.set(key, storedData);
}

async updateStoargeItem(key, index, item) {
  const storedData = await this.storage.get(key) || [];
  
  if (item.name != ""){
    storedData[2].splice(index, 1);
    storedData[2].push(item)
  }
  return this.storage.set(key, storedData);

}
}


