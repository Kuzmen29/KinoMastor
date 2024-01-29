import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { localhost, port } from 'src/paths/localhost';
import { User } from 'src/types/user.type';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    localStorageUserID: string | null = null;

    getUser$ = new Subject<User | null>();

    user: User | null = null;

    constructor(private http: HttpClient,) {
        this.getLocalStorageUserID();
    }

    getLocalStorageUserID() {
        let localStorageUser = localStorage.getItem('KinoMastorLogin');

        if (localStorageUser) {
            this.localStorageUserID = (JSON.parse(localStorageUser)).userID;
            this.getUserFromDatabase()
        }
    }
    getUserFromDatabase() {
        this.http.post(`${localhost}${port}/KinoMastorAPI/GET/getUserFromID`, { userID: this.localStorageUserID }).subscribe({
            next: (response: any) => {
                this.user = response.data;
                this.changeUser();
            },
            error: (error) => {
                console.log(error);
            }
        }
        )
    }
    getUser() {
        return this.user
    }
    changeUser() {
        this.getUser$.next(this.user);
    }
    setLocalStorageUserID(userID: string) {
        localStorage.setItem('KinoMastorLogin', JSON.stringify({ userID }));
        this.getLocalStorageUserID()
    }
    deleteUser() {
        localStorage.removeItem('KinoMastorLogin')
        this.user = null;
        this.changeUser()
    }


    registration(form: any) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/ADD/addNewUser`, { form })
    }
    login(form: any) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/GET/getUser`, { form })
    }
    getMyKinoAll() {
        return this.http.get(`${localhost}${port}/MyKinoAPI/GET/getMyKinoAll`);
    }
    addCommentToFilm(comment: object) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/ADD/addCommentToFilm`, { comment })
    }
    getCommentsOfFilm(FilmID: number) {
        return this.http.get(`${localhost}${port}/KinoMastorAPI/GET/getCommentsOfFilm/${FilmID}`)
    }

    addInFavoriteFilms(filmID: number, userID: string) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/USER/addInFavoriteFilms`, {
            data: { filmID, userID }
        });;
    }
    addWatchLater(filmID: number, userID: string) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/USER/addWatchLater`, {
            data: { filmID, userID }
        });;
    }
    getFavoriteFilms(userID: string) {
        return this.http.post(`${localhost}${port}/KinoMastorAPI/USER/addInFavoriteFilms`, {
            data: { userID }
        });
    }
}
