import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { SingOutService } from "src/app/layout/service/singOut.service";
import { Router } from "@angular/router";
import { LoginService } from '../service/login.service';
import { LoadingService } from "src/app/layout/service/loading.service";

@Injectable({
  providedIn: "root",
})
export class AuthTokenService implements OnInit, OnDestroy {
  private tokenCheckInterval: any;
  private logoutInterval: any;
  private renewSessionDismissed = false;

  constructor(
    public singOutService       :SingOutService,
    private loadingService      :LoadingService,
    public router               :Router,
    public LoginService         :LoginService
  ) {}

  ngOnInit() {
    this.startLogout();
    this.startTokenRefresh();
  }

  ngOnDestroy() {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }

    if (this.logoutInterval) {
      clearInterval(this.logoutInterval);
    }
  }

  startLogout() {

    this.logoutInterval = setInterval(() => {


      const accessToken: any | string = localStorage.getItem("accessToken");

      if (!accessToken) {
        return;
      }

      try {

        const decodedToken: any = jwtDecode(accessToken);
        const expirationTime = decodedToken.exp * 1000; // Convertir a milisegundos
        
        const currentTime = new Date().getTime();
        
        if (currentTime < expirationTime) {
          return;
        }


        this.singOutService.signOut()?.subscribe({
          next: (res: any) => {
            localStorage.clear();
            this.router.navigate(['/auth/login'])
          },
          error: (err: any) => {

            console.log("Error at logout");
          
          },
        });

      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }, 15000); //every 15 seconds
  }

  startTokenRefresh() {

    this.tokenCheckInterval = setInterval(() => {
      

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        return;
      }

      if (this.renewSessionDismissed) {
        return;
      }
      
      try {

        const decodedToken: any = jwtDecode(accessToken);
        const expirationTime = decodedToken.exp * 1000; // Convertir a milisegundos
        const currentTime = new Date().getTime();
        const timeLeft = expirationTime - currentTime;
        const timeLimit = 120000; //2 minutes in milliseconds

        // Verificar si está dentro del rango antes de la expiración
        if (timeLeft <= timeLimit) {

          const minutes    = timeLeft <= 60000 ? 1 : 2;
          const minMessage = `La sesión vencerá en menos de ${minutes} minuto`;
          var title        = minutes == 1 ? minMessage : minMessage + 's';

          Swal.fire({
            title: title,
            text: "¿Desea renovarla?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#041d49",
            cancelButtonColor: "#737070",
            confirmButtonText: "Renovar sesión",
            allowOutsideClick: false,
            cancelButtonText: "Cancelar",

          }).then((result) => {

            if (result.isConfirmed) {
            
              console.log("confirmacion");

              this.loadingService.show();

              this.LoginService.refreshToken().subscribe({
                next: (res: any) => {

                  console.log("entro al servicio de refresh");
                  
                  localStorage.setItem("accessToken", res.result.accessToken);
                  localStorage.setItem("refreshToken", res.result.refreshToken);

                  this.loadingService.hide();

                  Swal.fire({
                    icon: "success",
                    title: "La sesión se ha renovado",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                },
                error: (err: any) => {
                  Swal.fire({
                    icon: "warning",
                    title: "Ocurrió un error en el servicio",
                    showConfirmButton: true,
                  });

                  this.loadingService.hide();
                  localStorage.clear();
                  this.router.navigate(['/auth/login'])
                },
              });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
              
              this.renewSessionDismissed = true;
              this.loadingService.hide();
            }
          });
        }
      } catch (error) {

        this.router.navigate['/auth/login']
      }
    }, 30000); //every 30 seconds
  }
}
