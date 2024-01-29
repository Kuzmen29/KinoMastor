import { Component, Input } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
    @Input() error: any;
    image = ""
    title = ""

    ServerError = '../../assets/images/ServerError.png'
    constructor() {

    }
    ngOnInit() {
        switch (this.error.status) {
            case 500:
                this.image = this.ServerError;
                this.title = this.error.error
                break;
            case "ERR_NETWORK":
                this.image = this.ServerError;
                this.title = 'Ошибка на сервере.'
                break;
            case "ERR_BAD_REQUEST":
                this.image = this.ServerError;
                this.title = 'Сервер не найден.';
                break;
            default:
                this.image = this.ServerError;
                this.title = 'Сервер недоступен.'
                break
            // case 404:
            //     setResponseMessage({image : notFound, title : "Сервер не найден!"})
            //     break;
            // default:
            //     setResponseMessage({image : sendERROR, title : "Другая ошибка!"})
            //     break;
        }
    }
}
