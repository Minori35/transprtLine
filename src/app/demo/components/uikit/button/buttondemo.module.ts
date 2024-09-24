import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
import { ButtonDemoComponent } from './buttondemo.component';
import { AngularMaterialsModule } from 'src/app/materials/angular-materials/angular-material.module';
import { PrimengMAterialsModule } from 'src/app/materials/primeng-materials/primeng-materials.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonDemoRoutingModule,
		AngularMaterialsModule,
		PrimengMAterialsModule
	],
	declarations: [ButtonDemoComponent],
	providers: [MessageService, ProductService,CustomerService,ConfirmationService]

})
export class ButtonDemoModule { }
