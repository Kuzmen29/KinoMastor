import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { KinoListComponent } from './kino-list/kino-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from 'src/safe.pipe';
import { ErrorComponent } from './UI/error/error.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderSettingsComponent } from './header-settings/header-settings.component';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { FilmComponent } from './film/film.component';
import { SuccessComponent } from './UI/success/success.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { LoadingComponent } from './UI/loading/loading.component';
import { RequirementAuthorizationComponent } from './UI/requirement-authorization/requirement-authorization.component';
import { KinoComponent } from './kino/kino.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KinoListComponent,

    SafePipe,
    ErrorComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderSettingsComponent,
    ClickStopPropagationDirective,
    SuccessLoginComponent,
    FilmComponent,
    SuccessComponent,
    ProfileComponent,
    SearchComponent,
    LoadingComponent,
    RequirementAuthorizationComponent,
    KinoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
