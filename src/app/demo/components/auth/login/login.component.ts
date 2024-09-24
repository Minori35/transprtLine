import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoadingService } from 'src/app/layout/service/loading.service';
import { LoginService } from '../service/login.service';
import { encrypt } from 'src/app/util/util-encrypt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

    valCheck            : string[] = ['remember'];
    loginForm           :FormGroup| any;
    password!           : string;

    constructor(
        public layoutService    : LayoutService,
        public loadingService   : LoadingService,
        public loginSrv         : LoginService,
        public fb               : FormBuilder,
        public route            : Router           

    ) { }
    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(3)]]   
          
          });    }

    login(){
        this.loadingService.show();
        const password= encrypt(this.loginForm.value.password)
        console.log("🚀 ~ LoginComponent ~ login ~ password:", password)
      
        const data={
          username: this.loginForm.value.email,
          password: password
        }
        
        this.loginSrv.login(data).
        subscribe({
            next: (resp:any) => {
                console.log("🚀 ~ LoginComponent ~ login ~ resp:", resp)
                this.route.navigate(['/'])
                localStorage.setItem('accessToken',resp.result.accessToken)
                localStorage.setItem('refreshToken',resp.result.refreshToken)
                
                this.loadingService.hide();
            },
            error: (err:any) => {
                console.log("🚀 ~ LoginComponent ~ login ~ err:", err)
                this.loadingService.hide();

                Swal.fire({
                    icon: "warning",
                    title: "Ocurrio un error en el servicio",
                    text: 'Vuelve a intetar',
                    showConfirmButton: true,
                  });

            },

        })

    }

}
