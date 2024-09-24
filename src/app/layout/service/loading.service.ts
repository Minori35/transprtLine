import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public showLoading = new BehaviorSubject<boolean>(false);

  constructor() { }

  show() {
    this.showLoading.next(true);
  }

  hide() {
    this.showLoading.next(false);
  }
}
