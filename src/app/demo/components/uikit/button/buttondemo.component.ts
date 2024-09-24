import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import Swal from 'sweetalert2';
import { PickUp, Quotation } from '../../auth/interfaces/quotation-interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../../auth/interfaces/order-interfaces';
import jsPdf, { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
    templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {
    public orders!             : Order[] ;
    public statuses!           : any[];
    public orderDialog         : boolean = false;
    public deliveryDialog      : boolean = false;
    public pickUpDialog        : boolean = false;
    public orderEdit           : any ={};
    public orderForm           : FormGroup;
    public pickUpData          : PickUp[]=[]; 
    public deliveryData        : PickUp[]=[];
    public newDeliveryData     : PickUp[];
    public newPickUpData       : PickUp[];
    public client              : any[] | undefined;
    public user                : any[] | undefined;
    public selectedClient      : any;
    public selectedUser        : any;
    public filteredClient      : any[] | undefined;
    public filteredUser        : any[] | undefined;


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

        this.user=[
            {
                "name": "User 1",
                "code": 1
            },
            {
                "name": "User 2",
                "code": 2
            },
            {
                "name": "User 3",
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

        ]
        this.deliveryData=[
            
        ]

        
        this.orders=[
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
             commentDelivery: 'commentDelivery',
             link           : 'https://cloud.samsara.com/o/80686/fleet/viewer/iWONRu5FNbYDtbyS7Qax'
         },
         
        ]
 
         this.statuses = [
             { label: 'INSTOCK', value: 'instock' },
             { label: 'LOWSTOCK', value: 'lowstock' },
             { label: 'OUTOFSTOCK', value: 'outofstock' }
         ];
     }


     dowloadOrderPdf(order){
     console.log("🚀 ~ ButtonDemoComponent ~ dowloadOrderPdf ~ order:", order)

        const doc = new jsPDF;

        autoTable(doc, {
            body: [
              [
                { 
                content: 'Order '+order.id , 
                styles: { 
                    halign: 'left',
                    fontSize: 20,
                    
                 } 
                }
        ],
            ],
          });

          autoTable(doc, {
            body: [
              [
                { 
                content: 'Order: '+order.id
                + '\nReference: #' +order.reference 
                + '\nDate: 10/09/2024', 
                styles: { 
                    halign: 'right',
                    
                 } 
                }
        ],
            ],
            theme :`plain`
          });
        return doc.save('invoce')
     }

     openNew(){
        this.orderEdit = { };
        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.orderEdit.client)
        this.orderDialog = true;
     }
   
     saveNewDelivery(){
         this.deliveryData.push(this.newDeliveryData[0]) 
         this.deliveryDialog = false
     }

     saveNewPickUp(){
        this.pickUpData.push(this.newPickUpData[0]) 
        this.pickUpDialog = false
    }

    goToLink(product){
        console.log("🚀 ~ ButtonDemoComponent ~ goToLink ~ product:", product)
        window.open(product);
    }

     editQuotation(quotation:any) {
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ quotation:", quotation)
        console.log('open');

        this.orderEdit = { ...quotation };
        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.orderEdit.client)
        this.orderDialog = true;
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
                this.orderDialog = false;
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
                this.orderDialog = false;
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

    filterUser(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.user as any[]).length; i++) {
            let user = (this.user as any[])[i];
            if (user.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(user);
            }
        }

        this.filteredUser = filtered;
    }

    filterClient(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.client as any[]).length; i++) {
            let client = (this.client as any[])[i];
            if (client.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(client);
            }
        }

        this.filteredClient = filtered;
    }

    
    
    
}
