import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';  
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username;
  password;
  loginInfo
  incorrectDisplay=false
  

  loginDetails = {username: "Frazer", password: "Linscott"}

  storageLoginDetails;

  constructor(public alertCtrl: AlertController, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  async login(){

    let authentication =  await this.dataService.getStorageData("LoginStorage")
    console.log(authentication)
    authentication.forEach((value) => {
      if (this.username == value.username && this.password == value.password){
        this.router.navigate(['main', value.username])
        this.incorrectDisplay=false
      }
      if (this.username != value.username && this.password != value.password){

        this.incorrectDisplay=true
      }
    }); 
  }

  // async showAlert() {  
  //   const alert = await this.alertCtrl.create({  
  //     header: 'Incorrect Username or Password',  
  //     message: 'Please Try Again',  
  //     buttons: ['OK']  
  //   });  
  //   await alert.present();  
  //   const result = await alert.onDidDismiss();  
  //   console.log(result);  
  // }  

  signInPage(){
    this.router.navigate(['create-acc'])
  }

}
