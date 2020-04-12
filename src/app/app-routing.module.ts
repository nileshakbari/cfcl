// Angular inBuild Components imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Default Layouts Components Imports
// layouts Components Imports
import { LoginLayoutComponent } from './layouts/default-layouts/login-layout.component';
import { MainLayoutComponent } from './layouts/default-layouts/main-layout.component';

// 403 Forbidden Components Imports
import { ForbiddenComponent } from './layouts/forbidden/forbidden.component';

// Authentication Components Imports
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';

// Project All Components Imports
import { HomeComponent } from './home/home.component';
import { LabComponent } from './daily_data_screen/lab/lab.component';
import { Electrical12Component } from './daily_data_screen/electrical/electrical12/electrical12.component';
import { Electrical3Component } from './daily_data_screen/electrical/electrical3/electrical3.component';
import { Ammonia1Component } from './daily_data_screen/ammonia/ammonia1/ammonia1.component';
import { Ammonia2Component } from './daily_data_screen/ammonia/ammonia2/ammonia2.component';
import { Ammonia3Component } from './daily_data_screen/ammonia/ammonia3/ammonia3.Component';

// Project All Component Imports for Reports and Ledger
import { ReportComponent } from './reports/Report/report.component';
import { TestComponent } from './test/test.component';

// Project Routes
const routes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: { title: 'First Component' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'test', component: TestComponent },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'first', pathMatch: 'full' },

      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

      { path: 'lab', component: LabComponent, canActivate: [AuthGuard] },

      { path: 'electrical12', component: Electrical12Component, canActivate: [AuthGuard] },
      { path: 'electrical3', component: Electrical3Component, canActivate: [AuthGuard] },

      { path: 'ammonia1', component: Ammonia1Component, canActivate: [AuthGuard] },
      { path: 'ammonia2', component: Ammonia2Component, canActivate: [AuthGuard] },
      { path: 'ammonia3', component: Ammonia3Component, canActivate: [AuthGuard] },

      { path: 'report', component: ReportComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        // enableTracing: true
      } // <-- debugging purposes only
    ), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
