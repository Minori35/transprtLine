import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormLayoutDemoComponent } from './quotation/formlayoutdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FormLayoutDemoComponent },
		
	])],
	exports: [RouterModule]
})
export class FormLayoutDemoRoutingModule { }
