import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public username;
public password;


  constructor(public serviceLogin:LoginService,private cookieService:CookieService,private router: Router,public main: AppComponent) {
     
   }

  ngOnInit(): void {

       

  }
  authenticate(form){
    this.username=form.login;
    this.password=form.password;
    console.log(form);
    this.serviceLogin.login(form).subscribe(data=>{
      console.log(data);
      this.serviceLogin.getToken(data["refresh-token"],data["access-token"]);
      
      console.log("access-token :::",this.cookieService.get('access-token'));
      this.main.Login="Logout";
      this.router.navigate(['/users']);
      },err=>{console.log(err);})
      
      
  }
  

}
