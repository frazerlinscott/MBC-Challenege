import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicStorageModule} from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Workout1PageModule} from "./workout1/workout1.module";
import { EditWorkoutPageModule } from './edit-workout/edit-workout.module';
import { PhotoPageModule } from "./photo/photo.module";
import { ViewLocationPageModule } from './view-location/view-location.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),PhotoPageModule, Workout1PageModule, EditWorkoutPageModule, ViewLocationPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
