import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localhost, port } from 'src/paths/localhost';

@Injectable({
    providedIn: 'root'
})
export class NewsApiService {

    constructor(private http : HttpClient) { }

    getNewsOfKino() {
        return this.http.get(`${localhost}${port}/NewsAPI/GET/getNewsOfKino`)
    }
}
