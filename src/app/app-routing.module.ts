import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'userhome',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'useraccount',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'driversearch',
    loadChildren: () => import('./driver-search/driver-search.module').then( m => m.DriverSearchPageModule)
  },
  {
    path: 'driverdetails',
    loadChildren: () => import('./driver-details/driver-details.module').then( m => m.DriverDetailsPageModule)
  },
  {
    path: 'vehicledetails',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
  {
    path: 'mistake',
    loadChildren: () => import('./mistake/mistake.module').then( m => m.MistakePageModule)
  },
  {
    path: 'finebill',
    loadChildren: () => import('./fine-bill/fine-bill.module').then( m => m.FineBillPageModule)
  },
  {
    path: 'newdriver',
    loadChildren: () => import('./new-driver/new-driver.module').then( m => m.NewDriverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
