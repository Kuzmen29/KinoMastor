import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localhost, port } from 'src/paths/localhost';
@Injectable({
    providedIn: 'root'
})
export class KinopoiskAPIService {
    /* Хорошо сделал*/
    constructor(private http: HttpClient) { }

    getKinoBySearch(condition: string) {
        return this.http.get(`${localhost}${port}/KinopoiskAPI/GET/getKinoBySearch/${condition}`)
    }
    getKinoFromKinopoiskByID(id: string) {
        return this.http.get(`${localhost}${port}/KinopoiskAPI/GET/getKinoFromKinopoiskByID/${id}`)
    }
    getCollectionsByID(IDs : number[] | undefined) {
        return this.http.post(`${localhost}${port}/KinopoiskAPI/GET/getCollectionsByID`, {IDs : IDs});
    }
    getNewFilmsFromKinopoisk(){
        return this.http.get(`${localhost}${port}/KinopoiskAPI/GET/getNewFilmsFromKinopoisk`);
    }

    getTopRussianFilmsFromKinopoisk(){
        return this.http.get(`${localhost}${port}/KinopoiskAPI/GET/getTopRussianFilmsFromKinopoisk`);
    }
    getTopForeignFilmsFromKinopoisk(){
        return this.http.get(`${localhost}${port}/KinopoiskAPI/GET/getTopForeignFilmsFromKinopoisk`);
    }
    


    getTestFilm() {
        return this.http.get(`${localhost}${port}/KinoMastorAPI/GET/getTestFilm`)
    }
}
