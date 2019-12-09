import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {LayoutClientComponent} from './pages/client/layoutCLient.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BaseApiService} from './api/base.api.service';
import {UserApiService} from './api/user.api.service';
import {LayoutClientModule} from './pages/client/layoutClient.module';
import {RegistrationModule} from './pages/client/registration/registration.module';

const appRoutes: Routes = [
  {path: '', component: LayoutClientComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutClientModule,
    HttpClientModule,
    RegistrationModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [BaseApiService, UserApiService, UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
