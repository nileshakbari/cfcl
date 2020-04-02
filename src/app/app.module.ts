// Default imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { UserService } from './shared/services/user.service';
import { LabService } from './shared/services/lab.service';
import { Electrical12Service } from './shared/services/electrical12.service';
import { Electrical3Service } from './shared/services/electrical3.service';
import { Ammonia1Service } from './shared/services/ammonia1.service';
import { Ammonia2Service } from './shared/services/ammonia2.service';
import { Ammonia3Service } from './shared/services/ammonia3.service';

// Pages
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthInterceptor } from './auth/auth.interceptor';

// Plant forms
import { LabComponent } from './daily_data_screen/lab/lab.component';
import { Electrical12Component } from './daily_data_screen/electrical/electrical12/electrical12.component';
import { Electrical3Component } from './daily_data_screen/electrical/electrical3/electrical3.component';
import { Ammonia1Component } from './daily_data_screen/ammonia/ammonia1/ammonia1.component';
import { Ammonia2Component } from './daily_data_screen/ammonia/ammonia2/ammonia2.component';
import { Ammonia3Component } from './daily_data_screen/ammonia/ammonia3/ammonia3.Component';

// Theme design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Material theme setup
import { MaterialModule } from './material.module';
import { MatTreeModule, MatIconModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

// Theme layouts
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

// Error pages
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({

  declarations: [
    AppComponent,

    LoginLayoutComponent, // Login Layout Page
    MainLayoutComponent, // Page Layout Page

    HomeComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,

    NavbarComponent,
    SidebarComponent,

    ForbiddenComponent, // 404 Not Found Error Page

    LabComponent,
    Electrical12Component,
    Electrical3Component,
    Ammonia1Component,
    Ammonia2Component,
    Ammonia3Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule
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
  }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
