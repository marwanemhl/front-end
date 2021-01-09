import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetjee';
  Login: string;
  constructor(private cookieService:CookieService) {
     
  }

  login(){
    this.cookieService.set('refresh-token','walo');
    this.cookieService.set('access-token','walo');
      this.Login="Login";
      
    
    console.log("popo");
  }

  ngOnInit(): void {
    this.Login="Login";
    this.cookieService.set('refresh-token','walo');
    this.cookieService.set('access-token','walo');

}
}
