import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { LoadingService } from './service/loading.service';
import { SingOutService } from './service/singOut.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService        :LayoutService,
        public loadinsrv            :LoadingService,
        public singOutService       :SingOutService,
        public router               :Router   
    ) { }


    signOut(){

        this.loadinsrv.show();
        this.singOutService.signOut().
            subscribe({
                next: (resp:any) => {
                    this.router.navigate(['/auth/login'])
                    localStorage.clear()
                    console.log("🚀 ~ AppTopBarComponent ~ signOut ~ resp:", resp)
                    this.loadinsrv.hide()
                },
                error: (err:any) => {
                    console.log("🚀 ~ AppTopBarComponent ~ signOut ~ err:", err)
                    this.loadinsrv.hide()
                    
                
                }
            })
        

    }
}
