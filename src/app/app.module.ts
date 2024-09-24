import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './demo/components/auth/guard/auth-interceptor.service';
import { AuthTokenService } from './demo/components/auth/guard/auth-token.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule, 
        AppLayoutModule, 
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule ],
    providers: [
        { provide: LocationStrategy , useClass: PathLocationStrategy,},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, 
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
         provideFirebaseApp(() => initializeApp(environment.firebase )),
         provideAuth(() => getAuth()), 
         provideFirestore(() => getFirestore()),
        // { provide: HTTP_INTERCEPTORS, useClass: AuthTokenService,multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
