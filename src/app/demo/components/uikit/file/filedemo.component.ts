import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Bank, Carrier, Company, CreditData, DocumentacionPdf, DrafterContact ,Representative} from '../../auth/interfaces/carrier-interfaces';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent implements OnInit {

    public pdfFileName         : string             = 'assets/pdfDummy/pdf.pdf'; // Reemplaza con la ruta de tu PDF
    public showPdfViewer       : boolean            = true;  
    public uploadedFiles       : any[]              = [];
    public carrier             : Carrier[]          = [];
    public carrierDialog       : boolean            = false;
    public carrierEdit         : any                = {};
    public docData             :DocumentacionPdf[]  =[
        {name:'Document 1', url:''},
        {name:'Document 2', url:''},
        {name:'Document 3', url:''}
    ]
    public companyDataEdit     : Company            ={
        name: '',
        socialR: '',
        rfc: '',
        address: '',
        colony: '',
        city: '',
        state: '',
        cp: ''
    };

    public drafterContactDataEdit : DrafterContact  ={
        name: '',
        email: '',
        phone: '',
        post: ''
    }

    public representativeDataEdit :Representative   ={
        name: '',
        email: '',
        phone: ''
    }

    public creditData             :CreditData       ={
        amount: '',
        termsCollection: '',
        currency: ''
    }

    public bankDataEdit           :Bank             ={
        name: '',
        country: '',
        currency: '',
        bankAccount: '',
        swiftCode: '',
        routingAba: ''
    }

    



    constructor(private messageService: MessageService) {
        this.carrierEdit = {}; 

    }
    ngOnInit(): void {
        //Creame un objeto que contenga todos los datos que necesita la interfaz carries
        
        this.carrier = [
            {
                "company": {
                  "name": "Your Company Name",
                  "socialR": "Your Social Responsibility Number",
                  "rfc": "Your RFC (Federal Taxpayer Registry Number)",
                  "address": "Your Company Address",
                  "colony": "Your Colony Name",
                  "city": "Your City",
                  "state": "Your State",
                  "cp": "Your Postal Code"
                },
                "representative": {
                  "name": "Representative's Name",
                  "email": "Representative's Email",
                  "phone": "Representative's Phone Number"
                },
                "bank": {
                  "name": "Bank Name",
                  "country": "Country",
                  "currency": "Currency",
                  "bankAccount": "Bank Account Number",
                  "swiftCode": "SWIFT Code",
                  "routingAba": "Routing ABA Number"
                },
                "drafterContact": {
                  "name": "Drafter's Name",
                  "email": "Drafter's Email",
                  "phone": "Drafter's Phone Number",
                  "post": "Drafter's Post"
                },
                "creditData": {
                  "amount": "Credit Amount",
                  "termsCollection": "Terms of Collection",
                  "currency": "Currency"
                }
              }
        ];

    }

    showPdf() {
        this.showPdfViewer = true;
      }

    openNew(){
        this.carrierEdit = { };
        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.carrierEdit.client)
        this.carrierEdit = true;
     }
    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    editQuotation(carrier:any) {
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ quotation:", carrier)
        console.log('open');

        this.carrierEdit = { ...carrier };
        this.companyDataEdit =this.carrierEdit.company;
        this.drafterContactDataEdit =this.carrierEdit.drafterContact;
        this.representativeDataEdit =this.carrierEdit.representative;
        this.creditData=this.carrierEdit.creditData;
        this.bankDataEdit=this.carrierEdit.bank;
        console.log("🚀 ~ FileDemoComponent ~ editQuotation ~ this.bankDataEdit:", this.bankDataEdit )
        console.log("🚀 ~ FileDemoComponent ~ editQuotation ~ this.creditData:", this.creditData )
        console.log("🚀 ~ FileDemoComponent ~ editQuotation ~ this.representativeDataEdit:", this.representativeDataEdit )
        console.log("🚀 ~ FileDemoComponent ~ editQuotation ~ this.drafterContactDataEdit :", this.drafterContactDataEdit )
        console.log("🚀 ~ FileDemoComponent ~ editQuotation ~ this.companyDataEdit:", this.companyDataEdit.name)

        // this.quotationEdit={...quotation};
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.carrierEdit)
        console.log("🚀 ~ FormLayoutDemoComponent ~ editQuotation ~ this.quotationEdit:", this.carrierEdit.company)
        this.carrierDialog = true;
    } 
}
