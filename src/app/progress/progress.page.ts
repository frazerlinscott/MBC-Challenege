import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

allWorkoutArray=[];
USER_STORAGE_KEY='';

allWorkoutNames=[]
allWorkoutFreq=[]

weightData=[]
weightDays=[]

sleepDays=[]
sleepData=[]

initWeight;

averSleep;
waterIntake;
readingCount;




@ViewChild('workoutCanvas', {static:true}) workoutCanvas;
workoutChart: any;


@ViewChild('weightCanvas', {static:true}) weightCanvas;
weightChart: any;

@ViewChild('sleepCanvas', {static:true}) sleepCanvas;
sleepChart: any;


workoutChartType= "pie";

workoutBackgroundColours=[
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255 ,0.2",
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(247,0,37,0.2",
  "rgba(255, 255, 255 ,0.2",
]
workoutBorderColours=[
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
  "rgba(247,0,37,1",
  "rgba(255, 255, 255 ,1",
]

weightChartType= "line";

weightBackgroundColours=[
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
  "rgba(247,0,37,0.2",
]
weightBorderColours=[
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
  "rgba(247,0,37,1",
]

sleepChartType= "bar";

sleepBackgroundColours=[
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
  "rgba(255, 255, 255,0.2",
]
sleepBorderColours=[
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",
  "rgba(255, 255, 255 ,1",

]

workoutChartConfig={
  type: this.workoutChartType,
  data: {
    labels: this.allWorkoutNames,
    datasets: [{
      label: "Workout outs",
      data: this.allWorkoutFreq,
      backgroundColor: this.workoutBackgroundColours,
      borderColor: this.workoutBorderColours,
      borderWidth: 2
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}

weightChartConfig={
  type: "line",
  data: {
    labels: this.weightDays,
    datasets: [{
      label: "Weight",
      data: this.weightData,
      backgroundColor: "rgba(247,0,37,0.2",
      borderColor: this.weightBorderColours,
      borderWidth: 2
    }]
  },
  options: {  
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 30,
          stepSize: 1
        }
      }]
    }
  }
}


sleepChartConfig={
  type: this.sleepChartType,
  data: {
    labels: this.sleepDays,
    datasets: [{
      label: "Sleep",
      data: this.sleepData,
      backgroundColor: this.sleepBackgroundColours,
      borderColor: this.sleepBorderColours,
      borderWidth: 2
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}



  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.loadWorkoutChartData();
    this.loadWeightChartData();
    this.loadSleepChartData()
    this.loadWaterReading();

  }

  async loadWaterReading(){
    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      // console.log(val)
      this.waterIntake = ((val[1].length)*4)
      this.readingCount = ((val[1].length)*10)
  });
  }


  async ngOnInit(){

    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      // console.log(val)
      this.initWeight = val[0][0].initData.weight
  });

    // let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    // this.USER_STORAGE_KEY=infoRecv
    this.createChart();


  }


  async loadWeightChartData(){
    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv
    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      // console.log(val)
      if (val[1] != null) {
        let days = 1
        for (let i = 0; i < val[1].length; i++) {
          // console.log(val[1])
          this.weightDays.push("Day " + days)
          this.weightData.push(parseInt(val[1][i].progressData.Weight))
          // console.log(this.weightData)
          // console.log(this.weightDays)
          days++
          }
          this.weightChart.update()
      }
  });
}
  

async loadSleepChartData(){
  let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
  this.USER_STORAGE_KEY=infoRecv
  await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
    // console.log(val)
    if (val[1] != null) {
      let days = 1
      for (let i = 0; i < val[1].length; i++) {
        // console.log(val[1])
        this.sleepDays.push("Day " + days)
        this.sleepData.push(parseInt(val[1][i].progressData.Sleep))
        days++
        }
        this.averSleep = this.calculateAverage(this.sleepData)

        this.sleepChart.update()
    }
});
}


calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}

  async loadWorkoutChartData(){
    let infoRecv = this.activatedRoute.snapshot.paramMap.get("id")
    this.USER_STORAGE_KEY=infoRecv
    await this.dataService.getStorageData(this.USER_STORAGE_KEY).then(val=> {
      if (val[1] != null) {
        for (let i = 0; i < val[1].length; i++) {
          // console.log(val[1][i].progressData.Workout1)
          // console.log(val[1][i].progressData.Workout2)
          this.allWorkoutArray.push(val[1][i].progressData.Workout1)
          this.allWorkoutArray.push(val[1][i].progressData.Workout2)
          }
          let n = this.allWorkoutArray.length;
          this.countFreq(this.allWorkoutArray, n); 
      }
    });
  };

  countFreq(arr, n)
  {
      let visited = Array.from({length: n}, (_, i) => false);
      // Traverse through array elements and
      // count frequencies
      for (let i = 0; i < n; i++) {
     
          // Skip this element if already processed
          if (visited[i] == true)
              continue;
     
          // Count frequency
          let count = 1;
          for (let j = i + 1; j < n; j++) {
              if (arr[i] == arr[j]) {
                  visited[j] = true;
                  count++;
              }
          }
          this.allWorkoutFreq.push(count)
          this.allWorkoutNames.push(arr[i])
      }
      // console.log(this.allWorkoutFreq)
      // console.log(this.allWorkoutNames)
      this.workoutChart.update()
  }

  
  createChart(){
    this.workoutChart = new Chart(this.workoutCanvas.nativeElement, this.workoutChartConfig)
    this.weightChart = new Chart(this.weightCanvas.nativeElement, this.weightChartConfig)
    this.sleepChart = new Chart(this.sleepCanvas.nativeElement, this.sleepChartConfig)
  }
  
  pieChartType(){
    this.workoutChart.destroy();
    this.workoutChartConfig.type='pie';
    this.workoutChart = new Chart(this.workoutCanvas.nativeElement, this.workoutChartConfig);
  
  }
  
  barChartType(){
    this.workoutChart.destroy();
    this.workoutChartConfig.type='bar';
    this.workoutChart = new Chart(this.workoutCanvas.nativeElement, this.workoutChartConfig);
  
  }
}
