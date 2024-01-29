import { Component } from '@angular/core';
import { Film } from 'src/types/film.type';
import { AppService } from '../app.service';
import { KinopoiskAPIService } from '../kinopoisk-api.service';
import { User } from 'src/types/user.type';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    number : number = 1;

    user : User | null;

    list : Film[] | undefined = undefined;

    constructor(private appService: AppService, private kinopoiskService : KinopoiskAPIService) {
        this.user = appService.getUser();
        this.appService.getUser$.subscribe(
            (next)=> {
                this.user = next
            }
        );
        
    }

    changeMenuItem(number: number) {
        switch(number) {
            case 2:
                this.kinopoiskService.getCollectionsByID(this.user?.userFavoriteFilms).subscribe({
                    next : (response:any)=> {
                        this.list = response.data;
                        this.number = number;
                    }
                })
                break;
            case 3:
                this.kinopoiskService.getCollectionsByID(this.user?.userWatchLater).subscribe({
                    next : (response:any)=> {
                        this.list = response.data;
                        this.number = number;
                    }
                })
                break;

        }
        this.number = number;
    }

}
