import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public products;
  public customers;
  constructor(public serviceUsers:UsersService,public serviceLogin:LoginService) { }

  ngOnInit(): void {
  }

  onGetProducts(){
    this.customers=null;
    this.serviceUsers.getProducts().subscribe(data=>{
      this.products=data;
      },err=>{console.log(err,"daz hna");
      this.serviceLogin.refreshToken().subscribe(data=>{
        console.log("rr",data["refresh_Token"]);
        console.log("aa",data["access_Token"]);
        this.serviceLogin.getToken(data["refresh_Token"],data["access_Token"]);
        
        this.onGetProducts();
      },err=>{console.log(err["status"]);
    
    })
        
    })
  
   }
  
  
  onGetCustomers(){
    this.products=null
    this.serviceUsers.getCustomers().subscribe(data=>{
      this.customers=data;
      },err=>{console.log(err["status"]);
      this.serviceLogin.refreshToken().subscribe(data=>{
        this.serviceLogin.getToken(data["refresh_Token"],data["access_Token"]);
        this.onGetCustomers();
      },err=>{console.log(err["status"]);

      
    })
  })

 }
}
