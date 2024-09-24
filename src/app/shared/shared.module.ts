import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from "ngx-loading";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewComponent } from './pdfView/pdfView.component';


@NgModule({
  declarations: [
    LoadingComponent,
    PdfViewComponent
  ],
  imports: [
    CommonModule, 
    PdfViewerModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.doubleBounce,
       
        backdropBorderRadius: '3px'
    }),
  ],  
  exports:[
    LoadingComponent,
    PdfViewComponent
  ],
  providers:[
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
})
export class SharedModule { }
