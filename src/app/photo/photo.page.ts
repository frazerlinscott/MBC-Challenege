import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import {ModalController, NavParams } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDayPage } from "../view-day/view-day.page"

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  photoInfo;
  CamBtnIsHidden=false
  SaveBtnIsHidden=true
  PHOTO_STORAGE_KEY='';
  numDay;
  allPhotoData

  constructor(private modalController:ModalController, private router: Router, private activatedRoute: ActivatedRoute, public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    this.photoInfo = this.activatedRoute.snapshot.paramMap.get("id")
    this.allPhotoData = JSON.parse(this.photoInfo)

    this.PHOTO_STORAGE_KEY = this.allPhotoData.storageKey
    this.numDay = this.allPhotoData.day
    console.log(this.PHOTO_STORAGE_KEY)
    this.CamBtnIsHidden=false
    this.SaveBtnIsHidden=true
    await this.photoService.loadSaved(this.PHOTO_STORAGE_KEY);
  }



  savePhoto(){
    this.photoService.addNewToGallery(this.numDay, this.PHOTO_STORAGE_KEY)
    this.CamBtnIsHidden=true
    this.SaveBtnIsHidden=false
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'View',
          role: 'view',
          icon: 'eye',
          handler: () => {
            this.presentDayModel(photo)
          }
        }, 
        {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position, this.PHOTO_STORAGE_KEY);
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

  async presentDayModel(photo){
    const modal = await this.modalController.create({
      component: ViewDayPage, 
      componentProps: {data: this.allPhotoData, photo: photo}
    });
    modal.onDidDismiss();
    return modal.present();
  }
}
