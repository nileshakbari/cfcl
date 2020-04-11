// Angular inBuild Components imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Root Component Import
import { AppComponent } from './app.component';

// Default Layouts Components Imports
// layouts Components Imports
import { LoginLayoutComponent } from './layouts/default-layouts/login-layout.component';
import { MainLayoutComponent } from './layouts/default-layouts/main-layout.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

// 403 Forbidden Components Imports
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { ForbiddenComponent } from './layouts/forbidden/forbidden.component';

// Authentication Components Imports
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ProfileComponent } from './auth/profile/profile.component';
// Authentication All Providers Imports
import { AuthInterceptor } from './auth/auth.interceptor';

// Material Design Angular Modules Import
import { MaterialModule } from './material.module';

// Project All Components Imports
import { LabComponent } from './daily_data_screen/lab/lab.component';
import { Electrical12Component } from './daily_data_screen/electrical/electrical12/electrical12.component';
import { Electrical3Component } from './daily_data_screen/electrical/electrical3/electrical3.component';
import { Ammonia1Component } from './daily_data_screen/ammonia/ammonia1/ammonia1.component';
import { Ammonia2Component } from './daily_data_screen/ammonia/ammonia2/ammonia2.component';
import { Ammonia3Component } from './daily_data_screen/ammonia/ammonia3/ammonia3.Component';

// Project All Services Imports in Providers
import { UserService } from './shared/services/user.service';
import { LabService } from './shared/services/lab.service';
import { Electrical12Service } from './shared/services/electrical12.service';
import { Electrical3Service } from './shared/services/electrical3.service';
import { Ammonia1Service } from './shared/services/ammonia1.service';
import { Ammonia2Service } from './shared/services/ammonia2.service';
import { Ammonia3Service } from './shared/services/ammonia3.service';

// Project All Component Imports for Reports and Ledger
import { ReportComponent } from './reports/Report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    ForbiddenComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    LabComponent,
    Electrical12Component,
    Electrical3Component,
    Ammonia1Component,
    Ammonia2Component,
    Ammonia3Component,
    ReportComponent
  ],
  providers: [
    UserService,
    LabService,
    Electrical12Service,
    Electrical3Service,
    Ammonia1Service,
    Ammonia2Service,
    Ammonia3Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
