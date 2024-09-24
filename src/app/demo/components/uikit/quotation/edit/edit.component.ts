import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PickUp } from '../../../auth/interfaces/quotation-interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  public id                   : number;
  public newDeliveryData      : PickUp[];

  constructor(
    private router      :Router,
    private route       :ActivatedRoute
  ){}

  ngOnInit(): void {
    this.newDeliveryData=[
      {date:'',time:'',comments:''}
  ]
  
    this.route.paramMap.subscribe((param)=>{
    this.id = Number(param.get('id')
    )
      console.log("🚀 ~ EditComponent ~ this.route.paramMap.subscribe ~ id:", this.id)
    })
  }

}
