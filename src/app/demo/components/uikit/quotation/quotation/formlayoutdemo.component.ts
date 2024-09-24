import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { PickUp, Quotation } from '../../../auth/interfaces/quotation-interfaces';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
interface quotation {

}
@Component({
    templateUrl: './formlayoutdemo.component.html',
    styles: [`
        .swal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
      `]
})
export class FormLayoutDemoComponent implements OnInit {
    public quotation!          : Quotation;
    public quotations!         : Quotation[] ;
    public statuses!           : any[];
    public selectedProducts!   : any[] | null;
    public quotationDialog     : boolean = false;
    public deliveryDialog      : boolean = false;
    public pickUpDialog        : boolean = false;
    public quotationEdit       : any ={};
    public quotationForm       : FormGroup;
    public pickUpData          : PickUp[]=[]; 
    public deliveryData        : PickUp[]=[];
    public newDeliveryData     : PickUp[];
    public newPickUpData       : PickUp[];
    public client              : any[] | undefined;
    public selectedClient      : any;
    public filteredClient      : any[] | undefined;


    constructor( 
        private messageService          : MessageService, 
        private confirmationService     : ConfirmationService,
        private fb                      :FormBuilder,
    ) {}
    ngOnInit() {

        // this.quotationForm = this.fb.group({
        //     client          :['',Validators.required],
        //     reference       :['',Validators.required],
        //     user            :['',Validators.required],
        //     load            :['',Validators.required],
        //     shipper         :['',Validators.required],
        //     weigth          :['',Validators.required],
        //     carrierLoad     :['',Validators.required],
        //     unitLoad        :['',Validators.required],
        //     typeLoad        :['',Validators.required],
        //     datePick        :['',Validators.required],
        //     timePick        :['',Validators.required],
        //     commentsPick    :['',Validators.required],
        //     email           :[''],
        //     carrierUnload   :['',Validators.required],
        //     unitUnload      :['',Validators.required],
        //     dateDelivery    :['',Validators.required],
        //     timeDelivery    :['',Validators.required],
        //     commentDelivery :['',Validators.required],

            

        // })

        this.client=[
            {
                "name": "Sayra Pacheco",
                "code": 1
            },
            {
                "name": "Carlos Antonio",
                "code": 2
            },
            {
                "name": "Checo Perez",
                "code": 3
            },
            
        ]

        this.newDeliveryData=[
            {date:'',time:'',comments:''}
        ]

        this.newPickUpData=[
            {date:'',time:'',comments:''}

        ]

        this.pickUpData= [
            {date:'',time:'',comments:''}

        ]
        this.deliveryData=[
            
        ]

        
        this.quotations=[
         {  
            
             id             :34,  
             client         : 'Sayra Pacheco',
             reference      : 'f230fh0g3',
             user           : 'Sergio Ortigo',
             load           : 'load',
             shipper        : 'Alguien',
             weigth         : '90',
             carrierLoad    : 'carrierLoad',
             unitLoad       : 'unitLoad',
             typeLoad       : 'typeLoad',
             datePick       : 'datePick',
             timePick       : 'timePick',
             commentsPick   : 'commentsPick',
             email          : 'emial',
             carrierUnload  : 'carrierUnload',
             unitUnload     : 'unitUnload',
             dateDelivery   : 'dateDelivery',
             timeDelivery   : 'timeDelivery',
             commentDelivery: 'commentDelivery'
         },
         
        ]
 
         this.statuses = [
             { label: 'INSTOCK', value: 'instock' },
             { label: 'LOWSTOCK', value: 'lowstock' },
             { label: 'OUTOFSTOCK', value: 'outofstock' }
         ];
     }

     openNew(){
        this.quotationEdit = { };
        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.quotationEdit.client)
        this.quotationDialog = true;
     }
   
     saveNewDelivery(){
         this.deliveryData.push(this.newDeliveryData[0]) 
         this.deliveryDialog = false
     }

     saveNewPickUp(){
        this.pickUpData.push(this.newPickUpData[0]) 
        this.pickUpDialog = false
    }

     editQuotation(quotation:any) {
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ quotation:", quotation)
        console.log('open');

        this.quotationEdit = { ...quotation };
        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.quotationEdit.client)
        this.quotationDialog = true;
    } 
     
    newPickup(){
        this.newPickUpData=[
            {date:'',time:'',comments:''}
        ]

        this.pickUpDialog=true;
    }


    newDelivery(){
        this.newDeliveryData=[
            {date:'',time:'',comments:''}
        ]
        this.deliveryDialog=true
    }

    delitePickup(pickup,event){
        console.log("🚀 ~ FormLayoutDemoComponent ~ delitePickup ~ pickup:", pickup)
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                console.log('accept');
                this.quotationDialog = false;
                Swal.fire({
                    icon: "success",
                    title: "The record was deleted! ",
                    showConfirmButton: false,
                    timer: 1500 
                  });
                
            },
            reject: () => {
            }
        });
    }

    deliteQuotation(pickup,event){
        console.log("🚀 ~ FormLayoutDemoComponent ~ delitePickup ~ pickup:", pickup)
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                console.log('accept');
                this.quotationDialog = false;
                Swal.fire({
                    icon: "success",
                    title: "The record was deleted! ",
                    showConfirmButton: false,
                    timer: 1500 
                  });
                
            },
            reject: () => {
            }
        });
    }

    filterClient(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.client as any[]).length; i++) {
            let country = (this.client as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredClient = filtered;
    }

    
    
    
}
