import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { DatePickerPluginInterface } from "@capacitor-community/date-picker";

const DatePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  firstname:string;
  lastname:string;
  weight;
  duration:any;
  date;
  todayDate;
  pickerIsHidden = true;
  inputIsHidden = true;

  calendarPicker=false;
  inputDuration=false;
  USER_STORAGE_KEY='';

  startDate;
  endDate;



  constructor(private activatedRoute: ActivatedRoute, private router:Router, private storage: Storage, private dataService: DataService) {

    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv
    console.log(this.USER_STORAGE_KEY)


//Get init data from storage - if stoarge is NULL - empty string  - if previously entered assign last entered data
    this.dataService.getStorageData(this.USER_STORAGE_KEY).then((val) => {
      // console.log(val)
      // console.log(val[0].length == 0)
      if (val[0].length == 0) { 
        this.firstname = "";
        this.lastname = "";
        this.weight = "";
        this.duration = "";
      } else {
        // console.log(val[0][val[0].length - 1].firstname)
        this.firstname = val[0][val[0].length - 1].firstname;
        this.lastname = val[0][val[0].length - 1].lastname;
        this.weight = val[0][val[0].length - 1].weight;
        this.duration = val[0][val[0].length - 1].duration;
        }
    }); 
  }

  showDatePicker(){
    this.calendarPicker = true;
    this.inputDuration = false;
    this.pickerIsHidden = false;
    this.inputIsHidden = true;
    // console.log(this.duration.value)
    
  }
  showDateInput(){
    this.inputDuration = true;
    this.calendarPicker = false;
    this.inputIsHidden = false;
    this.pickerIsHidden = true;
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }



// when button is clicked - get inputs and assign to varibles & add to storage 
  async btnClicked(){

    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv

    if (this.calendarPicker === true){
      let date2 = new Date();
      let date1 = new Date(this.date);
      this.endDate = date1
      this.startDate = date2
      // console.log(date1)
      // console.log(date2)
      let timeInMilisec = date1.getTime() - date2.getTime();
      let daysBetweenDates = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
      this.duration=daysBetweenDates
    } else {
      // let endDate = new Date();
      console.log(typeof(this.duration))
      var myCurrentDate=new Date();
      var myFutureDate=new Date(myCurrentDate);
      myFutureDate.setDate(myFutureDate.getDate()+ this.duration);//myFutureDate is now 8 days in the future
      console.log(myFutureDate)
      this.endDate=myFutureDate

    }

    let info = {
      initData: {
        firstname: this.firstname,
        lastname: this.lastname,
        weight: this.weight,
        duration: this.duration,
        username: this.USER_STORAGE_KEY,
        startDate: this.startDate,
        endDate: this.endDate
      }
    }


    await this.dataService.addStorageDataNew(this.USER_STORAGE_KEY, 0, info) 
    
    this.router.navigate(['main', this.USER_STORAGE_KEY])
  }

}
