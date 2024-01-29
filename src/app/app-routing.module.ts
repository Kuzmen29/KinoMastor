import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KinoListComponent } from './kino-list/kino-list.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { FilmComponent } from './film/film.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { KinoComponent } from './kino/kino.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search/:condition', component: SearchComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },

    { path: 'film/:filmID', component: FilmComponent },
    { path: 'kino/:type', component: KinoComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
