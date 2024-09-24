import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileDemoRoutingModule } from './filedemo-routing.module';
import { FileDemoComponent } from './filedemo.component';
import { PrimengMAterialsModule } from 'src/app/materials/primeng-materials/primeng-materials.module';
import { AngularMaterialsModule } from 'src/app/materials/angular-materials/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PrimengMAterialsModule,
		AngularMaterialsModule,
		SharedModule


	],
	declarations: [FileDemoComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],

})
export class FileDemoModule { }
