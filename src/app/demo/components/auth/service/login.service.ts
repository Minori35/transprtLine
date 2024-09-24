import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { LoginData } from '../interfaces/login-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.URL_SERVICES;


  constructor(private http: HttpClient) {}

  public login(data: LoginData){
    return this.http.post(this.baseUrl+'/api/security/login',data)
  }


  public refreshToken(){
    return this.http.get(this.baseUrl+'/api/security/logout')

  }




}
