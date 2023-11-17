import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pre-login',
    loadChildren: () => import('./pre-login/pre-login.module').then( m => m.PreLoginPageModule)
  },
  {
    path: '',
    redirectTo: 'pre-login',
    pathMatch: 'full'
  },
 {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-acc',
    loadChildren: () => import('./create-acc/create-acc.module').then( m => m.CreateAccPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'main/:id',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
    {
    path: 'edit-workout',
    loadChildren: () => import('./edit-workout/edit-workout.module').then( m => m.EditWorkoutPageModule)
  },
  {
    path: 'photo/:id',
    loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  },

  {
    path: 'view-day',
    loadChildren: () => import('./view-day/view-day.module').then( m => m.ViewDayPageModule)
  },

  {
    path: 'progress/:id',
    loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'completed/:id',
    loadChildren: () => import('./completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  
  // {
  //   path: 'view-location',
  //   loadChildren: () => import('./view-location/view-location.module').then( m => m.ViewLocationPageModule)
  // },


  // {
  //   path: 'notes',
  //   loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  // },
  // {
  //   path: 'edit-workout',
  //   loadChildren: () => import('./edit-workout/edit-workout.module').then( m => m.EditWorkoutPageModule)
  // },
  // {
  //   path: 'home/:id',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  // {
  //   path: 'create-acc',
  //   loadChildren: () => import('./create-acc/create-acc.module').then( m => m.CreateAccPageModule)
  // },
  // {
  //   path: 'photo/:id',
  //   loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  // },
  // {
  //   path: 'camera',
  //   loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  // },

  // {
  //   path: 'notes/:id',
  //   loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
