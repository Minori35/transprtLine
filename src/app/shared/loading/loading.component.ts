import { Component } from '@angular/core';
import { LoadingService } from 'src/app/layout/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  public loading = false;

  constructor(public loadingService: LoadingService) { 
    this.loadingService.showLoading.subscribe(
      (show: boolean)  => this.loading = show
    );
  }

}
