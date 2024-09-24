import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SingOutService {

  private baseUrl = environment.URL_SERVICES;

  constructor(private http: HttpClient) {}

  public signOut(){
    return this.http.get(this.baseUrl+'/api/security/logout')
  }

}
