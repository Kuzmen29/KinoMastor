import { Component } from '@angular/core';
import { Route, ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { KinopoiskAPIService } from '../kinopoisk-api.service';
import { AppService } from '../app.service';
import { Film} from "../../types/film.type";
import { User } from 'src/types/user.type';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-film',
    templateUrl:  './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent {

    filmID: string = '';
    user: User | null = null;

    film!: Film;

    comment : string = "";

    comments: any = []

    user_panel__success : boolean = false;


    constructor(private route: ActivatedRoute, private kinopoiskService: KinopoiskAPIService,
        public appService: AppService, private router: Router) {
    }


    ngOnInit() {
        this.user = this.appService.getUser();

        this.appService.getUser$.subscribe(
            (next)=> {
                this.user = next
            }
        );

        this.route.paramMap.pipe(
            switchMap(params => params.getAll('filmID'))
        )
            .subscribe((data: string) => {
                this.filmID = data;
                this.getKinoFromKinopoiskByID();
        });
        
    }
    toLogin() {
        this.router.navigate(['login'])
    }
    getKinoFromKinopoiskByID(){
        this.kinopoiskService.getKinoFromKinopoiskByID(this.filmID).subscribe({
            next: (response: any) => {
                this.film = response.data;

                this.getCommentsOfFilm();
            }
        }
        )
        // this.kinopoiskService.getTestFilm().subscribe({
        //         next: (response: any) => {
        //             this.film = response.data;

        //             this.getCommentsOfFilm();
        //         }
        //     }
        //     )
    }
    getCommentsOfFilm(){
        this.appService.getCommentsOfFilm(this.film.id).subscribe({
            next: (response: any) => {
                this.comments = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
    addComment() {
        let comment = {
            FilmID: this.film.id,
            userNickname: this.user?.userNickname,
            userID: this.user?.userID,
            comment: this.comment,
            date: new Date(),
        }

        this.appService.addCommentToFilm(comment).subscribe({
            next: (response) => {
                this.user_panel__success = true;
                this.comments.push(comment)
                setTimeout(() => {
                    this.user_panel__success = false;
                }, 1000);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    addFavoriteFilm(filmID: number, userID: string) {
        this.appService.addInFavoriteFilms(filmID, userID).subscribe({
            next: (response) => {   
                this.user_panel__success = true;
                this.appService.user?.userFavoriteFilms?.push(filmID)
                setTimeout(()=>{
                    this.user_panel__success = false;
                },1000)
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
    addWatchLater(filmID: number, userID: string) {
        this.appService.addWatchLater(filmID, userID).subscribe({
            next: (response) => {
                this.user_panel__success = true;
                this.appService.user?.userWatchLater?.push(filmID)
                setTimeout(()=>{
                    this.user_panel__success = false;
                },1000)
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
    createDate(date: string) {
        return new Date(date)
    }
}
