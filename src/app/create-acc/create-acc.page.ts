import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
 

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.page.html',
  styleUrls: ['./create-acc.page.scss'],
})
export class CreateAccPage implements OnInit {
username;
password;
loginInfo;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  async createLogin(){
    this.loginInfo = 
    {
    username : this.username,
    password : this.password,
    };

    await this.dataService.createUser(this.username, this.loginInfo)

    await this.dataService.addUserStorage(this.loginInfo)
    this.router.navigate(['home', this.username])

  }

  loginPage(){
    this.router.navigate(['login'])
  }

}
