export interface Company{
    name            :string;
    socialR         :string;
    rfc             :string;
    address         :string;
    colony          :string;
    city            :string;
    state           :string;
    cp              :string;


}

export interface Representative {
    name        : string;
    email       : string;
    phone       : string;


}

export interface Bank {
    name            : string;
    country         : string;
    currency        : string;
    bankAccount     : string;
    swiftCode       : string;
    routingAba      : string;
}

export interface  DrafterContact{
    name        : string;
    email       : string;
    phone       : string;
    post        : string;
}

export interface  CreditData{
    amount           : string;
    termsCollection  : string;
    currency         : string;
}


export interface Carrier{
    company         : Company;
    representative  : Representative;
    bank            : Bank;
    drafterContact  : DrafterContact;
    creditData      : CreditData;
}

export interface DocumentacionPdf{
    name            : string;
    url             : string;
}
