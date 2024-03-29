import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppService } from '../app.service';
import { KinopoiskAPIService } from '../kinopoisk-api.service';

@Component({
    selector: 'app-kino',
    templateUrl: './kino.component.html',
    styleUrls: ['./kino.component.scss']
})
export class KinoComponent { // Название чего либо транслитом (kino, mashina, forma, etc) - это плохая практика, не только во фронте. Используй английские слова (переводчик в помощь)
    list : any;
    type = ''

    constructor(private route: ActivatedRoute, private kinopoiskService: KinopoiskAPIService,
        public appService: AppService, private router: Router) {
        // Конструктор не пригоден для написания в нем сложной логики (он имеет некоторые ограничения), лучше всю "инициализационную" логику писать в ngOnInit
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('type'))
        )
            .subscribe((data: string) => {
                this.type = data;
                switch(this.type){
                    case 'topRussian':
                        this.getTopRussianFilmsFromKinopoisk();
                        break;
                    case 'topForeign':
                        this.getTopForeignFilmsFromKinopoisk();
                        break;
                    case 'newFilms':
                        this.getNewFilmsFromKinopoisk();
                        break;
                }
        });
    }

    getTopRussianFilmsFromKinopoisk(){
        this.kinopoiskService.getTopRussianFilmsFromKinopoisk().subscribe({
            next : (response:any) => {
                this.list = response.data;
            }
        })
    }
    getTopForeignFilmsFromKinopoisk(){
        this.kinopoiskService. getTopForeignFilmsFromKinopoisk().subscribe({
            next : (response:any) => {
                this.list = response.data;
            }
        })
    }
    getNewFilmsFromKinopoisk(){
        this.kinopoiskService.getNewFilmsFromKinopoisk().subscribe({
            next : (response:any) => {
                this.list = response.data;
            }
        })
    }

}
