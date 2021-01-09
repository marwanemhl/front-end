import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public bills;
  public bill;
  public productItems;
  constructor(public serviceBilling:BillingService,public serviceLogin:LoginService) { }

  ngOnInit(): void {
    
    this.serviceBilling.getBills().subscribe(data=>{
      this.bills=data;
      
    },err=>{console.log(err["status"]);
    this.serviceLogin.refreshToken().subscribe(data=>{ 
      console.log("rr",data["refresh_Token"]);
      console.log("aa",data["access_Token"]);
      this.serviceLogin.getToken(data["refresh_Token"],data["access_Token"]);
      
      this.ngOnInit();
    },err=>{console.log(err["status"]);
  })
        
})

}

  onGetBill(b){
    
   if(this.bill!=null && this.productItems!=null ){
    this.productItems=null;
    this.bill=null;
   } else{
    this.serviceBilling.getBill(b).subscribe(data=>{
      this.bill=data;
      this.productItems=data["productItems"];
      console.log(this.bill);
      console.log(this.productItems);
    },err=>{console.log(err["status"]);
    this.serviceLogin.refreshToken().subscribe(data=>{ 
      console.log("rr",data["refresh_Token"]);
      console.log("aa",data["access_Token"]);
      this.serviceLogin.getToken(data["refresh_Token"],data["access_Token"]);
      
      this.onGetBill(b);
    },err=>{console.log(err["status"]);
  })
        
})

}
    
  } 
}
