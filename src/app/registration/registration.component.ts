import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { } from "../success-login/success-login.component";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    success: boolean = false
    successMessage: string = "Успешно!"

    isNicknameTaken: boolean = false;

    myForm: FormGroup;

    userNickname = new FormControl("", [Validators.required])
    userEmail = new FormControl("", [Validators.required, Validators.pattern(/\w+@\w+\.\w+/i)])
    userPassword = new FormControl('', [Validators.required, Validators.pattern(/.{8,30}/)]);
    userPasswordConfirm = new FormControl('', [Validators.required]);

    constructor(private router: Router, private appService: AppService, private fb: FormBuilder) {
        this.myForm = fb.group({
            userNickname: this.userNickname,
            userEmail: this.userEmail,
            userPassword: this.userPassword,
            userPasswordConfirm: this.userPasswordConfirm
        }, { validator: this.validatePasswordConfirmation('userPassword', 'userPasswordConfirm') })
    }

    validatePasswordConfirmation(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }

    submit() {
        this.appService.registration(this.myForm.value).subscribe({
            next: (response: any) => {
                console.log(response);

                if (response.status === 200) {
                    this.successMessage = "Успешно!"
                    this.success = true;
                }
                else if (response.status === 400 && response.success === 'Nickname taken') {
                    this.isNicknameTaken = true
                }
            },
            error: ({ error, ...errors }) => {
                console.log(errors);
                if (error.status === 400 && error.success === 'Nickname taken') {
                    this.isNicknameTaken = true
                }
            }
        })
    }

    toLogin() {
        this.router.navigate([`login`]);
    }
}
