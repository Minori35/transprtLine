import { Time } from "@angular/common";

export interface Order{
    id              :number,
    client?         : string,
    reference?      : string,
    user?           : string,
    load?           : string,
    shipper?        : string,
    weigth?         : string,
    carrierLoad?    : string,
    unitLoad?       : string,
    typeLoad?       : string,
    datePick?       : string,
    timePick?       : string,
    commentsPick?   : string,
    email?          : string
    carrierUnload?  : string,
    unitUnload?     : string,
    dateDelivery?   : string,
    timeDelivery?   : string,
    commentDelivery?: string,
    link?           : string
}

